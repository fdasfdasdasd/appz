
import React, { useState, useEffect } from 'react';
import { AppState, SubView, Exercise, ViewState } from '../types';
import { MEMORIZE_CONTENT, PARAH_NAMES_ARABIC, MASTER_ACHIEVEMENTS, getGrowthStage, PREDEFINED_DHIKR, PREDEFINED_WORKOUTS, HADEES_COLLECTION, QURAN_PART_LABELS, TAB_MESSAGES, NAMES_OF_ALLAH, JANAZAH_STEPS, TIBB_REMEDIES, WORD_QURAN_DATA } from '../constants';
import { BarChart } from './Charts';
import { 
  Check, Droplets, RotateCcw, ShieldAlert, CheckCircle2, BarChart2, Trophy, Dumbbell, Brain, Activity, Plus, Moon, BookOpen, Tent, ShieldCheck, Scroll, BedDouble, LampDesk, Brush, ShowerHead, AlertTriangle, Sparkles, ChevronLeft, Bell, Download, Upload, Trash2, Sunrise, Sunset, Heart, Maximize2, X, Lock, Snowflake, Sun, CloudSun, Utensils, Cigarette, Zap, Flame, Skull, ChevronDown, PenTool, Timer, Palette, Cloud, Wind, Printer, Leaf, Languages, Hourglass, Save, FileUp, GraduationCap, Settings
} from 'lucide-react';

// High-Quality Unsplash Images (Dark & Moody Aesthetics) - UPDATED
export const RANK_IMAGES: Record<string, string> = {
    SALAH: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2070&auto=format&fit=crop", 
    DHIKR: "https://images.unsplash.com/photo-1598556776374-3b794a096288?q=80&w=1936&auto=format&fit=crop", 
    HYGIENE: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1964&auto=format&fit=crop", 
    FITNESS: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", 
    HABITS: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop", 
    MDF: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop", 
    NIGHT: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1974&auto=format&fit=crop", 
    HADEES: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop", 
    MEMORIZE: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=2070&auto=format&fit=crop", 
    RAMADAN: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop", 
    QURAN: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop", 
    AI_CHAT: "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=2070&auto=format&fit=crop" 
};

export const JUMUAH_IMAGE = "https://images.unsplash.com/photo-1564769629178-58784aa67763?q=80&w=2070&auto=format&fit=crop";

const TaskCard = ({ title, subtitle, isCompleted, onClick, icon, actionIcon }: any) => {
    const [justChecked, setJustChecked] = useState(false);

    const handleClick = () => {
        if (!isCompleted) {
            setJustChecked(true);
            setTimeout(() => setJustChecked(false), 500);
        }
        onClick();
    };

    return (
    <div onClick={handleClick} className={`relative flex items-center justify-between p-5 rounded-[1.5rem] border transition-all duration-300 cursor-pointer animate-slide-up group overflow-hidden shadow-lg transform ${
        isCompleted 
          ? 'bg-emerald-500/10 border-emerald-500/30' 
          : 'glass-panel border-white/5 hover:border-white/20 hover:bg-white/5 active:scale-[0.98]'
    }`}>
        {isCompleted && (
            <div className="absolute inset-0 bg-emerald-500/5 animate-pulse-slow pointer-events-none"></div>
        )}
        
        <div className="relative z-10 flex items-center gap-5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative ${
                isCompleted ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' : 'border border-white/10 text-secondary bg-white/5'
            } ${justChecked ? 'animate-pop' : ''}`}>
                {isCompleted ? <CheckCircle2 size={22} strokeWidth={3} className="animate-check-stroke" /> : icon || <div className="w-3 h-3 rounded-full bg-white/10" />}
            </div>
            <div>
                <h3 className={`text-base font-bold transition-colors ${isCompleted ? 'text-emerald-400 text-glow' : 'text-primary'}`}>{title}</h3>
                {subtitle && <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">{subtitle}</p>}
            </div>
        </div>
        {actionIcon && <div className={`text-secondary/50 transition-colors ${isCompleted ? 'text-emerald-500' : ''}`}>{actionIcon}</div>}
    </div>
    );
};

export const HeroCard: React.FC<any> = ({ title, subtitle, stat, statLabel, bgImage, icon }) => (
    <div className="relative rounded-[2.5rem] p-8 shadow-2xl overflow-hidden min-h-[240px] flex flex-col justify-between border border-white/10 group mb-6 animate-scale-in bg-black">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-80" style={{ backgroundImage: `url(${bgImage})` }}></div>
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
        
        {/* Metallic Shine Effect */}
        <div className="absolute inset-0 bg-shine-gradient bg-[length:200%_100%] animate-shine opacity-10 pointer-events-none mix-blend-overlay"></div>

        <div className="relative z-10">
            {icon && (
                <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/10 shadow-lg mb-4 animate-slide-up">
                   {icon} <span>{subtitle}</span>
                </div>
            )}
            <h1 className="text-5xl font-serif font-bold text-white drop-shadow-2xl leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>{title}</h1>
        </div>

        {stat !== undefined && (
            <div className="relative z-10 flex items-end justify-between border-t border-white/10 pt-4 mt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                 <div>
                     <div className="text-5xl font-mono font-bold text-white drop-shadow-lg tracking-tighter text-glow">{stat}</div>
                     <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold mt-1">{statLabel}</div>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 backdrop-blur-md flex items-center justify-center border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)] animate-float">
                     <Trophy size={20} className="text-yellow-400" />
                 </div>
            </div>
        )}
    </div>
);

// --- TAB WRAPPER ---
const THEME_STYLES: Record<string, any> = {
  emerald: { bg: 'bg-emerald-500', color: 'text-emerald-500', border: 'border-emerald-500' },
  amber: { bg: 'bg-amber-500', color: 'text-amber-500', border: 'border-amber-500' },
  rose: { bg: 'bg-rose-500', color: 'text-rose-500', border: 'border-rose-500' },
  cyan: { bg: 'bg-cyan-500', color: 'text-cyan-500', border: 'border-cyan-500' },
  purple: { bg: 'bg-purple-500', color: 'text-purple-500', border: 'border-purple-500' },
  orange: { bg: 'bg-orange-500', color: 'text-orange-500', border: 'border-orange-500' },
  pink: { bg: 'bg-pink-500', color: 'text-pink-500', border: 'border-pink-500' },
  indigo: { bg: 'bg-indigo-500', color: 'text-indigo-500', border: 'border-indigo-500' },
  gold: { bg: 'bg-yellow-500', color: 'text-yellow-500', border: 'border-yellow-500' },
  slate: { bg: 'bg-slate-500', color: 'text-slate-500', border: 'border-slate-500' },
  blue: { bg: 'bg-blue-500', color: 'text-blue-500', border: 'border-blue-500' },
  teal: { bg: 'bg-teal-500', color: 'text-teal-500', border: 'border-teal-500' },
};

export const TabWrapper: React.FC<{ 
  children: React.ReactNode; 
  themeColor: string; 
  subView: SubView; 
  setSubView: (v: SubView) => void; 
  visualType?: string;
  onBack?: () => void;
  hideSubNav?: boolean;
}> = ({ children, themeColor, subView, setSubView, visualType, onBack, hideSubNav }) => {
  const styles = THEME_STYLES[themeColor] || THEME_STYLES['emerald'];
  
  // Daily Message
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const categoryMessages = visualType ? TAB_MESSAGES[visualType] : null;
  const dailyMessage = categoryMessages ? categoryMessages[seed % categoryMessages.length] : null;

  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center justify-between px-6 py-6 animate-fade-in z-50 sticky top-0 bg-[#0F172A]/0 backdrop-blur-none border-b border-white/0">
          <button 
            onClick={onBack} 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary active:scale-90 transition-all hover:bg-white/10 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          
          {!hideSubNav ? (
            <div className="bg-white/5 backdrop-blur-xl rounded-full p-1.5 flex gap-1 border border-white/10 shadow-lg ring-1 ring-white/5">
                {(['DAILY', 'STATS', 'AWARDS'] as SubView[]).map((v) => (
                <button key={v} onClick={() => setSubView(v)} className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 relative overflow-hidden ${subView === v ? 'text-white shadow-lg scale-105' : 'text-secondary hover:text-primary'}`}>
                    {subView === v && <div className={`absolute inset-0 ${styles.bg} opacity-100`}></div>}
                    {subView === v && <div className="absolute inset-0 bg-white/20 animate-shine"></div>}
                    <span className="relative z-10">{v}</span>
                </button>
                ))}
            </div>
          ) : (
             <div className="flex-1"></div>
          )}
          
          <div className="w-10" /> 
      </div>
      
      <div className="px-5 pb-32 pt-2 flex-1 overflow-y-auto no-scrollbar">
          {dailyMessage && subView === 'DAILY' && !hideSubNav && (
              <div className={`mb-4 px-4 py-3 rounded-2xl ${styles.bg} bg-opacity-10 border border-${themeColor}-500/20 text-${themeColor}-400 text-xs font-medium text-center italic animate-slide-up flex items-center justify-center gap-2 shadow-lg`}>
                  <Sparkles size={12} />
                  "{dailyMessage}"
              </div>
          )}
          {children}
      </div>
    </div>
  );
};

