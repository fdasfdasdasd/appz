




import * as React from 'react';
import { Moon, Orbit, BookOpen, ShieldAlert, Dumbbell, Brain, Settings, Tent, LayoutGrid, Droplets, ShieldCheck, Scroll, BedDouble, Sparkles, Star } from 'lucide-react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  changeView: (view: ViewState) => void;
  ramadanMode: boolean;
  isDay: boolean; // New prop for styling
}

export const BottomNav: React.FC<Props> = ({ currentView, changeView, ramadanMode, isDay }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: <LayoutGrid size={22} />, label: 'Home' },
    { id: ViewState.SALAH, icon: <Moon size={22} />, label: 'Salah' },
    { id: ViewState.DHIKR, icon: <Orbit size={22} />, label: 'Dhikr' },
    { id: ViewState.NAMES99, icon: <Star size={22} />, label: '99 Names' }, // New
    { id: ViewState.QURAN, icon: <BookOpen size={22} />, label: 'Quran' },
    { id: ViewState.HADEES, icon: <Scroll size={22} />, label: 'Hadees' },
    { id: ViewState.NIGHT, icon: <BedDouble size={22} />, label: 'Night' },
    { id: ViewState.FITNESS, icon: <Dumbbell size={22} />, label: 'Fit' },
    { id: ViewState.HYGIENE, icon: <Droplets size={22} />, label: 'Clean' },
    { id: ViewState.HABITS, icon: <ShieldCheck size={22} />, label: 'Detox' },
    { id: ViewState.MDF, icon: <ShieldAlert size={22} />, label: 'MDF' },
    { id: ViewState.MEMORIZE, icon: <Brain size={22} />, label: 'Learn' },
    { id: ViewState.AI_CHAT, icon: <Sparkles size={22} />, label: 'Guide' }, 
  ];
  
  if (ramadanMode) {
      navItems.splice(1, 0, { id: ViewState.RAMADAN, icon: <Tent size={22} />, label: 'Ramadan' });
  }

  // Dynamic Styles based on Mode
  const dockStyle = isDay 
    ? 'bg-white/40 border-white/40 shadow-xl shadow-sky-900/10 ring-white/40' 
    : 'bg-slate-900/60 border-white/10 shadow-2xl shadow-black/50 ring-white/5';
    
  const activeItemStyle = isDay
    ? 'bg-white/60 shadow-inner text-emerald-600'
    : 'bg-white/10 shadow-inner text-emerald-400';

  const inactiveItemStyle = isDay
    ? 'text-slate-500 hover:text-slate-900'
    : 'text-slate-400 hover:text-white';
    
  const activeDotStyle = isDay ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-emerald-400 shadow-[0_0_8px_currentColor]';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[100] animate-slide-up">
      {/* Floating Dock Container */}
      <div className={`backdrop-blur-2xl border rounded-[2.5rem] overflow-hidden pb-1 ring-1 transition-all duration-700 ${dockStyle}`}>
        <div className="flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 px-2 scroll-smooth">
          
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => changeView(item.id)}
                className={`relative flex-shrink-0 snap-center flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 group ${isActive ? activeItemStyle : ''}`}
              >
                 <div className={`transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-md' : inactiveItemStyle} group-hover:scale-105`}>
                    {item.icon}
                 </div>
                 <span className={`text-[9px] font-bold mt-1 transition-all duration-300 tracking-wide ${isActive ? (isDay ? 'text-slate-800' : 'text-white') + ' opacity-100 translate-y-0' : 'text-secondary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    {item.label}
                 </span>
                 
                 {/* Active Indicator Dot */}
                 {isActive && (
                    <div className={`absolute bottom-1 w-1 h-1 rounded-full shadow-lg ${activeDotStyle}`}></div>
                 )}
              </button>
            );
          })}
          
          <div className={`w-px h-8 mx-1 flex-shrink-0 rounded-full ${isDay ? 'bg-slate-300' : 'bg-white/10'}`}></div>
          
          <button
            onClick={() => changeView(ViewState.SETTINGS)}
            className={`relative flex-shrink-0 snap-center flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${currentView === ViewState.SETTINGS ? activeItemStyle : ''}`}
          >
              <div className={`transition-all duration-300 ${currentView === ViewState.SETTINGS ? 'scale-110 drop-shadow-md' : inactiveItemStyle} group-hover:scale-105`}>
                 <Settings size={22} />
              </div>
              <span className={`text-[9px] font-bold mt-1 transition-all duration-300 tracking-wide ${currentView === ViewState.SETTINGS ? (isDay ? 'text-slate-800' : 'text-white') + ' opacity-100' : 'opacity-0'}`}>
                Settings
              </span>
          </button>
        </div>
      </div>
    </div>
  );
};
