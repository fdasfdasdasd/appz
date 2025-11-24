

import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2, Trash2, WifiOff } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { TabWrapper, HeroCard, RANK_IMAGES } from './SimpleTabs';
import { AppState } from '../types';
import { OFFLINE_AI_RESPONSES } from '../constants';

interface Props {
  state: AppState;
  onBack: () => void;
}

export const AIAssistant: React.FC<Props> = ({ state, onBack }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Assalamu Alaikum, Zohaib. I am your spiritual companion. How can I help you improve your connection with Allah today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!navigator.onLine) {
         throw new Error("Offline");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are Zohaib AI, a friendly, knowledgeable, and empathetic Islamic spiritual companion within the Zohaib Tracker app.
      
      Your goal is to help the user (Zohaib) improve their spiritual habits (Salah, Dhikr, Quran, Fitness, Hygiene).
      
      Current User Stats Context:
      - Salah Streak: ${state.global.streaks.salah} days
      - Quran Streak: ${state.global.streaks.quranSurah} days
      - Dhikr Streak: ${state.global.streaks.dhikr} days
      - Current Mood: ${state.daily.mood || 'Unknown'}
      - Iman Score: ${state.daily.imanScore}%
      - Date: ${new Date().toDateString()}
      - Is Ramadan: ${state.global.ramadanMode ? 'Yes' : 'No'}
      
      Rules:
      1. Keep responses concise, encouraging, and rooted in Islamic wisdom (Quran & Sunnah).
      2. Avoid controversial or divisive topics; focus on self-improvement (Tazkiyah), mindfulness (Muraqabah), and discipline.
      3. If the user asks for a Dua, provide it in Arabic (if possible) and English.
      4. Use a gentle, brotherly tone.
      5. Do not hallucinate app features. You can only track what is listed in the stats.
      `;

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      const result = await chat.sendMessageStream({ message: userMessage });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
         const chunkText = (chunk as GenerateContentResponse).text;
         if (chunkText) {
             fullResponse += chunkText;
             setMessages(prev => {
                 const newMessages = [...prev];
                 newMessages[newMessages.length - 1].text = fullResponse;
                 return newMessages;
             });
         }
      }
      
    } catch (error) {
       // Fallback for offline or API errors
       const fallback = OFFLINE_AI_RESPONSES[Math.floor(Math.random() * OFFLINE_AI_RESPONSES.length)];
       setMessages(prev => [...prev, { role: 'model', text: `(Offline Mode) ${fallback}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getSuggestions = () => {
      const s = [];
      const hour = new Date().getHours();
      
      if (hour < 7) s.push("Motivation for Fajr");
      else if (hour > 20) s.push("Night Adhkar");
      else if (new Date().getDay() === 5) s.push("Sunnahs of Friday");
      else s.push("Dua for anxiety");
      
      if (state.global.streaks.salah < 3) s.push("How to focus in Salah?");
      s.push("Explain Tawakkul");
      return s;
  };

  return (
    <TabWrapper themeColor="blue" subView="DAILY" setSubView={() => {}} onBack={onBack} visualType="AI_CHAT">
      <div className="space-y-4 pb-24 relative min-h-full">
        <div className="flex justify-between items-start">
             <HeroCard 
                title="Zohaib AI" 
                subtitle="Spiritual Guide" 
                stat={navigator.onLine ? "Online" : "Offline Mode"} 
                statLabel="Status" 
                icon={<Sparkles size={14} />} 
                bgImage={RANK_IMAGES.AI_CHAT} 
            />
            {messages.length > 2 && (
                <button 
                    onClick={() => setMessages([{ role: 'model', text: "Assalamu Alaikum, Zohaib. How can I help you?" }])}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white/50 hover:text-white hover:bg-white/20 transition-all z-20"
                >
                    <Trash2 size={16} />
                </button>
            )}
        </div>

        {!navigator.onLine && (
            <div className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center gap-2 text-yellow-500 text-xs font-bold mb-4 mx-1">
                <WifiOff size={14} /> You are offline. Using basic responses.
            </div>
        )}

        <div className="flex flex-col space-y-6 px-1">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-4 animate-slide-up ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg ${msg.role === 'user' ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white' : 'bg-white/10 backdrop-blur-md text-emerald-400'}`}>
                        {msg.role === 'user' ? <User size={18} /> : <Bot size={20} />}
                    </div>
                    <div className={`p-5 rounded-[1.5rem] max-w-[85%] text-sm leading-7 shadow-xl backdrop-blur-md border border-white/5 ${
                        msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-900/20' 
                        : 'bg-slate-900/60 text-slate-100 rounded-tl-none shadow-black/20'
                    }`}>
                         {/* Simple whitespace handling */}
                        <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>
                    </div>
                </div>
            ))}
            {isLoading && (
                 <div className="flex items-center gap-3 text-blue-300 text-xs pl-14 animate-pulse">
                     <div className="flex gap-1">
                         <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                         <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                         <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                     </div>
                     <span className="uppercase tracking-widest opacity-70">Thinking</span>
                 </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length < 4 && !isLoading && (
            <div className="flex flex-wrap gap-2 mt-6 px-2 justify-center">
                {getSuggestions().map((s, i) => (
                    <button key={i} onClick={() => { setInput(s); setTimeout(handleSend, 100); }} className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-300 hover:bg-white/10 hover:text-white transition-all active:scale-95 hover:border-white/20">
                        {s}
                    </button>
                ))}
            </div>
        )}

        {/* Floating Input Area */}
        <div className="fixed bottom-24 left-0 right-0 px-6 z-50 pointer-events-none">
             <div className="max-w-md mx-auto pointer-events-auto">
                 <div className="glass-panel p-2 rounded-[2rem] flex items-center gap-2 border-white/10 shadow-2xl bg-[#0f172a]/80 backdrop-blur-xl ring-1 ring-white/5">
                     <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask for guidance..." 
                        className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-slate-400/50 text-sm font-medium"
                        disabled={isLoading}
                     />
                     <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all active:scale-95 shadow-lg shadow-blue-900/50"
                     >
                         {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                     </button>
                 </div>
             </div>
        </div>
      </div>
    </TabWrapper>
  );
};