export const RankCard: React.FC<any> = ({ stage, streak = 0, maxStreak = 0, color, bgImage }) => {
    const styles = THEME_STYLES[color] || THEME_STYLES['emerald'];
    const safeStreak = isNaN(streak) ? 0 : streak;
    const nextThreshold = stage.next ? stage.next.threshold : Math.max(safeStreak * 1.5, 100);
    const prevThreshold = stage.current.threshold || 0;
    
    // Safety against division by zero or NaN
    const range = Math.max(1, nextThreshold - prevThreshold);
    const percentage = Math.min(100, Math.max(0, ((safeStreak - prevThreshold) / range) * 100));
    
    return (
        <div className="relative rounded-[2.5rem] p-6 overflow-hidden mb-6 border border-white/10 shadow-2xl animate-slide-up group h-52 flex items-center bg-[#020617]">
            {bgImage && (
                <div className="absolute inset-0">
                    <img src={bgImage} className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                    {/* Animated Particles */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
                        <div className="absolute bottom-10 right-20 w-1 h-1 bg-white rounded-full animate-float-slow"></div>
                    </div>
                </div>
            )}
            
            <div className="relative z-10 flex items-center gap-6 w-full">
                 <div className={`w-24 h-24 rounded-2xl ${styles.bg} flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/20 text-white transform rotate-3 group-hover:rotate-0 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 animate-shine"></div>
                    <span className="relative z-10 drop-shadow-md animate-pulse-slow">{stage.current.icon}</span>
                 </div>
                 
                 <div className="flex-1">
                     <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-1">Current Rank</div>
                     <h2 className={`text-3xl font-black uppercase italic ${styles.color} mb-3 text-glow`}>{stage.current.label}</h2>
                     
                     <div className="flex justify-between text-[10px] font-bold text-white/80 mb-1">
                         <span>Streak: {safeStreak}</span>
                         <span>Next: {stage.next?.label || 'Max'}</span>
                     </div>
                     <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                        <div className={`h-full ${styles.bg} rounded-full transition-all duration-1000 relative shadow-[0_0_10px_currentColor]`} style={{ width: `${isNaN(percentage) ? 0 : percentage}%` }}>
                            <div className="absolute inset-0 bg-white/40 animate-shimmer"></div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export const StatsCalendar: React.FC<any> = ({ history, current, color, checkDay, label }) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const styles = THEME_STYLES[color] || THEME_STYLES['emerald'];
    return (
        <div className="glass-panel p-6 rounded-[2rem] border-white/5 animate-slide-up shadow-lg relative overflow-hidden">
            <div className={`absolute -top-10 -right-10 w-32 h-32 ${styles.bg} opacity-10 blur-[50px] rounded-full`}></div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-secondary mb-6 flex justify-between items-center relative z-10">
                <span>Last 7 Days</span>
                <span className={`px-2 py-1 rounded-md bg-white/5 ${styles.color} border border-white/5`}>{label}</span>
            </h4>
            <div className="flex justify-between items-center relative z-10">
                {days.map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <span className="text-[9px] font-bold text-secondary opacity-50">{d}</span>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all duration-500 ${
                            i === 6 
                            ? (checkDay(current) ? `${styles.bg} text-white border-transparent shadow-[0_0_15px_currentColor] scale-110` : 'bg-white/5 text-secondary border-white/10')
                            : 'bg-white/5 text-secondary border-white/10 opacity-50'
                        }`}>
                           {i === 6 && checkDay(current) && <Check size={14} strokeWidth={3} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Awards View with Professional Grid & Difficulty Handling
export const AwardsView: React.FC<{ categories: string[]; unlocked: string[] }> = ({ categories, unlocked }) => {
    const relevantAchievements = MASTER_ACHIEVEMENTS.filter(a => categories.includes(a.category));
    const unlockedCount = relevantAchievements.filter(a => unlocked.includes(a.id)).length;
    const progress = relevantAchievements.length > 0 ? (unlockedCount / relevantAchievements.length) * 100 : 0;

    const getTierStyle = (tier: string, unlocked: boolean) => {
        if (!unlocked) return 'border-white/5 bg-white/[0.02] opacity-60 grayscale';
        switch(tier) {
            case 'BRONZE': return 'border-orange-700/50 bg-orange-900/10 text-orange-400 shadow-[0_0_15px_rgba(194,65,12,0.1)]';
            case 'SILVER': return 'border-slate-400/50 bg-slate-800/20 text-slate-300 shadow-[0_0_15px_rgba(148,163,184,0.1)]';
            case 'GOLD': return 'border-yellow-500/50 bg-yellow-900/10 text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]';
            case 'PLATINUM': return 'border-cyan-400/50 bg-cyan-900/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.3)]';
            case 'DIAMOND': return 'border-blue-400/50 bg-blue-900/10 text-blue-300 shadow-[0_0_30px_rgba(96,165,250,0.4)]';
            case 'TITAN': return 'border-rose-500/50 bg-rose-900/10 text-rose-400 shadow-[0_0_40px_rgba(244,63,94,0.5)] animate-pulse-slow';
            case 'MYTHIC': return 'border-fuchsia-500/50 bg-fuchsia-900/10 text-fuchsia-400 shadow-[0_0_40px_rgba(217,70,239,0.5)] animate-pulse-slow';
            case 'DIVINE': return 'border-amber-400/50 bg-amber-900/10 text-amber-300 shadow-[0_0_50px_rgba(251,191,36,0.5)] animate-pulse';
            case 'LEGEND': return 'border-emerald-500/50 bg-emerald-900/10 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.5)]';
            case 'ETERNAL': return 'border-purple-500/50 bg-purple-900/10 text-purple-400 shadow-[0_0_40px_rgba(168,85,247,0.5)]';
            default: return 'border-emerald-500/50 bg-emerald-900/20 text-emerald-400';
        }
    };

    return (
        <div className="space-y-6 animate-slide-up pb-10">
            <div className="glass-panel p-6 rounded-[2rem] text-center relative overflow-hidden group border-white/5">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                    <Trophy size={40} className="mx-auto text-yellow-400 mb-3 drop-shadow-lg animate-float" />
                    <h3 className="text-xl font-bold text-white tracking-tight">Trophy Case</h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                         <div className="h-1.5 w-32 bg-white/10 rounded-full overflow-hidden">
                             <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-600" style={{ width: `${progress}%` }}></div>
                         </div>
                         <span className="text-[10px] text-secondary font-bold">{unlockedCount} / {relevantAchievements.length}</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {relevantAchievements.map((ach, i) => {
                    const isUnlocked = unlocked.includes(ach.id);
                    return (
                        <div key={ach.id} className={`p-4 rounded-[1.5rem] border transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center gap-3 group animate-slide-up hover:scale-[1.02] ${getTierStyle(ach.tier, isUnlocked)}`} style={{ animationDelay: `${(i % 10) * 0.05}s` }}>
                            {/* Shine Effect for Unlocked */}
                            {isUnlocked && <div className="absolute inset-0 bg-white/5 animate-shine pointer-events-none mix-blend-overlay"></div>}
                            
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl relative transition-transform duration-500 ${isUnlocked ? 'scale-110' : 'bg-black/20'}`}>
                                {isUnlocked ? ach.icon : <Lock size={16} className="text-white/20" />}
                            </div>
                            
                            <div>
                                <h4 className={`font-bold text-xs leading-tight mb-1 ${isUnlocked ? 'text-white' : 'text-white/40'}`}>{ach.title}</h4>
                                <p className="text-[9px] text-secondary/50 leading-relaxed line-clamp-2">{ach.description}</p>
                            </div>
                            
                            {isUnlocked && (
                                <div className="mt-auto pt-2 border-t border-white/5 w-full">
                                    <span className="text-[8px] font-black uppercase tracking-widest opacity-60">{ach.tier}</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
            {relevantAchievements.length === 0 && (
                <div className="text-center py-10 opacity-50">
                    <Lock size={40} className="mx-auto mb-4" />
                    <p className="text-sm font-bold">No achievements available for this category yet.</p>
                </div>
            )}
        </div>
    );
};

const GenericStatsView: React.FC<any> = ({ state, category, color, checkDay, getValue, maxVal, label, labelTotal, totalValue }) => {
    // Robust streak handling to prevent crashes
    const catKey = category.toLowerCase();
    
    // Determine streak based on category mapping
    let streak = 0;
    if (category === 'MEMORIZE') streak = state.global.memorizeWeek || 0;
    else if (category === 'QURAN') streak = state.global.streaks.quranSurah || 0;
    else streak = state.global.streaks[catKey] || 0;
    
    // Determine max streak
    let maxStreak = 0;
    if (category === 'MEMORIZE') maxStreak = state.global.memorizeProgress || 0;
    else maxStreak = state.global.streaks[`max${category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}`] || streak;
    
    // Growth stage
    const stage = getGrowthStage(category, streak);

    // Calculate total safely
    const calculatedTotal = totalValue !== undefined ? totalValue : (
        (state.global.history?.reduce((acc: number, d: any) => acc + (getValue(d) || 0), 0) || 0) + (getValue(state.daily) || 0)
    );
    
    // Generate history data safely
    const history = state.global.history ? state.global.history.slice(-7) : [];
    const combined = [...history, state.daily];
    const data = combined.slice(-7).map((day: any) => getValue(day) || 0); // Default to 0
    const finalData = [...Array(Math.max(0, 7 - data.length)).fill(0), ...data];
    const labels = ["D-6", "D-5", "D-4", "D-3", "D-2", "Yest", "Today"];
    const bgImage = RANK_IMAGES[category] || RANK_IMAGES['SALAH'];

    // Time Travel Projection
    const dailyAvg = calculatedTotal / Math.max(1, state.global.history.length + 1);
    const tenYearProjection = Math.floor(calculatedTotal + (dailyAvg * 3650));

    return (
        <div className="animate-slide-up pb-10 space-y-4">
            <RankCard stage={stage} streak={streak} maxStreak={maxStreak || streak} color={color} bgImage={bgImage} />

            <div className="grid grid-cols-2 gap-3 mb-2">
                 <div className={`glass-panel p-6 rounded-[2rem] text-center border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg`}>
                    <div className="text-[9px] uppercase tracking-widest text-secondary mb-2 font-bold">Current Streak</div>
                    <div className={`text-4xl font-mono font-bold text-${color}-500 drop-shadow-sm`}>{streak}</div>
                 </div>
                 <div className={`glass-panel p-6 rounded-[2rem] text-center border-white/5 hover:border-white/20 transition-all duration-300 shadow-lg`}>
                    <div className="text-[9px] uppercase tracking-widest text-secondary mb-2 font-bold">Lifetime {labelTotal}</div>
                    <div className="text-4xl font-mono font-bold text-white drop-shadow-sm">{calculatedTotal.toLocaleString()}</div>
                 </div>
            </div>

            {/* Time Travel Stats */}
            <div className={`glass-panel p-6 rounded-[2rem] border-${color}-500/20 bg-gradient-to-br from-black to-${color}-950/20 relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-10 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-colors"></div>
                <div className="relative z-10 flex items-center justify-between">
                     <div>
                         <div className={`text-xs font-bold text-${color}-400 uppercase tracking-widest flex items-center gap-2 mb-2`}><Hourglass size={14} /> Time Travel: 2035</div>
                         <div className="text-white text-sm opacity-80">If you keep this up, in 10 years you'll have:</div>
                         <div className="text-3xl font-mono font-bold text-white mt-2 drop-shadow-md">{tenYearProjection.toLocaleString()} <span className="text-sm font-sans font-normal opacity-50">{label}</span></div>
                     </div>
                </div>
            </div>
            
            <StatsCalendar history={state.global.history} current={state.daily} color={color} checkDay={checkDay} label="Goals Hit" />
            <div className="glass-panel p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 shadow-lg border-white/5">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-primary"><BarChart2 size={16} className={`text-${color}-500`}/> Trends</h3>
                <BarChart data={finalData} labels={labels} color={color} maxVal={maxVal} />
            </div>
        </div>
    );
}

// ... existing exports ...
export const TabDhikr: React.FC<any> = ({ state, updateDhikr, addCustomDhikr, onBack, themeOverride }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const [showAddModal, setShowAddModal] = useState(false);
    const [focusMode, setFocusMode] = useState<{id: string, label: string, target: number, current: number} | null>(null);
    
    // Ensure data exists before reducing
    const customDhikrCount = state.daily.customDhikr ? state.daily.customDhikr.reduce((acc:number, curr:any) => acc + (curr.count || 0), 0) : 0;
    const currentCount = (state.daily.dhikrAstaghfirullah || 0) + (state.daily.dhikrRabbiInni || 0) + customDhikrCount;
    const themeColor = themeOverride || "amber";

    const handleFocusTap = () => {
        if (!focusMode) return;
        updateDhikr(focusMode.id, 1);
        setFocusMode(prev => prev ? ({ ...prev, current: prev.current + 1 }) : null);
        try {
            if(navigator.vibrate) navigator.vibrate(5);
        } catch(e) {}
    };

    if (focusMode) {
        return (
            <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center animate-fade-in" onClick={handleFocusTap}>
                 <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[20s] scale-125" style={{ backgroundImage: `url(${RANK_IMAGES.DHIKR})` }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                 <button onClick={(e) => { e.stopPropagation(); setFocusMode(null); }} className="absolute top-8 left-6 p-4 rounded-full bg-white/10 border border-white/10 text-white z-50 hover:bg-white/20 transition-all"><X size={24} /></button>
                 
                 <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-12 pointer-events-none">
                      <div className="text-center space-y-3">
                           <h2 className={`text-4xl md:text-5xl font-serif font-bold text-${themeColor}-500 drop-shadow-lg animate-float`} dir="auto">{focusMode.label}</h2>
                           <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold">Tap anywhere to count</p>
                      </div>

                      <div className="relative w-80 h-80 flex items-center justify-center">
                           <div className="absolute inset-0 rounded-full border-8 border-white/5"></div>
                           <div className={`absolute inset-0 rounded-full border-8 border-${themeColor}-500/30 border-t-${themeColor}-500 transition-all duration-100 shadow-[0_0_30px_rgba(245,158,11,0.3)]`} style={{ transform: `rotate(${(focusMode.current / focusMode.target) * 360}deg)` }}></div>
                           
                           <div className={`absolute inset-0 flex items-center justify-center`}>
                                <div className={`w-full h-full rounded-full bg-${themeColor}-500/5 animate-pulse`}></div>
                           </div>

                           <div className="text-center z-20">
                                <div className="text-9xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl">{focusMode.current}</div>
                                <div className={`text-sm font-bold text-${themeColor}-400 mt-4 uppercase tracking-widest`}>Target: {focusMode.target}</div>
                           </div>
                      </div>
                 </div>
            </div>
        );
    }

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Dhikr" 
                subtitle="Remembrance" 
                stat={currentCount} 
                statLabel="Total Recitations" 
                icon={<Activity size={14} />} 
                bgImage={RANK_IMAGES.DHIKR}
            />
            
            <div className="space-y-3">
                <DhikrCard 
                    label="أَسْتَغْفِرُ اللَّهَ" 
                    count={state.daily.dhikrAstaghfirullah} 
                    target={2100} 
                    onTap={(n:any) => updateDhikr('astaghfirullah', n)} 
                    onFocus={() => setFocusMode({ id: 'astaghfirullah', label: 'أَسْتَغْفِرُ اللَّهَ', target: 2100, current: state.daily.dhikrAstaghfirullah })}
                    color={themeColor} 
                />
                <DhikrCard 
                    label="رَبِّ اشْرَحْ لِي صَدْرِي" 
                    count={state.daily.dhikrRabbiInni} 
                    target={2100} 
                    onTap={(n:any) => updateDhikr('rabbiInni', n)} 
                    onFocus={() => setFocusMode({ id: 'rabbiInni', label: 'رَبِّ اشْرَحْ لِي صَدْرِي', target: 2100, current: state.daily.dhikrRabbiInni })}
                    color={themeColor} 
                />
                {(state.daily.customDhikr || []).map((d: any) => (
                    <DhikrCard 
                        key={d.id} 
                        label={d.text} 
                        count={d.count} 
                        target={d.target} 
                        onTap={(n:any) => updateDhikr(d.id, n)} 
                        onFocus={() => setFocusMode({ id: d.id, label: d.text, target: d.target, current: d.count })}
                        color={themeColor} 
                    />
                ))}
            </div>
            <button onClick={() => setShowAddModal(true)} className="w-full py-5 rounded-[1.5rem] border border-dashed border-white/10 text-secondary hover:text-white hover:border-white/30 flex items-center justify-center gap-2 text-xs uppercase tracking-widest mt-4 hover:bg-white/5 transition-all active:scale-95"><Plus size={16} /> Add Custom Dhikr</button>
        </div>
    );

    return (
        <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="DHIKR">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="DHIKR" color={themeColor} checkDay={(d: any) => (d.dhikrAstaghfirullah + d.dhikrRabbiInni) >= 4200} getValue={(d: any) => d.dhikrAstaghfirullah + d.dhikrRabbiInni} maxVal={5000} label="Count" labelTotal="Lifetime" />}
            {subView === 'AWARDS' && <AwardsView categories={['DHIKR']} unlocked={state.global.unlockedAchievements} />}
            {showAddModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
                    <div className={`glass-panel border border-${themeColor}-500/30 rounded-[2rem] p-6 w-full max-w-sm shadow-2xl animate-scale-in`}>
                        <h3 className={`text-sm font-bold text-${themeColor}-500 mb-6 uppercase tracking-widest text-center`}>Select Dhikr</h3>
                        <div className="space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
                            {PREDEFINED_DHIKR.map((d, i) => (
                                <button key={i} onClick={() => { addCustomDhikr(d.arabic, 100); setShowAddModal(false); }} className={`w-full p-4 rounded-xl bg-white/5 hover:bg-${themeColor}-500/20 border border-white/5 text-left transition-colors flex items-center justify-between group`}>
                                    <div className="font-serif text-xl text-primary" dir="auto">{d.arabic}</div>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setShowAddModal(false)} className="w-full py-4 mt-4 text-xs text-white bg-white/10 rounded-xl font-bold hover:bg-white/20 uppercase tracking-wider">Cancel</button>
                    </div>
                </div>
            )}
        </TabWrapper>
    );
};

const DhikrCard: React.FC<any> = ({ label, count, target, onTap, onFocus, color }) => (
    <div className={`relative flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-300 group overflow-hidden animate-slide-up shadow-lg ${count >= target ? `bg-${color}-500/10 border-${color}-500/30` : 'glass-panel border-white/5 hover:border-white/10'}`}>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
            <div className={`h-full bg-${color}-500 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]`} style={{ width: `${Math.min(100, (count/target)*100)}%` }}></div>
        </div>
        
        <div className="flex-1 cursor-pointer" onClick={() => onTap(100)}>
            <div className="relative z-10">
                <h3 className={`text-2xl font-bold font-serif mb-1 ${count >= target ? `text-${color}-400 text-glow` : 'text-primary'}`} dir="auto">{label}</h3>
                <p className="text-[9px] uppercase tracking-widest text-secondary font-bold group-hover:text-white/60 transition-colors">Target: {target}</p>
            </div>
            <div className="text-4xl font-mono font-bold text-white relative z-10 drop-shadow-sm mt-3 tracking-tight">{count}</div>
        </div>

        <button 
            onClick={(e) => { e.stopPropagation(); onFocus(); }}
            className={`p-3.5 rounded-2xl bg-white/5 hover:bg-${color}-500 hover:text-white text-secondary transition-all active:scale-95 z-20 border border-white/5 shadow-md`}
        >
            <Maximize2 size={20} />
        </button>

        {count >= target && <div className={`absolute inset-0 bg-${color}-500/5 animate-pulse-slow pointer-events-none`}></div>}
    </div>
);

export const TabHygiene: React.FC<any> = ({ state, updateHygiene, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const waterProgress = state.daily.hygiene.waterGlasses;
    const progressPercent = Math.min(100, (waterProgress / 8) * 100);

    const renderDaily = () => (
      <div className="space-y-4 animate-slide-up pb-10">
          <HeroCard 
            title="Hygiene" 
            subtitle="Cleanliness" 
            stat={`${waterProgress}/8`} 
            statLabel="Water Intake" 
            icon={<Droplets size={14} />} 
            bgImage={RANK_IMAGES.HYGIENE}
          />
          
          <div className="glass-panel p-0 rounded-[2.5rem] border-cyan-500/20 mb-2 shadow-2xl relative overflow-hidden h-56 group bg-cyan-950/20">
              {/* Liquid Wave Animation Container */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-cyan-500/70 transition-all duration-1000 ease-in-out z-10"
                style={{ height: `${progressPercent}%` }}
              >
                 <div className="absolute -top-12 left-0 right-0 h-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0iIzA2YjZkNCIgZmlsbC1vcGFjaXR5PSIwLjciIGQ9Ik0wLDk2TDQ4LDExMkM5NiwxMjgsMTkyLDE2MCwyODgsMTYwQzM4NCwxNjAsNDgwLDE2OCw1NzYsMTEyQzY3Miw5Niw3NjgsOTYsODY0LDExMkM5NjAsMTI4LDEwNTYsMTYwLDExNTIsMTYwQzEyNDgsMTYwLDEzNDQsMTI4LDEzOTIsMTEyTDE0NDAsOTZMMTQ0MCwzMjBMMTM5WiwzMjBDMTM0NCwzMjAsMTI0OCwzMjAsMTE1MiwzMjBDMTA1NiwzMjAsOTYwLDMyMCw4NjQsMzIwQzc2OCwzMjAsNjcyLDMyMCw1NzYsMzIwQzQ4MCwzMjAsMzg0LDMyMCwyODgsMzIwQzE5MiwzMjAsOTYsMzIwLDQ4LDMyMEwwLDMyMFoiPjwvcGF0aD48L3N2Zz4=')] bg-cover animate-wave opacity-80"></div>
              </div>
              
              {/* Back Wave (Darker) */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-cyan-700/50 transition-all duration-1000 ease-in-out"
                style={{ height: `${Math.max(0, progressPercent - 5)}%` }}
              >
                   <div className="absolute -top-12 left-0 right-0 h-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZmlsbD0iIzBlNzQ5MCIgZmlsbC1vcGFjaXR5PSIwLjUiIGQ9Ik0wLDE5Mkw0OCwxNzZDOTYsMTYwLDE5MiwxMjgsMjg4LDEzOC43QzM4NCwxNDksNDgwLDIwMyw1NzYsMjEzLjNDNjcyLDIyNCw3NjgsMTkyLDg2NCwxNzAuN0M5NjAsMTQ5LDEwNTYsMTM5MTE1MiwxNDRDMTI0OCwxNDksMTM0NCwxNzAsMTM5MiwxODAuN0wxNDQwLDE5MkwxNDQwLDMyMEwxMzkyLDMyMEMxMzQ0LDMyMCwxMjQ4LDMyMCwxMTUyLDMyMEMxMDU2LDMyMCw5NjAsMzIwLDg2NCwzMjBDNzY4LDMyMCw2NzIsMzIwLDU3NiwzMjBDNDgwLDMyMCwzODQsMzIwLDI4OCwzMjBDMTkyLDMyMCw5NiwzMjAsNDgsMzIwTDAsMzIwWiI+PC9wYXRoPjwvc3ZnPg==')] bg-cover animate-wave opacity-50" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Bubbles */}
              <div className="absolute inset-0 pointer-events-none z-20">
                   {[...Array(8)].map((_, i) => (
                       <div key={i} className="absolute bg-white/20 rounded-full animate-float" style={{
                           width: Math.random()*10 + 5 + 'px', height: Math.random()*10 + 5 + 'px',
                           bottom: '-20px', left: Math.random()*100 + '%', animationDuration: Math.random()*5 + 3 + 's'
                       }}></div>
                   ))}
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
                  <div className="text-6xl font-mono font-bold text-white drop-shadow-lg">{Math.round(progressPercent)}%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/80 mt-2 bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Hydration</div>
              </div>
              
              <div className="absolute bottom-6 right-6 z-40 flex gap-3">
                 <button onClick={() => updateHygiene('water')} className="w-14 h-14 rounded-full bg-white text-cyan-600 flex items-center justify-center active:scale-90 shadow-xl hover:bg-cyan-50 transition-all"><Plus size={28} strokeWidth={3} /></button>
                 <button onClick={() => updateHygiene('reset_water')} className="w-14 h-14 rounded-full bg-black/30 text-white flex items-center justify-center active:scale-90 shadow-xl hover:bg-black/40 transition-all backdrop-blur-md border border-white/10"><RotateCcw size={24} /></button>
              </div>
          </div>
          
          <div className="space-y-3">
               {[{k:'shower', l:'Shower', i:<ShowerHead size={20}/>}, {k:'brush', l:'Brush', i:<Brush size={20}/>}, {k:'cleanDesk', l:'Clean Desk', i:<LampDesk size={20}/>}].map((t:any) => (
                   <TaskCard 
                      key={t.k} 
                      title={t.l} 
                      subtitle="Daily Task" 
                      icon={t.i} 
                      isCompleted={state.daily.hygiene[t.k]} 
                      onClick={() => updateHygiene(t.k)} 
                   />
               ))}
          </div>
      </div>
    );

    return (
       <TabWrapper themeColor="cyan" subView={subView} setSubView={setSubView} onBack={onBack} visualType="HYGIENE">
           {subView === 'DAILY' && renderDaily()}
           {subView === 'STATS' && <GenericStatsView state={state} category="HYGIENE" color="cyan" checkDay={(d:any) => d.hygiene.waterGlasses >= 8} getValue={(d:any) => d.hygiene.waterGlasses} maxVal={10} label="Water" labelTotal="Total" />}
           {subView === 'AWARDS' && <AwardsView categories={['HYGIENE']} unlocked={state.global.unlockedAchievements} />}
       </TabWrapper>
    );
};

export const TabFitness: React.FC<any> = ({ state, updatePushups, addCustomExercise, updateCustomExercise, onBack, onOpenBreathwork }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const [newExName, setNewExName] = useState("");
    const [newExReps, setNewExReps] = useState(20);
    const progress = Math.min(100, (state.daily.fitness.pushups / state.daily.fitness.pushupsTarget) * 100);

    const renderDaily = () => (
        <div className="space-y-6 animate-slide-up pb-10">
            <HeroCard 
                title="Fitness" 
                subtitle="Physical Health" 
                stat={state.daily.fitness.pushups} 
                statLabel="Pushups Today" 
                icon={<Dumbbell size={14} />} 
                bgImage={RANK_IMAGES.FITNESS} 
            />
            
            {/* New Animated Energy Core */}
            <div className="relative h-72 flex items-center justify-center my-4 rounded-[3rem] bg-black/40 border border-white/5 overflow-hidden">
                {/* Spinning Rings */}
                <div className={`absolute w-64 h-64 rounded-full border border-orange-500/30 animate-spin-slow`} style={{ animationDuration: '10s' }}></div>
                <div className={`absolute w-56 h-56 rounded-full border-t-2 border-b-2 border-orange-500/60 animate-spin`} style={{ animationDuration: '4s' }}></div>
                <div className={`absolute w-48 h-48 rounded-full border border-dashed border-orange-400/40 animate-spin-slow`} style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                
                {/* The Core */}
                <div className={`absolute w-32 h-32 rounded-full bg-orange-500/20 blur-xl animate-pulse`}></div>
                <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.8)] border-4 border-white/20 animate-pulse-slow">
                    <Zap size={32} className="text-white drop-shadow-md fill-white animate-pulse" />
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-6 flex flex-col items-center z-20">
                     <div className="text-5xl font-black text-white drop-shadow-2xl tracking-tighter">{state.daily.fitness.pushups}</div>
                     <div className="text-[10px] font-bold text-orange-300 uppercase tracking-[0.2em]">Target: {state.daily.fitness.pushupsTarget}</div>
                </div>

                {/* Particle Sparks */}
                <div className="absolute inset-0 opacity-50">
                    {[...Array(10)].map((_,i) => (
                        <div key={i} className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float" style={{ left: Math.random()*100+'%', top: Math.random()*100+'%', animationDelay: Math.random()+'s' }}></div>
                    ))}
                </div>
            </div>

            {/* Interaction Buttons */}
            <div className="flex justify-center gap-4 z-20">
                    <button onClick={() => updatePushups(10)} className="w-20 h-16 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex flex-col items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-orange-600 hover:border-orange-500 group">
                        <span className="text-lg">+10</span>
                    </button>
                    <button onClick={() => updatePushups(20)} className="w-20 h-16 rounded-2xl bg-orange-600 border border-orange-400 text-white font-bold flex flex-col items-center justify-center shadow-lg shadow-orange-900/40 active:scale-95 transition-all hover:bg-orange-500 hover:scale-105">
                        <span className="text-xl">+20</span>
                    </button>
                    <button onClick={() => updatePushups(50)} className="w-20 h-16 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex flex-col items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-orange-600 hover:border-orange-500 group">
                        <span className="text-lg">+50</span>
                    </button>
            </div>
            
             <button onClick={onOpenBreathwork} className="w-full py-4 mt-2 rounded-[1.5rem] bg-cyan-900/20 border border-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center gap-2 hover:bg-cyan-900/40 active:scale-95 transition-all">
                <Wind size={20} /> Breathwork Session
            </button>

            {/* Quick Add Custom */}
             <div className="overflow-x-auto no-scrollbar flex gap-2 py-2">
                 {PREDEFINED_WORKOUTS.map((w, i) => (
                     <button 
                        key={i} 
                        onClick={() => addCustomExercise(w.name, w.target)}
                        className="flex-shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all active:scale-95"
                     >
                        + {w.name}
                     </button>
                 ))}
             </div>

            {(state.daily.fitness.customWorkouts || []).map((ex: Exercise) => (
                 <div key={ex.id} className={`relative p-6 rounded-[2rem] border overflow-hidden transition-all duration-300 animate-slide-up group shadow-lg ${ex.count >= ex.target ? 'bg-orange-500/10 border-orange-500/30' : 'glass-panel border-white/5'}`}>
                    {ex.count >= ex.target && <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>}
                    <div className="flex justify-between items-start relative z-10 mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-primary">{ex.name}</h3>
                            <div className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Target: {ex.target}</div>
                        </div>
                        {ex.count >= ex.target && <CheckCircle2 size={24} className="text-orange-500 drop-shadow-lg" strokeWidth={3} />}
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="text-3xl font-mono font-bold text-white drop-shadow-sm">{ex.count}</div>
                        <button onClick={() => updateCustomExercise(ex.id, 10)} className="flex-1 py-3 bg-orange-600/80 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-xs transition-all uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2">
                            <Plus size={16} /> Add 10
                        </button>
                    </div>
                 </div>
            ))}
            
            <div className="glass-panel p-4 rounded-[1.5rem] flex gap-3 items-center mt-4 animate-slide-up border border-white/5 shadow-lg">
                <input type="text" placeholder="Custom..." className="bg-transparent text-sm text-primary p-2 flex-1 outline-none font-bold placeholder:text-secondary/40 placeholder:uppercase placeholder:text-xs" value={newExName} onChange={(e) => setNewExName(e.target.value)} />
                <input type="number" placeholder="#" className="bg-transparent text-sm text-primary p-2 w-16 outline-none font-bold border-l border-white/10" value={newExReps} onChange={(e) => setNewExReps(parseInt(e.target.value)||0)} />
                <button onClick={() => { if(newExName) { addCustomExercise(newExName, newExReps); setNewExName(""); } }} className="p-3 bg-white/5 rounded-xl text-primary hover:bg-white/10"><Plus size={18}/></button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="orange" subView={subView} setSubView={setSubView} onBack={onBack} visualType="FITNESS">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="FITNESS" color="orange" checkDay={(d:any) => d.fitness.pushups >= d.fitness.pushupsTarget} getValue={(d:any) => d.fitness.pushups} maxVal={100} label="Pushups" labelTotal="Lifetime" />}
            {subView === 'AWARDS' && <AwardsView categories={['FITNESS']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabHabits: React.FC<any> = ({ state, updateHabit, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const failed = state.daily.habits.failedToday;
    const streak = state.global.streaks.habits;

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Detox" 
                subtitle="Control Habits" 
                stat={failed ? "Relapse" : "Clean"} 
                statLabel="Status" 
                icon={<ShieldCheck size={14} />} 
                bgImage={RANK_IMAGES.HABITS}
            />
            
            {failed && <div className="p-5 rounded-[1.5rem] bg-red-500/10 border border-red-500/20 flex items-center gap-4 text-sm text-red-400 font-bold mb-4 animate-pulse shadow-lg"><AlertTriangle size={24} /> Daily Limit Exceeded</div>}
            
            {/* Visual Smoke/Clean Effect */}
            <div className={`h-48 rounded-[2.5rem] relative overflow-hidden mb-4 transition-all duration-1000 ${failed ? 'bg-red-950/30' : 'bg-slate-900'}`}>
                {failed ? (
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                        {/* Smoke Animation for failure */}
                         <div className="w-32 h-32 bg-gray-500/50 rounded-full blur-[40px] animate-smoke"></div>
                         <div className="w-32 h-32 bg-gray-400/30 rounded-full blur-[30px] animate-smoke" style={{ animationDelay: '0.5s', left: '40%' }}></div>
                         <div className="w-32 h-32 bg-gray-600/40 rounded-full blur-[50px] animate-smoke" style={{ animationDelay: '1s', left: '60%' }}></div>
                         <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Skull size={48} className="text-red-500 animate-pulse mb-2" />
                            <span className="text-red-500 font-black uppercase tracking-widest text-xs">Failed</span>
                         </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Clean Air Effect */}
                        <div className="absolute inset-0 bg-emerald-500/5 animate-pulse-slow"></div>
                        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-50"></div>
                        
                        {/* Floating particles replacing smoke */}
                        <div className="absolute inset-0">
                             {[...Array(5)].map((_,i) => <div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full animate-float" style={{left: Math.random()*100+'%', top: Math.random()*100+'%', animationDuration: Math.random()*5+5+'s'}}></div>)}
                        </div>

                        <div className="flex flex-col items-center justify-center z-10">
                            <ShieldCheck size={56} className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)] relative z-10" />
                            <div className="text-[10px] text-emerald-400 mt-3 font-bold uppercase tracking-widest bg-emerald-950/40 px-3 py-1 rounded-full">System Clean</div>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-3">
                {[{k:'smoking', l:'Smoking', max:2, i: <Flame size={24}/>}, {k:'nicotine', l:'Nicotine', max:3, i: <Zap size={24}/>}].map((h:any) => {
                    const count = state.daily.habits[h.k+'Count'];
                    const isHigh = count > h.max;
                    return (
                        <div key={h.k} onClick={() => updateHabit(h.k)} className={`glass-panel p-6 rounded-[2rem] border relative overflow-hidden group cursor-pointer active:scale-95 transition-all duration-300 animate-slide-up shadow-lg ${isHigh ? 'border-red-500/50 bg-red-500/10' : 'border-white/5 hover:border-slate-500/30'}`}>
                            <div className="flex flex-col items-center relative z-10 text-center">
                                <div className={`mb-3 p-4 rounded-2xl transition-colors ${isHigh ? 'bg-red-500 text-white' : 'bg-white/5 text-secondary group-hover:bg-slate-700 group-hover:text-white'}`}>{h.i}</div>
                                <h3 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{h.l}</h3>
                                <div className={`text-5xl font-mono font-bold mb-2 drop-shadow-lg ${isHigh ? 'text-red-500' : 'text-primary'}`}>{count}</div>
                                <div className="text-[9px] text-secondary/70 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 font-bold">Limit: {h.max}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="slate" subView={subView} setSubView={setSubView} onBack={onBack} visualType="HABITS">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="HABITS" color="slate" checkDay={(d:any) => !d.habits.failedToday} getValue={(d:any) => d.habits.smokingCount + d.habits.nicotineCount} maxVal={5} label="Intake" labelTotal="Clean Days" totalValue={state.global.streaks.habits} />}
            {subView === 'AWARDS' && <AwardsView categories={['HABITS']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabMDF: React.FC<any> = ({ state, resetRelapse, onBack }) => {
   const [subView, setSubView] = useState<SubView>('DAILY');
   const streak = state.global.streaks.mdf;
   
   const renderDaily = () => (
       <div className="space-y-4 animate-slide-up pb-10">
           <HeroCard 
                title="MDF" 
                subtitle="Purity Guard" 
                stat={streak} 
                statLabel="Clean Streak" 
                icon={<ShieldAlert size={14} />} 
                bgImage={RANK_IMAGES.MDF} 
           />
           
           <div className="glass-panel p-10 rounded-[2.5rem] border-rose-500/10 text-center flex flex-col items-center gap-8 mt-4 bg-gradient-to-b from-rose-900/10 to-transparent animate-slide-up shadow-2xl relative overflow-hidden">
               <div className="w-28 h-28 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] animate-pulse-slow">
                    <ShieldAlert size={48} className="text-rose-400 drop-shadow-md" />
               </div>
               <div className="relative z-10">
                   <h2 className="text-3xl font-bold text-primary mb-3">Stay Strong</h2>
                   <p className="text-sm text-secondary leading-relaxed max-w-[220px] mx-auto font-medium">Consistency is the key to purity. Do not give up.</p>
               </div>
               <button onClick={resetRelapse} className="w-full py-5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-900/30 active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all border border-white/5 relative z-10"><AlertTriangle size={18} /> I Relapsed</button>
           </div>
       </div>
   );
   return (
       <TabWrapper themeColor="rose" subView={subView} setSubView={setSubView} onBack={onBack} visualType="MDF">
           {subView === 'DAILY' && renderDaily()}
           {subView === 'STATS' && <GenericStatsView state={state} category="MDF" color="rose" checkDay={() => true} getValue={() => streak} maxVal={365} label="Streak" labelTotal="Max" totalValue={state.global.streaks.maxMdf} />}
           {subView === 'AWARDS' && <AwardsView categories={['MDF']} unlocked={state.global.unlockedAchievements} />}
       </TabWrapper>
    );
};

export const TabQuran: React.FC<any> = ({ state, updatePart, onBack, themeOverride }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const themeColor = themeOverride || "purple";

  const renderDaily = () => {
    const currentParahArabic = PARAH_NAMES_ARABIC[state.global.currentParah - 1];

    return (
        <div className="space-y-4 animate-slide-up pb-20">
            <HeroCard 
                title={currentParahArabic} 
                subtitle={`Parah ${state.global.currentParah}`} 
                stat="Reading" 
                statLabel="Status" 
                icon={<BookOpen size={14} />} 
                bgImage={RANK_IMAGES.QURAN} 
            />

            <div className="space-y-3">
                {Object.entries(QURAN_PART_LABELS).map(([key, label], idx) => {
                     const isCompleted = state.daily.quranParts[key as keyof typeof QURAN_PART_LABELS];
                     const arabicLabel = ["ربع", "نصف", "ثلاثة", "كامل"][idx]; 
                     return (
                         <TaskCard 
                            key={key}
                            title={arabicLabel}
                            subtitle={label}
                            icon={<div className="font-bold text-lg font-mono">{idx === 3 ? <BookOpen size={18}/> : idx + 1}</div>}
                            isCompleted={isCompleted}
                            onClick={() => updatePart(key)}
                         />
                     );
                })}
            </div>
        </div>
    );
  };

  return (
      <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="QURAN">
          {subView === 'DAILY' && renderDaily()}
          {subView === 'STATS' && <GenericStatsView state={state} category="QURAN" color={themeColor} checkDay={(d:any) => Object.values(d.quranParts).some(Boolean)} getValue={(d:any) => Object.values(d.quranParts).filter(Boolean).length} maxVal={4} label="Parts" labelTotal="Read" />}
          {subView === 'AWARDS' && <AwardsView categories={['QURAN']} unlocked={state.global.unlockedAchievements} />}
      </TabWrapper>
  );
};

export const TabNight: React.FC<any> = ({ state, updateNight, updateJournal, onBack, themeOverride }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const streak = state.global.streaks.night;
    const themeColor = themeOverride || "indigo";

    return (
        <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="NIGHT">
            {subView === 'DAILY' && (
                <div className="space-y-4 animate-slide-up pb-10">
                    <HeroCard 
                        title="Night Routine" 
                        subtitle="Sunnah before sleep" 
                        stat={streak} 
                        statLabel="Streak" 
                        icon={<BedDouble size={14} />} 
                        bgImage={RANK_IMAGES.NIGHT}
                    />
                    
                    <div className="space-y-3">
                        <TaskCard 
                            title="Ayatul Kursi" 
                            subtitle="Protection" 
                            icon={<ShieldCheck size={20} />} 
                            isCompleted={state.daily.night.ayatulKursi} 
                            onClick={() => updateNight('ayatulKursi')} 
                        />
                         <TaskCard 
                            title="4 Quls" 
                            subtitle="Ikhlas, Falaq, Nas, Kafirun" 
                            icon={<BookOpen size={20} />} 
                            isCompleted={state.daily.night.fourQuls} 
                            onClick={() => updateNight('fourQuls')} 
                        />
                        <TaskCard 
                            title="Surah Al-Mulk" 
                            subtitle="Protection from Grave" 
                            icon={<Moon size={20} />} 
                            isCompleted={state.daily.night.surahMulk} 
                            onClick={() => updateNight('surahMulk')} 
                        />
                        <TaskCard 
                            title="Surah Baqarah" 
                            subtitle="Last 2 Verses" 
                            icon={<Scroll size={20} />} 
                            isCompleted={state.daily.night.surahBaqarah} 
                            onClick={() => updateNight('surahBaqarah')} 
                        />
                    </div>

                    <div className="glass-panel p-6 rounded-[2rem] border-white/5 mt-6 shadow-lg">
                        <div className="flex items-center gap-2 mb-4 text-indigo-400 font-bold uppercase tracking-widest text-[10px]">
                            <PenTool size={14} /> Gratitude Journal
                        </div>
                        <textarea 
                            className="w-full h-32 bg-black/20 rounded-xl p-4 text-sm text-white placeholder:text-white/20 resize-none outline-none border border-white/10 focus:border-indigo-500/50 transition-colors"
                            placeholder="Write 3 things you are grateful for today..."
                            value={state.daily.journal || ""}
                            onChange={(e) => updateJournal(e.target.value)}
                        />
                    </div>
                </div>
            )}
            {subView === 'STATS' && <GenericStatsView state={state} category="NIGHT" color={themeColor} checkDay={(d:any) => d.night.surahMulk} getValue={(d:any) => (d.night.surahMulk?1:0)} maxVal={4} label="Tasks" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['NIGHT']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabHadees: React.FC<any> = ({ state, markRead, onBack, themeOverride }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    // Cycle through a large collection based on day of year to ensure daily unique hadees
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    const hadeesIndex = dayOfYear % HADEES_COLLECTION.length;
    const hadees = HADEES_COLLECTION[hadeesIndex];
    const themeColor = themeOverride || "gold";

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Hadees" 
                subtitle="Daily Wisdom" 
                stat={state.daily.hadeesRead ? "Read" : "Pending"} 
                statLabel="Status" 
                icon={<Scroll size={14} />} 
                bgImage={RANK_IMAGES.HADEES}
            />
            
            <div className={`glass-panel p-8 rounded-[2.5rem] border-${themeColor}-500/10 text-center flex flex-col items-center gap-8 relative overflow-hidden animate-slide-up shadow-2xl`}>
                 <div className={`absolute top-0 right-0 p-10 bg-${themeColor}-500/10 blur-[60px] rounded-full`}></div>
                 <div className={`opacity-80 text-${themeColor}-500 animate-pulse-slow`}><Sparkles size={32} /></div>
                 <h3 className="font-serif text-2xl leading-relaxed text-primary/90 drop-shadow-md font-arabic" dir="rtl">{hadees.Hadith}</h3>
                 <p className="text-xs text-secondary/80 italic">{hadees.Explanation}</p>
                 <button onClick={markRead} disabled={state.daily.hadeesRead} className={`w-full py-4 rounded-xl font-bold transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 ${state.daily.hadeesRead ? 'bg-emerald-500/10 text-emerald-500 cursor-default border border-emerald-500/20' : `bg-${themeColor}-500 hover:bg-${themeColor}-600 text-white shadow-xl shadow-${themeColor}-900/30 active:scale-95`}`}>{state.daily.hadeesRead ? <><CheckCircle2 size={16}/> Completed</> : "Mark as Read"}</button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="HADEES">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="HADEES" color={themeColor} checkDay={(d:any) => d.hadeesRead} getValue={(d:any) => d.hadeesRead?1:0} maxVal={1} label="Read" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['HADEES']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabMemorize: React.FC<any> = ({ state, markLearned, onBack, themeOverride }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const streak = state.global.memorizeWeek;
    
    // Weekly Rotation Logic
    const currentWeekIndex = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
    const contentIndex = currentWeekIndex % MEMORIZE_CONTENT.length;
    const currentDua = MEMORIZE_CONTENT[contentIndex];
    
    const themeColor = themeOverride || "pink";

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Memorize" 
                subtitle="Weekly Goal" 
                stat={streak} 
                statLabel="Duas Learned" 
                icon={<Brain size={14} />} 
                bgImage={RANK_IMAGES.MEMORIZE} 
            />
            
            <div className={`glass-panel p-10 rounded-[2.5rem] border-${themeColor}-500/20 text-center flex flex-col gap-8 relative overflow-hidden animate-slide-up shadow-2xl`}>
                <div className={`absolute top-[-20px] left-[-20px] w-40 h-40 bg-${themeColor}-500/10 rounded-full blur-[50px]`}></div>
                <div className="relative z-10">
                    <p className="text-3xl font-serif leading-loose text-primary/90 drop-shadow-sm font-arabic" dir="rtl">{currentDua.arabic}</p>
                    <div className={`w-16 h-1 bg-${themeColor}-500/30 rounded-full mx-auto my-6`}></div>
                    <p className="text-sm text-secondary italic leading-relaxed font-medium">"{currentDua.english}"</p>
                </div>
                <button onClick={markLearned} className={`w-full py-4 rounded-xl bg-${themeColor}-600 hover:bg-${themeColor}-500 text-white font-bold shadow-lg shadow-${themeColor}-900/30 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs border border-white/5`}><CheckCircle2 size={16} /> I've Memorized This</button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="MEMORIZE">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="MEMORIZE" color={themeColor} checkDay={() => false} getValue={() => 1} maxVal={1} label="Duas" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['MEMORIZE', 'QURAN']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabRamadan: React.FC<any> = ({ state, toggleRamadanDaily, updateRamadanStat, onBack, themeOverride }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const [timeLeft, setTimeLeft] = useState("");
    const streak = state.global.streaks.ramadan;
    const day = Math.min(30, state.global.ramadanStats.fastsDone + 1);
    const themeColor = themeOverride || "purple";

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const maghrib = new Date();
            maghrib.setHours(18, 30, 0); // Simulated Maghrib
            if (now > maghrib) {
                // Count to Fajr (4:00 AM)
                maghrib.setDate(maghrib.getDate() + 1);
                maghrib.setHours(4, 0, 0);
            }
            
            const diff = maghrib.getTime() - now.getTime();
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const tasks = [
        { key: 'suhoor', label: 'Suhoor', urdu: 'سحور', icon: <Sunrise size={20} /> },
        { key: 'readParah', label: 'Daily Parah', urdu: 'پارہ', icon: <BookOpen size={20} /> },
        { key: 'iftar', label: 'Iftar', urdu: 'افطار', icon: <Sunset size={20} /> },
        { key: 'taraweeh', label: 'Taraweeh', urdu: 'تراويح', icon: <Moon size={20} /> },
        { key: 'charity', label: 'Sadaqah', urdu: 'صدقة', icon: <Heart size={20} /> }
    ];

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Ramadan" 
                subtitle={`Day ${day}`} 
                stat={day} 
                statLabel="Fasting Day" 
                icon={<Moon size={14} />} 
                bgImage={RANK_IMAGES.RAMADAN} 
            />
            
             <div className="glass-panel p-4 rounded-[2rem] border-purple-500/20 text-center mb-2 flex items-center justify-center gap-3">
                 <Timer size={18} className="text-purple-400" />
                 <span className="font-mono text-xl font-bold text-white">{timeLeft}</span>
                 <span className="text-[10px] uppercase tracking-widest text-secondary">To Meal</span>
             </div>

            <div className="space-y-3">
                {tasks.map((t) => (
                    <TaskCard 
                        key={t.key} 
                        title={t.urdu} 
                        subtitle={t.label} 
                        icon={t.icon} 
                        isCompleted={state.daily.ramadan[t.key]} 
                        onClick={() => toggleRamadanDaily(t.key)}
                    />
                ))}
            </div>
            
             <div onClick={() => updateRamadanStat('quranKhatams', 1)} className={`glass-panel p-5 rounded-[2rem] border-transparent hover:border-${themeColor}-500/20 flex items-center justify-between mt-4 cursor-pointer active:scale-95 transition-transform bg-${themeColor}-500/5 animate-slide-up shadow-md`}>
                   <div className="flex items-center gap-4">
                       <div className={`p-3 bg-${themeColor}-500/20 rounded-2xl text-${themeColor}-400`}><BookOpen size={20} /></div>
                       <div>
                           <div className="text-sm font-bold text-primary">Quran Khatams</div>
                           <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">Tap to increment</div>
                       </div>
                   </div>
                   <div className={`text-4xl font-mono font-bold text-${themeColor}-500 drop-shadow-sm`}>{state.global.ramadanStats.quranKhatams}</div>
             </div>
        </div>
    );
    
    return (
        <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} onBack={onBack} visualType="RAMADAN">
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="RAMADAN" color={themeColor} checkDay={(d:any) => d.ramadan.suhoor} getValue={(d:any) => d.ramadan.suhoor?1:0} maxVal={1} label="Fasts" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['RAMADAN']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabNames99: React.FC<any> = ({ state, onBack, themeOverride }) => {
    const todayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % NAMES_OF_ALLAH.length;
    const themeColor = themeOverride || "teal";

    return (
        <TabWrapper themeColor={themeColor} subView="DAILY" setSubView={()=>{}} onBack={onBack} visualType="QURAN" hideSubNav>
            <div className="space-y-4 animate-slide-up pb-10 px-1">
                 <HeroCard 
                    title="99 Names" 
                    subtitle="Asma-ul-Husna" 
                    stat={NAMES_OF_ALLAH.length} 
                    statLabel="Total Names" 
                    icon={<Sparkles size={14} />} 
                    bgImage={RANK_IMAGES.QURAN} 
                />

                <div className={`glass-panel p-6 rounded-[2rem] border-${themeColor}-500/30 bg-${themeColor}-900/10 text-center relative overflow-hidden group mb-6`}>
                    <div className="absolute inset-0 bg-white/5 animate-pulse-slow"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-2 block">Name of the Day</span>
                    <h2 className={`text-4xl font-serif text-${themeColor}-400 font-bold mb-1`}>{NAMES_OF_ALLAH[todayIndex].name}</h2>
                    <p className="text-white text-lg font-medium">{NAMES_OF_ALLAH[todayIndex].meaning}</p>
                    <p className="text-secondary text-xs mt-3 italic max-w-xs mx-auto">{NAMES_OF_ALLAH[todayIndex].desc}</p>
                </div>
                
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest pl-2">All Names</h3>
                <div className="grid grid-cols-2 gap-3 pb-8">
                    {NAMES_OF_ALLAH.map((n, i) => (
                        <div key={i} className={`p-4 rounded-2xl glass-panel border border-white/5 hover:border-${themeColor}-500/30 transition-all group active:scale-95`}>
                            <div className="flex justify-between items-start">
                                <span className={`text-[10px] font-bold opacity-50`}>#{i+1}</span>
                            </div>
                            <div className={`text-lg font-bold text-white mt-1 group-hover:text-${themeColor}-400`}>{n.name}</div>
                            <div className="text-[10px] text-secondary font-medium">{n.meaning}</div>
                        </div>
                    ))}
                </div>
            </div>
        </TabWrapper>
    );
};

export const TabJanazah: React.FC<any> = ({ state, onBack, onToggleKnowledge }) => (
    <TabWrapper themeColor="slate" subView="DAILY" setSubView={()=>{}} onBack={onBack} hideSubNav>
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Janazah" 
                subtitle="Funeral Guide" 
                stat="4" 
                statLabel="Takbeers" 
                icon={<Skull size={14} />} 
                bgImage={RANK_IMAGES.NIGHT} 
            />
            
            <div className="space-y-3">
                {JANAZAH_STEPS.map((s, i) => (
                     <div key={i} className="glass-panel p-6 rounded-[2rem] border-white/5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-3 bg-white/5 rounded-bl-2xl text-[10px] font-bold uppercase">Step {s.step}</div>
                          <h3 className="text-xl font-bold text-slate-300 mb-2">{s.title}</h3>
                          <p className="font-serif text-2xl text-right mb-4 text-emerald-400 font-arabic leading-loose" dir="rtl">{s.arabic}</p>
                          <p className="text-sm text-secondary">{s.desc}</p>
                     </div>
                ))}
            </div>

            <button 
                onClick={() => onToggleKnowledge('janazah')}
                className={`w-full py-4 mt-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${state?.global?.knowledge?.janazah ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
                {state?.global?.knowledge?.janazah ? <CheckCircle2 size={18} /> : <GraduationCap size={18} />}
                {state?.global?.knowledge?.janazah ? 'Learned' : 'Mark as Learned'}
            </button>
        </div>
    </TabWrapper>
);

export const TabTibb: React.FC<any> = ({ state, onBack, onToggleKnowledge }) => (
    <TabWrapper themeColor="emerald" subView="DAILY" setSubView={()=>{}} onBack={onBack} hideSubNav>
        <div className="space-y-4 animate-slide-up pb-10">
             <HeroCard 
                title="Tibb" 
                subtitle="Prophetic Medicine" 
                stat={TIBB_REMEDIES.length} 
                statLabel="Remedies" 
                icon={<Leaf size={14} />} 
                bgImage={RANK_IMAGES.HYGIENE} 
            />
            
            <div className="grid grid-cols-1 gap-3">
                {TIBB_REMEDIES.map((r, i) => (
                    <div key={i} className="glass-panel p-5 rounded-[2rem] border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Leaf size={16} /></div>
                             <h3 className="font-bold text-white text-lg">{r.name}</h3>
                        </div>
                        <p className="text-sm text-secondary italic mb-2">"{r.desc}"</p>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-950/30 p-2 rounded-lg">Usage: {r.usage}</div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => onToggleKnowledge('tibb')}
                className={`w-full py-4 mt-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${state?.global?.knowledge?.tibb ? 'bg-emerald-500 text-white' : 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/20'}`}
            >
                {state?.global?.knowledge?.tibb ? <CheckCircle2 size={18} /> : <GraduationCap size={18} />}
                {state?.global?.knowledge?.tibb ? 'Learned' : 'Mark as Learned'}
            </button>
        </div>
    </TabWrapper>
);

export const TabWordQuran: React.FC<any> = ({ state, onBack, onToggleKnowledge }) => {
    const [selectedSurah, setSelectedSurah] = useState('Fatiha');
    const [selectedWord, setSelectedWord] = useState<any>(null);
    const surahKeys = Object.keys(WORD_QURAN_DATA);
    const currentWords = WORD_QURAN_DATA[selectedSurah as keyof typeof WORD_QURAN_DATA];
    const isLearned = state?.global?.knowledge?.surahsLearned?.includes(selectedSurah);

    return (
        <TabWrapper themeColor="teal" subView="DAILY" setSubView={()=>{}} onBack={onBack} hideSubNav>
            <div className="space-y-4 animate-slide-up pb-10">
                 <HeroCard 
                    title="Word by Word" 
                    subtitle="Interactive Learning" 
                    stat={surahKeys.length} 
                    statLabel="Surahs Available" 
                    icon={<Languages size={14} />} 
                    bgImage={RANK_IMAGES.QURAN} 
                />

                <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                    {surahKeys.map(k => (
                        <button 
                            key={k} 
                            onClick={() => { setSelectedSurah(k); setSelectedWord(null); }}
                            className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${selectedSurah === k ? 'bg-teal-500 text-white shadow-lg' : 'bg-white/5 text-secondary hover:bg-white/10'}`}
                        >
                            Surah {k}
                        </button>
                    ))}
                </div>

                <div className="glass-panel p-8 rounded-[2rem] text-center" dir="rtl">
                    <div className="flex flex-wrap justify-center gap-2 leading-loose">
                        {currentWords.map((w, i) => (
                            <span 
                                key={i} 
                                onClick={() => setSelectedWord(w)}
                                className={`text-3xl font-serif px-2 py-1 rounded-lg cursor-pointer transition-all select-none ${selectedWord === w ? 'bg-teal-500/30 text-teal-300' : 'hover:bg-white/5'}`}
                            >
                                {w.word}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={`glass-panel p-6 rounded-[2rem] transition-all duration-500 ${selectedWord ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     {selectedWord ? (
                         <div className="text-center">
                             <h3 className="text-4xl font-serif text-teal-400 mb-2">{selectedWord.word}</h3>
                             <p className="text-xl text-white font-bold mb-1">{selectedWord.meaning}</p>
                             <p className="text-xs text-secondary uppercase tracking-widest">{selectedWord.grammar}</p>
                         </div>
                     ) : (
                         <div className="text-center text-secondary">Tap a word above to see details</div>
                     )}
                </div>

                 <button 
                    onClick={() => onToggleKnowledge('wordQuran', selectedSurah)}
                    className={`w-full py-4 mt-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all ${isLearned ? 'bg-teal-500 text-white' : 'bg-teal-900/20 text-teal-400 border border-teal-500/20'}`}
                >
                    {isLearned ? <CheckCircle2 size={18} /> : <GraduationCap size={18} />}
                    {isLearned ? 'Completed' : 'Mark Surah as Learned'}
                </button>
            </div>
        </TabWrapper>
    );
};

export const TabBreathwork: React.FC<any> = ({ onBack }) => {
    const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale'>('Inhale');
    
    useEffect(() => {
        const interval = setInterval(() => {
             setPhase(p => {
                 if (p === 'Inhale') return 'Hold';
                 if (p === 'Hold') return 'Exhale';
                 return 'Inhale';
             });
        }, 4000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[150] bg-black flex flex-col items-center justify-center animate-fade-in">
             <button onClick={onBack} className="absolute top-8 left-6 p-4 rounded-full bg-white/10 border border-white/10 text-white z-50 hover:bg-white/20 transition-all active:scale-95"><ChevronLeft size={24} /></button>
             
             <div className="relative flex flex-col items-center justify-center">
                  <div className={`text-5xl font-serif font-bold text-cyan-400 mb-12 animate-float transition-all duration-500 ${phase === 'Hold' ? 'scale-110' : 'scale-100'}`}>{phase}</div>
                  
                  <div className="relative w-72 h-72 flex items-center justify-center">
                       {/* Outer Glow */}
                       <div className={`absolute inset-0 bg-cyan-500/30 rounded-full blur-[60px] transition-all duration-[4000ms] ease-in-out ${phase === 'Inhale' ? 'scale-125 opacity-100' : 'scale-75 opacity-40'}`}></div>
                       
                       {/* Main Circle */}
                       <div className={`w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full transition-all duration-[4000ms] ease-in-out shadow-2xl flex items-center justify-center relative z-10 ${phase === 'Inhale' ? 'scale-150' : 'scale-75'}`}>
                           <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                       </div>
                       
                       {/* Orbiting Particles */}
                       <div className={`absolute inset-0 animate-spin-slow transition-all duration-[4000ms] ${phase === 'Inhale' ? 'scale-110' : 'scale-50'}`}>
                           <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full blur-sm"></div>
                           <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-white rounded-full blur-sm"></div>
                           <div className="absolute left-0 top-1/2 w-4 h-4 bg-white rounded-full blur-sm"></div>
                           <div className="absolute right-0 top-1/2 w-4 h-4 bg-white rounded-full blur-sm"></div>
                       </div>
                  </div>
                  
                  <p className="text-white/40 text-sm tracking-[0.3em] uppercase mt-12 font-bold animate-pulse">Relax & Focus</p>
             </div>
        </div>
    );
};

export const TabSettings: React.FC<any> = ({ state, setTheme, setCustomColor, toggleRamadan, exportData, importData, enterWidgetMode, onBack, buyFreeze, buyTravelMode, resetApp, requestNotify, updateQada }) => {
    const THEME_PRESETS = ['emerald', 'cyan', 'rose', 'amber', 'purple', 'blue'];
    const COLOR_MAP: Record<string, string> = {
        emerald: '#10b981',
        cyan: '#06b6d4',
        rose: '#f43f5e',
        amber: '#f59e0b',
        purple: '#a855f7',
        blue: '#3b82f6'
    };
    
    return (
        <TabWrapper themeColor="slate" subView="DAILY" setSubView={()=>{}} onBack={onBack} hideSubNav>
            <div className="space-y-6 animate-slide-up pb-24">
                 <HeroCard 
                    title="Settings" 
                    subtitle="Control Center" 
                    stat={state?.global?.level || 1} 
                    statLabel="Your Level" 
                    icon={<Settings size={14} />} 
                    bgImage={RANK_IMAGES.NIGHT} 
                />
                
                {/* Shop Section */}
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest pl-2">Shop & Items</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={buyFreeze} className="glass-panel p-5 rounded-[2rem] border-cyan-500/20 bg-cyan-900/10 text-left hover:bg-cyan-900/20 transition-all active:scale-95 group">
                         <div className="flex justify-between items-start mb-2">
                             <Snowflake size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                             <span className="text-[10px] font-bold bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-md">500 XP</span>
                         </div>
                         <h4 className="font-bold text-white text-sm">Streak Freeze</h4>
                         <p className="text-[10px] text-secondary mt-1">Protect your streak for 1 day.</p>
                         <div className="mt-3 text-[10px] font-bold text-white/50">Owned: {state?.global?.streakFreezes || 0}</div>
                    </button>
                    
                    <button onClick={buyTravelMode} className="glass-panel p-5 rounded-[2rem] border-purple-500/20 bg-purple-900/10 text-left hover:bg-purple-900/20 transition-all active:scale-95 group">
                         <div className="flex justify-between items-start mb-2">
                             <ShieldCheck size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
                             <span className="text-[10px] font-bold bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md">2000 XP</span>
                         </div>
                         <h4 className="font-bold text-white text-sm">Travel Mode</h4>
                         <p className="text-[10px] text-secondary mt-1">Pause streaks for 7 days.</p>
                         <div className="mt-3 text-[10px] font-bold text-white/50">{state?.global?.freezeModeUntil ? 'Active' : 'Inactive'}</div>
                    </button>
                </div>

                {/* Theme Customization */}
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest pl-2">Appearance</h3>
                <div className="glass-panel p-6 rounded-[2rem] border-white/5">
                     <div className="flex gap-2 mb-4 bg-white/5 p-1 rounded-xl">
                         {['AUTO', 'DAY', 'NIGHT'].map((t) => (
                             <button 
                                key={t} 
                                onClick={() => setTheme(t)}
                                className={`flex-1 py-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${state?.global?.theme === t ? 'bg-white text-black shadow-lg' : 'text-secondary hover:bg-white/5'}`}
                             >
                                {t === 'AUTO' && <CloudSun size={14} className="inline mr-1 mb-0.5" />}
                                {t === 'DAY' && <Sun size={14} className="inline mr-1 mb-0.5" />}
                                {t === 'NIGHT' && <Moon size={14} className="inline mr-1 mb-0.5" />}
                                {t}
                             </button>
                         ))}
                     </div>
                     
                     <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar py-2">
                         {THEME_PRESETS.map(c => (
                             <button 
                                key={c}
                                onClick={() => setCustomColor(COLOR_MAP[c])}
                                className={`w-10 h-10 rounded-full border-2 transition-all ${state?.global?.customColor === COLOR_MAP[c] ? 'border-white scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                style={{ background: COLOR_MAP[c] }} 
                             >
                             </button>
                         ))}
                         {/* Manual Reset */}
                         <button onClick={() => setCustomColor(null)} className="px-4 py-2 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-secondary border border-white/5 hover:bg-white/20">
                            Reset Color
                         </button>
                     </div>
                </div>

                {/* Features */}
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest pl-2">System</h3>
                
                <div className="space-y-3">
                     <div className="glass-panel p-4 rounded-[1.5rem] border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Tent size={18} /></div>
                             <div>
                                 <h4 className="font-bold text-sm text-white">Ramadan Mode</h4>
                                 <p className="text-[10px] text-secondary">Enable fasting tracking</p>
                             </div>
                         </div>
                         <button onClick={toggleRamadan} className={`w-12 h-6 rounded-full relative transition-colors ${state?.global?.ramadanMode ? 'bg-purple-500' : 'bg-white/10'}`}>
                             <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${state?.global?.ramadanMode ? 'left-7' : 'left-1'}`}></div>
                         </button>
                     </div>

                     <div className="glass-panel p-4 rounded-[1.5rem] border-white/5 flex items-center justify-between cursor-pointer active:scale-95 transition-all" onClick={requestNotify}>
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Bell size={18} /></div>
                             <div>
                                 <h4 className="font-bold text-sm text-white">Notifications</h4>
                                 <p className="text-[10px] text-secondary">Enable daily reminders</p>
                             </div>
                         </div>
                     </div>

                     <div className="glass-panel p-4 rounded-[1.5rem] border-white/5 flex items-center justify-between cursor-pointer active:scale-95 transition-all" onClick={enterWidgetMode}>
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><Maximize2 size={18} /></div>
                             <div>
                                 <h4 className="font-bold text-sm text-white">Widget Mode</h4>
                                 <p className="text-[10px] text-secondary">Fullscreen clock view</p>
                             </div>
                         </div>
                     </div>
                </div>

                {/* Data Management */}
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest pl-2">Data</h3>
                <div className="grid grid-cols-2 gap-3">
                     <button onClick={exportData} className="glass-panel p-4 rounded-[1.5rem] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 active:scale-95 transition-all">
                         <Download size={20} className="text-secondary" />
                         <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Backup</span>
                     </button>
                     <button onClick={importData} className="glass-panel p-4 rounded-[1.5rem] border-white/5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 active:scale-95 transition-all">
                         <Upload size={20} className="text-secondary" />
                         <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Restore</span>
                     </button>
                </div>

                {/* Danger Zone */}
                <div className="pt-6">
                    <button onClick={resetApp} className="w-full py-4 rounded-[1.5rem] border border-red-500/20 text-red-500 hover:bg-red-500/10 active:scale-95 transition-all flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs">
                        <Trash2 size={16} /> Hard Reset App
                    </button>
                    <p className="text-center text-[9px] text-secondary/30 mt-4 uppercase tracking-widest">Zohaib Tracker v3.0 • Built with ❤️</p>
                </div>
            </div>
        </TabWrapper>
    );
};
