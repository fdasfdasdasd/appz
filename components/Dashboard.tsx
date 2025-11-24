
import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  Moon, Activity, Trophy, Dumbbell, Scroll, BedDouble, Quote, LayoutGrid, Heart, BookOpen, ChevronRight, Sparkles, ShieldAlert, ShieldCheck, Droplets, Brain, Tent, ChevronDown, ChevronUp, Zap, Skull, Leaf, Languages
} from 'lucide-react';
import { AppState, ViewState, SpiritualMood } from '../types';
import { DAILY_QUOTES, DUAS, URDU_CONCEPTS } from '../constants';
import { RANK_IMAGES, JUMUAH_IMAGE } from './SimpleTabs';

interface Props {
  state: AppState;
  changeView: (view: ViewState) => void;
  updateMood?: (mood: SpiritualMood) => void;
}

export const Dashboard: React.FC<Props> = ({ state, changeView, updateMood }) => {
  const [time, setTime] = useState(new Date());
  // Default expanded
  const [appsExpanded, setAppsExpanded] = useState(true);
  
  // Daily Logic
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // Daily Seed
  const dailyQuote = DAILY_QUOTES[seed % DAILY_QUOTES.length];
  const dailyDua = DUAS[seed % DUAS.length];
  const dailyConcept = URDU_CONCEPTS[seed % URDU_CONCEPTS.length]; // Rotating Urdu concept
  
  const currentXP = state.global.xp;
  const currentLevel = Math.floor(Math.sqrt(currentXP / 100)) + 1;
  const nextLevelXP = Math.pow(currentLevel, 2) * 100;
  const xpProgress = (currentXP / nextLevelXP) * 100;
  
  const isFriday = new Date().getDay() === 5;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    let greeting = 'Good Evening';
    if (hour < 5) greeting = 'Tahajjud Time';
    else if (hour < 7) greeting = 'Fajr Time';
    else if (hour < 12) greeting = 'Good Morning';
    else if (hour < 17) greeting = 'Good Afternoon';
    else if (hour < 20) greeting = 'Maghrib Time';
    return `${greeting}, Zohaib`;
  };

  return (
    <div className="pb-40 px-5 pt-14 animate-fade-in space-y-6 max-w-lg mx-auto">
      
      {/* Header & Level */}
      <div className="flex justify-between items-start animate-slide-up relative z-20">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <div className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[9px] font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md">
                {time.toLocaleDateString('en-US', { weekday: 'long' })}
             </div>
             <span className="text-[10px] text-secondary font-mono">{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight drop-shadow-md leading-none">
            {getGreeting()}
          </h1>
        </div>
        
        <div className="flex flex-col items-end gap-1.5">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary tracking-widest">
                <Trophy size={10} className="text-yellow-500" />
                <span>Lvl {currentLevel}</span>
             </div>
             <div className="w-28 h-2 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" style={{ width: `${Math.min(100, xpProgress)}%` }}></div>
             </div>
             <div className="text-[9px] text-emerald-500/60 font-mono">{Math.floor(currentXP)} XP</div>
        </div>
      </div>

      {/* Persistent Top Stats Section (Always Visible) */}
      <div className="space-y-4 animate-slide-up">
          {/* Primary Stats Card (Iman Score - Smaller & Daily Concept) */}
          <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-black rounded-[2rem] p-5 border border-emerald-500/20 relative overflow-hidden shadow-xl group flex flex-col justify-between h-40">
                   <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                   
                   <div className="flex justify-between items-start relative z-10">
                       <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Iman Score</h3>
                       <Heart size={14} className="text-emerald-500 fill-emerald-500/20" />
                   </div>
                   
                   <div className="flex items-baseline gap-1 relative z-10">
                       <div className="text-5xl font-mono font-bold text-white tracking-tighter text-glow">{Math.round(state.daily.imanScore)}</div>
                       <div className="text-sm text-white/40">%</div>
                   </div>
                   
                   <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden relative z-10 border border-white/5">
                        <div className="h-full bg-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#10b981]" style={{ width: `${state.daily.imanScore}%` }}></div>
                   </div>
              </div>
              
              {/* Daily Concept Tile */}
              <div className="bg-slate-900/60 rounded-[2rem] p-5 border border-white/10 relative overflow-hidden shadow-xl flex flex-col justify-between h-40 group">
                   <div className="absolute inset-0 bg-emerald-500/5 animate-pulse-slow"></div>
                   <div className="relative z-10 flex justify-between items-start">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Today's Focus</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   </div>
                   <div className="relative z-10 text-center">
                        <h2 className="text-4xl font-serif text-white font-arabic drop-shadow-md mb-1 animate-float" dir="auto">🎯 {dailyConcept.urdu}</h2>
                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{dailyConcept.english.split('(')[0]}</p>
                   </div>
              </div>
          </div>

          {/* Daily Dua Tile */}
          <div className="glass-panel p-6 rounded-[2rem] border border-indigo-500/20 bg-indigo-900/10 shadow-lg relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-[50px] animate-pulse-slow"></div>
               <div className="flex items-center gap-2 mb-3">
                   <div className="p-1.5 bg-indigo-500 rounded-lg"><Sparkles size={12} className="text-white" /></div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Daily Dua</span>
               </div>
               <div className="relative z-10">
                   <h3 className="text-xl font-serif text-white leading-relaxed text-right mb-2 font-arabic" dir="rtl">{dailyDua.arabic}</h3>
                   <p className="text-xs text-indigo-200/80 italic leading-relaxed">"{dailyDua.english}"</p>
               </div>
          </div>

          {/* Quote of the Day */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 flex gap-4 items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-50"></div>
              <Quote size={24} className="text-amber-400 flex-shrink-0 relative z-10" />
              <p className="text-xs text-slate-300 italic leading-relaxed font-medium relative z-10">"{dailyQuote}"</p>
          </div>
      </div>

      {/* Arrow Toggle for Apps Grid */}
      <div className="flex flex-col items-center justify-center -my-2 relative z-30 pt-2 gap-1">
          <div className="text-[9px] uppercase tracking-widest text-white/20 font-bold">
              {appsExpanded ? 'Hide Apps' : 'Show Apps'}
          </div>
          <button 
            onClick={() => setAppsExpanded(!appsExpanded)} 
            className="w-12 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary/50 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md active:scale-95 animate-pulse-slow group"
          >
              {appsExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />}
          </button>
      </div>

      {/* Collapsible Apps Stack */}
      <div className={`space-y-3 overflow-hidden transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${appsExpanded ? 'max-h-[3500px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-10'}`}>
           <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary pl-2 pt-2">Core Worship</h3>
           
           {/* Salah Card - Large */}
           <BentoCard 
                title="Salah" subtitle="Daily Prayers" 
                icon={<Moon size={20}/>} color="emerald" 
                onClick={() => changeView(ViewState.SALAH)} image={isFriday ? JUMUAH_IMAGE : RANK_IMAGES.SALAH} 
                streak={state.global.streaks.salah}
                daily={`${state.daily.prayers.filter(p=>p.completed).length}/6`}
                fullWidth
            />

            {/* Quran Card - Large */}
            <BentoCard 
                title="Quran" subtitle="Recitation" 
                icon={<BookOpen size={20}/>} color="purple" 
                onClick={() => changeView(ViewState.QURAN)} image={RANK_IMAGES.QURAN} 
                streak={state.global.currentParah} streakLabel="Parah"
                daily={`${Object.values(state.daily.quranParts).filter(Boolean).length}/4`}
                fullWidth
            />

            {/* Split Row: Dhikr & Night */}
            <div className="grid grid-cols-2 gap-3">
                <BentoCard 
                    title="Dhikr" color="amber" icon={<Activity size={18}/>} 
                    onClick={() => changeView(ViewState.DHIKR)} image={RANK_IMAGES.DHIKR} 
                    streak={state.global.streaks.dhikr}
                    daily={state.daily.dhikrAstaghfirullah + state.daily.dhikrRabbiInni + state.daily.customDhikr.reduce((a,b)=>a+b.count,0)}
                />
                <BentoCard 
                    title="Night" color="indigo" icon={<BedDouble size={18}/>} 
                    onClick={() => changeView(ViewState.NIGHT)} image={RANK_IMAGES.NIGHT} 
                    streak={state.global.streaks.night}
                    daily={`${Object.values(state.daily.night).filter(Boolean).length}/5`}
                />
            </div>
            
            <div className="h-4"></div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary pl-2">Self Improvement</h3>

            {/* Split Row: Fitness & Hygiene */}
            <div className="grid grid-cols-2 gap-3">
                <BentoCard 
                    title="Fit" color="orange" icon={<Dumbbell size={18}/>} 
                    onClick={() => changeView(ViewState.FITNESS)} image={RANK_IMAGES.FITNESS} 
                    streak={state.global.streaks.fitness}
                    daily={state.daily.fitness.pushups}
                />
                <BentoCard 
                    title="Clean" color="cyan" icon={<Droplets size={18}/>} 
                    onClick={() => changeView(ViewState.HYGIENE)} image={RANK_IMAGES.HYGIENE} 
                    streak={state.global.streaks.hygiene}
                    daily={`${state.daily.hygiene.waterGlasses}/8`}
                />
            </div>

            {/* MDF & Habits - Stacked Large */}
             <BentoCard 
                title="MDF Guard" subtitle="Purity" 
                icon={<ShieldAlert size={20}/>} color="rose" 
                onClick={() => changeView(ViewState.MDF)} image={RANK_IMAGES.MDF} 
                streak={state.global.streaks.mdf} streakLabel="Clean Streak"
                daily={state.daily.habits.failedToday ? "Relapse" : "Clean"}
                fullWidth
            />
            
            <BentoCard 
                title="Detox" subtitle="Habit Control" 
                icon={<ShieldCheck size={20}/>} color="slate" 
                onClick={() => changeView(ViewState.HABITS)} image={RANK_IMAGES.HABITS} 
                streak={state.global.streaks.habits}
                daily={state.daily.habits.failedToday ? "Fail" : "Pass"}
                fullWidth
            />
            
             <div className="h-4"></div>
             <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary pl-2">Knowledge</h3>
             
             <div className="grid grid-cols-2 gap-3">
                 <BentoCard 
                    title="Hadees" color="yellow" icon={<Scroll size={18}/>} 
                    onClick={() => changeView(ViewState.HADEES)} image={RANK_IMAGES.HADEES} 
                    streak={state.global.streaks.hadees}
                    daily={state.daily.hadeesRead ? "Read" : "-"}
                />
                <BentoCard 
                    title="Learn" color="pink" icon={<Brain size={18}/>} 
                    onClick={() => changeView(ViewState.MEMORIZE)} image={RANK_IMAGES.MEMORIZE} 
                    streak={state.global.memorizeProgress}
                    daily={state.global.memorizeWeek}
                />
             </div>

            <div className="grid grid-cols-2 gap-3">
                <BentoCard 
                    title="Janazah" color="slate" icon={<Skull size={18}/>} 
                    onClick={() => changeView(ViewState.JANAZAH)} image={RANK_IMAGES.NIGHT} 
                    streak={null} daily="Guide"
                />
                <BentoCard 
                    title="Tibb" color="emerald" icon={<Leaf size={18}/>} 
                    onClick={() => changeView(ViewState.TIBB)} image={RANK_IMAGES.HYGIENE} 
                    streak={null} daily="Remedies"
                />
            </div>

            <BentoCard 
                title="Word Quran" subtitle="Grammar & Meaning" 
                icon={<Languages size={20}/>} color="teal" 
                onClick={() => changeView(ViewState.WORD_QURAN)} image={RANK_IMAGES.QURAN} 
                streak={null} daily="Study"
                fullWidth
            />

             {/* Names of Allah */}
             <BentoCard 
                title="99 Names" subtitle="Asma-ul-Husna" 
                icon={<Sparkles size={20}/>} color="teal" 
                onClick={() => changeView(ViewState.NAMES99)} image={RANK_IMAGES.QURAN} 
                streak={null} daily="Learn"
                fullWidth
            />
             
             {/* Assistant */}
             <BentoCard 
                title="AI Guide" subtitle="Assistant" 
                icon={<Sparkles size={20}/>} color="blue" 
                onClick={() => changeView(ViewState.AI_CHAT)} image={RANK_IMAGES.AI_CHAT} 
                streak={null} daily="Online"
                fullWidth
            />

            {state.global.ramadanMode && (
                <BentoCard 
                    title="Ramadan" subtitle="Holy Month" 
                    icon={<Tent size={20}/>} color="purple" 
                    onClick={() => changeView(ViewState.RAMADAN)} image={RANK_IMAGES.RAMADAN} 
                    streak={state.global.ramadanStats.fastsDone} streakLabel="Fasts"
                    daily={state.daily.ramadan.iftar ? "Iftar Done" : "Fasting"}
                    fullWidth
                />
            )}
      </div>

    </div>
  );
};

interface BentoCardProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    color: string;
    onClick: () => void;
    image: string;
    streak?: number | null;
    streakLabel?: string;
    daily?: string | number;
    fullWidth?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, subtitle, icon, color, onClick, image, streak, streakLabel, daily, fullWidth }) => (
    <button onClick={onClick} className={`relative ${fullWidth ? 'h-40 w-full' : 'h-36 w-full'} rounded-[2rem] overflow-hidden group border border-white/5 shadow-lg active:scale-95 transition-all duration-300 hover:border-white/20 hover:shadow-2xl`}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
        
        {/* Streak/Overall Badge */}
        {streak !== undefined && streak !== null && (
             <div className="absolute top-4 right-4 flex flex-col items-end z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 shadow-sm group-hover:bg-black/60 transition-colors">
                     <span className={`text-[10px] font-bold text-${color}-400 uppercase`}>{streakLabel || 'Streak'}</span>
                     <span className="text-sm font-black text-white leading-none">{streak}</span>
                 </div>
             </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex items-end justify-between">
            <div className="text-left">
                {icon && (
                    <div className={`w-8 h-8 rounded-full bg-${color}-500 flex items-center justify-center text-white mb-3 shadow-lg shadow-black/50 text-sm transition-transform group-hover:-translate-y-1`}>
                        {icon}
                    </div>
                )}
                <h3 className={`${fullWidth ? 'text-xl' : 'text-lg'} font-bold text-white leading-none mb-1`}>{title}</h3>
                {subtitle && <p className="text-[9px] font-bold uppercase tracking-widest text-white/50">{subtitle}</p>}
            </div>

            {/* Daily Progress */}
            {daily !== undefined && (
                <div className="text-right flex flex-col items-end">
                     <div className={`text-lg font-mono font-bold text-${color}-400 drop-shadow-md`}>{daily}</div>
                     <div className="text-[8px] text-white/30 font-bold uppercase tracking-wider">Today</div>
                </div>
            )}
        </div>
        
        {/* Hover Arrow */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <ChevronRight size={14} />
            </div>
        </div>
    </button>
);
