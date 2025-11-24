
import * as React from 'react';
import { useState } from 'react';
import { Moon, CheckCircle2, Users, Clock, BarChart2, AlertTriangle } from 'lucide-react';
import { AppState, SubView } from '../types';
import { getGrowthStage } from '../constants';
import { BarChart } from './Charts';
import { RankCard, AwardsView, TabWrapper, StatsCalendar, HeroCard, RANK_IMAGES, JUMUAH_IMAGE } from './SimpleTabs';

interface Props {
  state: AppState;
  updatePrayer: (id: string, isComplete: boolean, isJamaah: boolean) => void;
  updateQada: (amount: number) => void;
  onBack: () => void;
  themeOverride?: string;
}

export const TabSalah: React.FC<Props> = ({ state, updatePrayer, updateQada, onBack, themeOverride }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const streak = state.global.streaks.salah;
  const maxStreak = state.global.streaks.maxSalah || streak;
  const stage = getGrowthStage('SALAH', streak);
  const isFriday = new Date().getDay() === 5;
  const themeColor = themeOverride || "emerald";

  const renderStats = () => {
    const history = state.global.history ? state.global.history.slice(-7) : [];
    const combined = [...history, state.daily];
    const displayData = combined.slice(-7);
    
    const data = displayData.map((day: any) => {
        if (!day.prayers) return 0;
        return day.prayers.filter((p: any) => p.completed).length;
    });
    
    const finalData = [...Array(Math.max(0, 7 - data.length)).fill(0), ...data];
    const labels = ["D-6", "D-5", "D-4", "D-3", "D-2", "Yest", "Today"];

    return (
        <div className="space-y-6 animate-slide-up pb-10">
            <RankCard stage={stage} streak={streak} maxStreak={maxStreak} color={themeColor} bgImage={isFriday ? JUMUAH_IMAGE : RANK_IMAGES.SALAH} />

            <StatsCalendar 
              history={state.global.history} 
              current={state.daily} 
              color={themeColor} 
              checkDay={(day: any) => day.prayers.filter((p: any) => p.completed).length === 6}
              label="Perfect Days"
            />

            <div className="glass-panel p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary"><BarChart2 size={18} className={`text-${themeColor}-500`}/> Weekly Performance</h3>
                <BarChart data={finalData} labels={labels} color={themeColor} maxVal={6} />
                <p className="text-center text-[10px] text-secondary mt-4">Prayers Completed per Day</p>
            </div>
        </div>
    );
  };

  const renderDaily = () => {
    const nextPrayer = state.daily.prayers.find(p => !p.completed);
    return (
    <div className="space-y-4 animate-slide-up pb-10">
      <HeroCard 
        title={isFriday ? "Jumuah" : "Salah"} 
        subtitle={isFriday ? "Blessed Friday" : "Daily Prayers"} 
        stat={nextPrayer ? nextPrayer.name : "All Done"} 
        statLabel={nextPrayer ? "Next Prayer" : "Status"} 
        icon={<Moon size={14} />} 
        bgImage={isFriday ? JUMUAH_IMAGE : RANK_IMAGES.SALAH} 
      />
      
      <div className="space-y-3">
        {state.daily.prayers.map((prayer, idx) => {
           const isNext = !prayer.completed && (idx === 0 || state.daily.prayers[idx-1].completed);
           const displayName = (isFriday && prayer.id === 'dhuhr') ? 'Jumuah' : prayer.name;
           const displayUrdu = (isFriday && prayer.id === 'dhuhr') ? 'جمعہ' : prayer.urduName;

           return (
          <div 
            key={prayer.id} 
            onClick={() => !prayer.completed && updatePrayer(prayer.id, true, prayer.isJamaah)}
            className={`relative group overflow-hidden rounded-[2rem] border transition-all duration-300 cursor-pointer active:scale-[0.98] ${
              prayer.completed 
                ? `bg-gradient-to-r from-${themeColor}-900/60 to-${themeColor}-800/40 border-${themeColor}-500/30 shadow-lg shadow-${themeColor}-900/30 animate-aura` 
                : `glass-panel hover:border-${themeColor}-500/20`
            } ${isNext ? `ring-1 ring-${themeColor}-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02]` : ''}`}
          >
            {isNext && <div className={`absolute inset-0 bg-${themeColor}-500/5 animate-pulse-slow pointer-events-none`} />}

            <div className="flex flex-row-reverse justify-between items-center p-6 relative z-10">
              <div className="flex items-center flex-row-reverse gap-5">
                 <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                  prayer.completed 
                    ? `bg-${themeColor}-500 border-${themeColor}-400 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.5)]` 
                    : `border-white/10 bg-white/5 group-hover:border-${themeColor}-500/40`
                }`}>
                  {prayer.completed ? (
                      <CheckCircle2 size={24} className="text-white animate-scale-in" strokeWidth={3} />
                  ) : (
                      <div className={`w-3 h-3 rounded-full ${isNext ? `bg-${themeColor}-500 animate-pulse` : 'bg-white/10'}`} />
                  )}
                </div>
                
                <div className="flex flex-col items-end">
                     <span className={`text-3xl font-serif font-bold drop-shadow-sm transition-colors duration-300 ${prayer.completed ? `text-${themeColor}-400` : 'text-primary'}`}>{displayUrdu}</span>
                     <span className="text-xs font-bold uppercase tracking-wider text-secondary/60 mt-1">{displayName}</span>
                     {prayer.completed && prayer.completedAt && (
                         <div className={`flex items-center gap-1 mt-1 text-[9px] font-bold text-${themeColor}-400/80 animate-fade-in`}>
                            <Clock size={8} /> {prayer.completedAt}
                         </div>
                     )}
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (prayer.completed) updatePrayer(prayer.id, prayer.completed, !prayer.isJamaah);
                }}
                disabled={!prayer.completed}
                className={`px-4 py-2 rounded-xl transition-all duration-300 border flex items-center gap-2 ${
                  prayer.isJamaah 
                    ? `bg-${themeColor}-500/20 text-${themeColor}-400 border-${themeColor}-500/30` 
                    : 'bg-white/5 text-secondary border-transparent hover:bg-white/10'
                } ${!prayer.completed ? 'opacity-0 pointer-events-none translate-x-[-10px]' : 'opacity-100 translate-x-0'}`}
              >
                <Users size={14} />
                <span className="text-[10px] font-bold uppercase tracking-wider">{prayer.isJamaah ? 'Jama\'ah' : 'Solo'}</span>
              </button>
            </div>
          </div>
        );})}
      </div>
       
      <div className="glass-panel p-6 rounded-[2.5rem] border-red-500/10 bg-gradient-to-br from-red-950/20 to-transparent mt-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-lg">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div>
             <h3 className="font-bold text-red-400 text-sm flex items-center gap-2"><AlertTriangle size={16}/> Qada Bank</h3>
             <p className="text-[10px] text-red-400/50 uppercase tracking-wide font-bold">Missed Prayers</p>
          </div>
          <span className="text-4xl font-mono font-bold text-red-500 drop-shadow-md">{state.global.qadaBank}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <button onClick={() => updateQada(1)} className="py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 active:scale-95 transition-all font-bold text-xs uppercase tracking-wider">
            + Missed
          </button>
          <button onClick={() => updateQada(-1)} className={`py-4 rounded-2xl bg-${themeColor}-500/10 border border-${themeColor}-500/20 text-${themeColor}-400 hover:bg-${themeColor}-500/20 active:scale-95 transition-all font-bold text-xs uppercase tracking-wider`}>
            - Prayed
          </button>
        </div>
      </div>
    </div>
  );};

  return (
    <TabWrapper themeColor={themeColor} subView={subView} setSubView={setSubView} visualType="SALAH" onBack={onBack}>
      {subView === 'DAILY' && renderDaily()}
      {subView === 'STATS' && renderStats()}
      {subView === 'AWARDS' && <AwardsView categories={['SALAH']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};
