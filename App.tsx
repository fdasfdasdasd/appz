


import * as React from 'react';
import { useState, useEffect } from 'react';
import { Atmosphere } from './components/Atmosphere';
import { Dashboard } from './components/Dashboard';
import { TabSalah } from './components/TabSalah';
import { TabDhikr, TabHygiene, TabMDF, TabFitness, TabMemorize, TabQuran, TabRamadan, TabSettings, TabHabits, TabHadees, TabNight, TabNames99, TabBreathwork, TabJanazah, TabTibb, TabWordQuran } from './components/SimpleTabs';
import { AIAssistant } from './components/AIAssistant';
import { BottomNav } from './components/BottomNav';
import { AppState, INITIAL_DAILY_STATE, INITIAL_GLOBAL_STATE, ViewState, DailyStats, SpiritualMood } from './types';
import { MASTER_ACHIEVEMENTS, CONGRATS_MESSAGES } from './constants'; 
import { X, AlertTriangle, Trophy, Snowflake, ShieldCheck, Star } from 'lucide-react';

const useSound = () => {
  const play = (type: 'click' | 'success' | 'error' | 'pop') => {
    try {
      if (navigator.vibrate) {
         if (type === 'click') navigator.vibrate(10);
         if (type === 'success') navigator.vibrate([50, 30, 50, 30, 100]);
         if (type === 'error') navigator.vibrate([50, 100, 50]);
         if (type === 'pop') navigator.vibrate(15);
      }
    } catch (e) { }
  };
  return play;
};

interface Toast {
  id: string;
  msg: string;
  type: 'success' | 'error' | 'info';
}

const ToastContainer = ({ toasts }: { toasts: Toast[] }) => (
  <div className="fixed top-6 left-0 right-0 z-[9999] flex flex-col items-center gap-3 pointer-events-none px-4">
    {toasts.map(t => (
      <div key={t.id} className={`px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border animate-slide-up flex items-center gap-3 pointer-events-auto min-w-[200px] justify-center ${
        t.type === 'success' ? 'bg-emerald-500/90 border-emerald-400/50 text-white shadow-emerald-900/50' : 
        t.type === 'error' ? 'bg-rose-600/90 border-rose-400/50 text-white shadow-rose-900/50' :
        'bg-blue-600/90 border-blue-400/50 text-white shadow-blue-900/50'
      }`}>
        {t.type === 'success' && <Trophy size={20} className="text-emerald-100" />}
        {t.type === 'error' && <AlertTriangle size={20} className="text-rose-100" />}
        {t.type === 'info' && <Snowflake size={20} className="text-blue-100" />}
        <span className="text-sm font-bold uppercase tracking-wide">{t.msg}</span>
      </div>
    ))}
  </div>
);

const LoadingScreen = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-6 bg-black">
    <div className="w-20 h-20 rounded-full animate-spin border-4 border-emerald-500 border-t-transparent"></div>
    <div className="text-emerald-500 font-bold tracking-widest uppercase text-xs animate-pulse">Initializing System</div>
  </div>
);

const CongratsModal = ({ message, onClose }: { message: string, onClose: () => void }) => {
    useEffect(() => {
        const t = setTimeout(onClose, 4000);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center pointer-events-auto bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-800 p-10 rounded-[3rem] shadow-2xl text-center max-w-sm mx-6 animate-pop border border-white/20 flex flex-col items-center overflow-hidden">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 
                 <div className="mb-6 relative">
                    <Star size={64} className="text-yellow-300 fill-yellow-300 drop-shadow-[0_0_25px_rgba(253,224,71,0.6)] animate-spin-slow" />
                    <div className="absolute inset-0 animate-ping opacity-50"><Star size={64} className="text-white" /></div>
                 </div>
                 
                 <h2 className="text-3xl font-black text-white mb-3 font-serif tracking-tight drop-shadow-md">MashaAllah!</h2>
                 <p className="text-white/90 text-base font-medium leading-relaxed mb-6">{message}</p>
                 
                 <button onClick={onClose} className="bg-white text-emerald-700 px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:scale-105 active:scale-95 transition-all">Continue</button>
            </div>
        </div>
    );
};

const WidgetView = ({ state, onClose }: { state: AppState; onClose: () => void }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nextPrayer = state.daily.prayers.find(p => !p.completed);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white p-8 animate-fade-in cursor-pointer" onClick={onClose}>
        <button onClick={onClose} className="absolute top-8 right-8 opacity-50 hover:opacity-100"><X size={32} /></button>
        <div className="text-[10rem] font-bold leading-none tracking-tighter tabular-nums select-none">
           {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-2xl opacity-50 font-light uppercase tracking-[0.5em] mt-4 select-none">
           {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20 w-full max-w-4xl">
             <div className="text-center">
                <div className="text-6xl font-bold text-emerald-500">{Math.round(state.daily.imanScore)}</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-2">Iman Score</div>
             </div>
             <div className="text-center border-x border-white/10">
                <div className="text-4xl font-bold">{nextPrayer ? nextPrayer.name : 'Done'}</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-4">Next Prayer</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-bold text-rose-500">{Math.floor((Date.now() - (state.global.lastRelapseDate || 0)) / (1000 * 60 * 60 * 24))}d</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-4">Clean Streak</div>
             </div>
        </div>
        <p className="absolute bottom-8 opacity-20 text-sm uppercase tracking-widest">Tap to exit</p>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<ViewState>(ViewState.DASHBOARD);
  const [state, setState] = useState<AppState>({ daily: INITIAL_DAILY_STATE, global: INITIAL_GLOBAL_STATE });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");
  const [congratsMsg, setCongratsMsg] = useState<string | null>(null);
  const playSound = useSound();

  // Theme Logic based on Time/Mode
  const isDay = state.global.theme === 'DAY' || (state.global.theme === 'AUTO' && new Date().getHours() >= 6 && new Date().getHours() < 18);
  const currentThemeColor = isDay ? 'cyan' : 'emerald'; 

  const addToast = (msg: string, type: Toast['type']) => {
    const id = Date.now().toString() + Math.random();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const showCongratulation = (category: string) => {
      const messages = CONGRATS_MESSAGES[category] || CONGRATS_MESSAGES['DEFAULT'];
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setCongratsMsg(msg);
      playSound('success');
  };

  const triggerConfetti = () => {
     playSound('success');
  };

  const requestNotificationPermission = () => {
      if (!('Notification' in window)) {
          addToast("Notifications not supported", "error");
          return;
      }
      Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
              addToast("3x Daily Reminders Active", "success");
              new Notification("Zohaib Tracker", { body: "Setup complete. We will remind you Morning, Afternoon, and Evening.", icon: "/icon.png" });
          } else {
              addToast("Permission Denied", "error");
          }
      });
  };

  // Improved Notification Logic - Thrice Daily
  useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date();
          const hour = now.getHours();
          const minute = now.getMinutes();

          if (Notification.permission === 'granted' && minute === 0) {
             if (hour === 6) new Notification("Good Morning Zohaib", { body: "Start your day with Fajr and gratitude.", icon: "/icon.png" });
             if (hour === 14) new Notification("Midday Check-In", { body: "Have you prayed Dhuhr? Stay hydrated!", icon: "/icon.png" });
             if (hour === 21) new Notification("Evening Review", { body: "Complete your Dhikr and Night routine before sleep.", icon: "/icon.png" });
          }
      }, 60000); 
      return () => clearInterval(interval);
  }, []);

  // Offline File Backup Logic (Blob based for Android support)
  const exportData = () => {
      try {
          const dataStr = JSON.stringify(state);
          const blob = new Blob([dataStr], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          
          const link = document.createElement('a');
          link.href = url;
          link.download = `zohaib_tracker_backup_${new Date().toISOString().slice(0,10)}.json`;
          document.body.appendChild(link);
          link.click();
          
          // Cleanup
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          addToast("Backup downloaded successfully!", "success");
      } catch (e) {
          addToast("Failed to create backup", "error");
      }
  };

  const importData = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/json';
      input.onchange = (e: any) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (event) => {
              try {
                  const json = JSON.parse(event.target?.result as string);
                  if (json.daily && json.global) {
                       // Deep merge to ensure compatibility
                       const mergedState = {
                           daily: { ...INITIAL_DAILY_STATE, ...json.daily },
                           global: { ...INITIAL_GLOBAL_STATE, ...json.global }
                       };
                       setState(mergedState);
                       localStorage.setItem('zohaib_tracker_v3', JSON.stringify(mergedState));
                       addToast("Data restored successfully!", "success");
                       setTimeout(() => window.location.reload(), 1500);
                  } else {
                      throw new Error("Invalid format");
                  }
              } catch (err) {
                  addToast("Invalid Backup File", "error");
              }
          };
          reader.readAsText(file);
      };
      input.click();
  };

  const syncMaxStreaks = (streaks: typeof INITIAL_GLOBAL_STATE.streaks) => {
     const s = { ...streaks };
     s.maxSalah = Math.max(s.maxSalah || 0, s.salah);
     s.maxDhikr = Math.max(s.maxDhikr || 0, s.dhikr);
     s.maxMdf = Math.max(s.maxMdf || 0, s.mdf);
     s.maxFitness = Math.max(s.maxFitness || 0, s.fitness);
     s.maxHygiene = Math.max(s.maxHygiene || 0, s.hygiene);
     s.maxHabits = Math.max(s.maxHabits || 0, s.habits);
     s.maxQuran = Math.max(s.maxQuran || 0, s.quranSurah);
     s.maxRamadan = Math.max(s.maxRamadan || 0, s.ramadan);
     s.maxHadees = Math.max(s.maxHadees || 0, s.hadees);
     s.maxNight = Math.max(s.maxNight || 0, s.night);
     return s;
  };

  const getTotalCount = (currentState: AppState, selector: (d: DailyStats) => number) => {
      const historyTotal = (currentState.global.history || []).reduce((acc, d) => acc + selector(d), 0);
      return historyTotal + selector(currentState.daily);
  };

  const checkAchievements = (currentState: AppState) => {
      const { streaks, xp, currentParah, ramadanStats, unlockedAchievements } = currentState.global;
      const unlocked = new Set(unlockedAchievements);
      const newUnlocks: string[] = [];

      const getStreak = (cat: string) => {
          if (cat === 'SALAH') return streaks.salah;
          if (cat === 'DHIKR') return streaks.dhikr;
          if (cat === 'MDF') return streaks.mdf;
          if (cat === 'QURAN') return streaks.quranSurah;
          if (cat === 'RAMADAN') return streaks.ramadan;
          if (cat === 'FITNESS') return streaks.fitness;
          if (cat === 'HYGIENE') return streaks.hygiene;
          if (cat === 'HABITS') return streaks.habits;
          if (cat === 'HADEES') return streaks.hadees;
          if (cat === 'NIGHT') return streaks.night;
          if (cat === 'MEMORIZE') return currentState.global.memorizeWeek;
          if (cat === 'NAMES99') return streaks.names99;
          return 0;
      };

      const checkCount = (id: string, targetVal: number) => {
          let count = 0;
          if (id.includes('ramadan_fast') || id.includes('fasts')) count = ramadanStats.fastsDone;
          else if (id.includes('ramadan_taraweeh') || id.includes('taraweeh')) count = ramadanStats.taraweehPrayed;
          else if (id.includes('ramadan_khatam') || id.includes('quran_khatam')) count = ramadanStats.quranKhatams;
          else if (id.includes('salah_total')) count = getTotalCount(currentState, (d) => d.prayers.filter(p=>p.completed).length);
          else if (id.includes('salah_jamaah')) count = getTotalCount(currentState, (d) => d.prayers.filter(p=>p.completed && p.isJamaah).length);
          else if (id.includes('salah_fajr')) count = getTotalCount(currentState, (d) => d.prayers.find(p => p.id === 'fajr' && p.completed) ? 1 : 0);
          else if (id.includes('salah_isha')) count = getTotalCount(currentState, (d) => d.prayers.find(p => p.id === 'isha' && p.completed) ? 1 : 0);
          else if (id.includes('salah_tahajjud')) count = getTotalCount(currentState, (d) => d.prayers.find(p => p.id === 'tahajjud' && p.completed) ? 1 : 0);
          else if (id.includes('dhikr_total') || id.includes('dhikr_completion')) count = getTotalCount(currentState, (d) => d.dhikrAstaghfirullah + d.dhikrRabbiInni + (d.customDhikr?.reduce((a,b)=>a+b.count,0) || 0));
          else if (id.includes('fitness_total') || id.includes('fitness_pushups')) count = getTotalCount(currentState, (d) => d.fitness.pushups);
          else if (id.includes('hygiene_total')) count = getTotalCount(currentState, (d) => (d.hygiene.waterGlasses >= 8 ? 1 : 0) + (d.hygiene.shower ? 1 : 0) + (d.hygiene.brush ? 1 : 0) + (d.hygiene.cleanDesk ? 1 : 0));
          else if (id.includes('hygiene_water')) count = getTotalCount(currentState, (d) => d.hygiene.waterGlasses >= 8 ? 1 : 0);
          else if (id.includes('hadees_total')) count = getTotalCount(currentState, (d) => d.hadeesRead ? 1 : 0);
          else if (id.includes('night_total')) count = getTotalCount(currentState, (d) => (d.night.surahMulk && d.night.surahBaqarah ? 1 : 0));
          else if (id.includes('memorize')) count = currentState.global.memorizeProgress || 0;
          else if (id.includes('names99')) count = streaks.names99 || 0;
          
          return count >= targetVal;
      };

      const getValue = (id: string) => {
         if (id.includes('quran_juz')) return currentParah;
         if (id.includes('quran_khatam')) return currentState.global.quransRecited || 0;
         if (id.includes('memorize')) return currentState.global.memorizeProgress || 0;
         return 0;
      };

      MASTER_ACHIEVEMENTS.forEach(ach => {
          if (unlocked.has(ach.id)) return;
          let passed = false;
          if (ach.metric === 'STREAK') {
              const streak = getStreak(ach.category);
              if (streak >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'COUNT') {
              if (checkCount(ach.id, ach.value || 0)) passed = true;
          } else if (ach.metric === 'VALUE') {
              const val = getValue(ach.id);
              if (val >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'XP') {
              if (xp >= (ach.value || 0)) passed = true;
          }

          if (passed) {
              newUnlocks.push(ach.id);
              showCongratulation(ach.category);
          }
      });

      if (newUnlocks.length > 0) {
          setState(prev => ({
              ...prev,
              global: { 
                  ...prev.global, 
                  unlockedAchievements: [...prev.global.unlockedAchievements, ...newUnlocks],
                  xp: prev.global.xp + (newUnlocks.length * 50) 
              }
          }));
      }
  };

  const calculateImanScore = (daily: DailyStats) => {
    let score = 0;
    const completedPrayers = daily.prayers.filter(p => p.completed).length;
    score += (completedPrayers * 10); 
    if ((daily.dhikrAstaghfirullah + daily.dhikrRabbiInni) >= 4200) score += 10;
    if (Object.values(daily.quranParts).some(Boolean)) score += 10;
    if (daily.night.surahMulk && daily.night.surahBaqarah) score += 10;
    if (daily.hadeesRead) score += 10;
    if (!daily.habits.failedToday) score += 10;
    return Math.min(100, score);
  };

  const updateState = (updater: (prev: AppState) => AppState) => {
    setState(prev => {
       const next = updater(prev);
       next.daily.imanScore = calculateImanScore(next.daily);
       return next;
    });
  };

  useEffect(() => {
     if (!isLoading) {
         checkAchievements(state);
     }
  }, [
      state.daily.prayers, 
      state.daily.dhikrAstaghfirullah, 
      state.daily.fitness,
      state.global.streaks,
      state.global.ramadanStats
  ]);

  const getDaysDiff = (d1: string, d2: string) => {
     const date1 = new Date(d1);
     const date2 = new Date(d2);
     const diff = Math.abs(date2.getTime() - date1.getTime());
     return Math.ceil(diff / (1000 * 60 * 60 * 24)); 
  };

  useEffect(() => {
    const saved = localStorage.getItem('zohaib_tracker_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().split('T')[0];
        
        let safeGlobal = { 
            ...INITIAL_GLOBAL_STATE, 
            ...parsed.global, 
            theme: parsed.global.theme || 'NIGHT',
            streaks: { ...INITIAL_GLOBAL_STATE.streaks, ...parsed.global.streaks } 
        };
        let safeDaily = { ...INITIAL_DAILY_STATE, ...parsed.daily };
        
        // Ensure new fields exist
        if(typeof safeDaily.journal === 'undefined') safeDaily.journal = "";
        if(typeof safeGlobal.streaks.names99 === 'undefined') safeGlobal.streaks.names99 = 0;
        if(typeof safeGlobal.customColor === 'undefined') safeGlobal.customColor = null;

        // Backwards compatibility logic
        if(typeof safeDaily.mood === 'undefined') safeDaily.mood = null;
        if(typeof safeDaily.hygiene.cleanDesk === 'undefined') safeDaily.hygiene.cleanDesk = false;
        
        // Freeze mode check
        const now = Date.now();
        const isFrozen = safeGlobal.freezeModeUntil && now < safeGlobal.freezeModeUntil;

        if (parsed.daily.date !== today) {
           const daysPassed = getDaysDiff(parsed.daily.date, today);
           
           if (daysPassed > 1 && !isFrozen) {
               safeGlobal.streaks.salah = 0;
               safeGlobal.streaks.dhikr = 0;
               safeGlobal.streaks.fitness = 0;
               safeGlobal.streaks.hygiene = 0;
               safeGlobal.streaks.quranSurah = 0;
               safeGlobal.streaks.habits = 0; 
               safeGlobal.streaks.ramadan = 0;
               safeGlobal.streaks.hadees = 0;
               safeGlobal.streaks.night = 0;
           }
           
           const newHistory = [...(safeGlobal.history || []), safeDaily];
           safeGlobal = {
               ...safeGlobal,
               history: newHistory,
               streaks: syncMaxStreaks(safeGlobal.streaks)
           };

           safeDaily = {
               ...INITIAL_DAILY_STATE,
               date: today,
               habits: { smokingCount: 0, nicotineCount: 0, failedToday: false },
               fitness: { ...safeDaily.fitness, pushups: 0, customWorkouts: safeDaily.fitness.customWorkouts.map((c:any) => ({...c, count: 0})) }, 
               customDhikr: (safeDaily.customDhikr || []).map((d: any) => ({ ...d, count: 0 }))
           };
        }

        setState({ daily: safeDaily, global: safeGlobal });

      } catch (e) {
        console.error("Save file corrupted", e);
        setState({ daily: INITIAL_DAILY_STATE, global: INITIAL_GLOBAL_STATE });
      }
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
        const globalWithMax = { ...state.global, streaks: syncMaxStreaks(state.global.streaks) };
        localStorage.setItem('zohaib_tracker_v3', JSON.stringify({ daily: state.daily, global: globalWithMax }));
    }
  }, [state, isLoading]);

  useEffect(() => {
    const applyTheme = () => {
       const root = document.body;
       root.classList.remove('theme-day', 'theme-night');
       
       // Handle custom color builder
       if (state.global.customColor) {
           root.style.setProperty('--glass-bg', `${state.global.customColor}10`); 
           // We can dynamically inject styles here if needed for deeper customization
       }

       if (state.global.theme === 'DAY') root.classList.add('theme-day');
       else if (state.global.theme === 'NIGHT') root.classList.add('theme-night');
       else {
         const hour = new Date().getHours();
         if (hour >= 7 && hour < 18) root.classList.add('theme-day');
         else root.classList.add('theme-night');
       }
    };
    applyTheme();
    const interval = setInterval(applyTheme, 60000);
    return () => clearInterval(interval);
  }, [state.global.theme, state.global.customColor]);

  const checkAndToggleStreak = (
      prev: AppState, 
      category: keyof typeof INITIAL_GLOBAL_STATE.streaks, 
      wasComplete: boolean, 
      isComplete: boolean
  ) => {
      let streaks = { ...prev.global.streaks };
      let earnedXP = 0;

      const isFrozen = prev.global.freezeModeUntil && Date.now() < prev.global.freezeModeUntil;

      if (!wasComplete && isComplete) {
          streaks[category] = (streaks[category] as number) + 1;
          earnedXP = 10;
          triggerConfetti();
          showCongratulation((category as string).toUpperCase());
      } 
      else if (wasComplete && !isComplete) {
          if (!isFrozen) {
              streaks[category] = Math.max(0, (streaks[category] as number) - 1);
              earnedXP = -10;
          }
      }
      
      prev.global.xp = Math.max(0, prev.global.xp + earnedXP);
      return streaks;
  };

  const buyFreeze = () => {
    if (state.global.xp >= 500) {
        playSound('success');
        updateState(prev => ({ ...prev, global: { ...prev.global, xp: prev.global.xp - 500, streakFreezes: (prev.global.streakFreezes || 0) + 1 } }));
        addToast("Freeze Purchased!", "success");
    } else {
        addToast("Need 500 XP", "error");
    }
  };

  const buyTravelMode = () => {
     if (state.global.xp >= 2000) {
         playSound('success');
         const sevenDays = 7 * 24 * 60 * 60 * 1000;
         updateState(prev => ({
             ...prev,
             global: {
                 ...prev.global,
                 xp: prev.global.xp - 2000,
                 freezeModeUntil: Date.now() + sevenDays
             }
         }));
         addToast("7 Days Protection Activated", "success");
     } else {
         addToast("Need 2000 XP", "error");
     }
  };
  
  const hardReset = () => {
      if(confirm("Warning: This will permanently delete ALL your progress, streaks, and history. This action cannot be undone. Are you sure?")) {
          localStorage.removeItem('zohaib_tracker_v3');
          window.location.reload();
      }
  }

  const handleUpdatePrayer = (id: string, completed: boolean, isJamaah: boolean) => {
    playSound('click');
    updateState(prev => {
        const wasComplete = prev.daily.prayers.filter(p => p.completed).length >= 5;
        const newPrayers = prev.daily.prayers.map(p => p.id === id ? { 
            ...p, 
            completed, 
            isJamaah, 
            completedAt: completed ? new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'}) : null 
        } : p);
        const isComplete = newPrayers.filter(p => p.completed).length >= 5;
        const newStreaks = checkAndToggleStreak(prev, 'salah', wasComplete, isComplete);
        return { 
            ...prev, 
            global: { ...prev.global, streaks: newStreaks },
            daily: { ...prev.daily, prayers: newPrayers } 
        };
    });
  };

  const handleDhikr = (type: string, amt: number) => {
     if (amt >= 100) playSound('pop');
     updateState(prev => {
        const wasComplete = prev.daily.dhikrAstaghfirullah >= 2100 && prev.daily.dhikrRabbiInni >= 2100;
        let newState = { ...prev };
        if (type === 'astaghfirullah') newState.daily.dhikrAstaghfirullah += amt;
        else if (type === 'rabbiInni') newState.daily.dhikrRabbiInni += amt;
        else newState.daily.customDhikr = prev.daily.customDhikr.map(d => d.id === type ? { ...d, count: d.count + amt } : d);
        
        const isComplete = newState.daily.dhikrAstaghfirullah >= 2100 && newState.daily.dhikrRabbiInni >= 2100;
        newState.global.streaks = checkAndToggleStreak(prev, 'dhikr', wasComplete, isComplete);
        return newState;
     });
  };

  const handleAddCustomDhikr = (text: string, target: number) => {
      updateState(prev => ({ ...prev, daily: { ...prev.daily, customDhikr: [...prev.daily.customDhikr, { id: Date.now().toString(), text, target, count: 0 }] } }));
      addToast("Dhikr Added", "success");
  };
  
  const handleHygiene = (key: any) => {
      playSound('click');
      updateState(prev => {
          const h = prev.daily.hygiene;
          const wasComplete = h.waterGlasses >= 8 && h.shower && h.brush && h.cleanDesk;
          
          const updatedHygiene = { ...prev.daily.hygiene };
          if (key === 'reset_water') updatedHygiene.waterGlasses = 0;
          else if (key === 'water') updatedHygiene.waterGlasses = (updatedHygiene.waterGlasses || 0) + 1;
          else if (key === 'shower') updatedHygiene.shower = !updatedHygiene.shower;
          else if (key === 'brush') updatedHygiene.brush = !updatedHygiene.brush;
          else if (key === 'cleanDesk') updatedHygiene.cleanDesk = !updatedHygiene.cleanDesk;
          
          const u = updatedHygiene;
          const isComplete = u.waterGlasses >= 8 && u.shower && u.brush && u.cleanDesk;
          
          const newStreaks = checkAndToggleStreak(prev, 'hygiene', wasComplete, isComplete);
          return { ...prev, global: { ...prev.global, streaks: newStreaks }, daily: { ...prev.daily, hygiene: updatedHygiene } };
      });
  };

  const handleHabitUpdate = (habit: string) => {
    playSound('click');
    const key = habit === 'smoking' ? 'smokingCount' : 'nicotineCount';
    const limit = habit === 'smoking' ? 2 : 3;
    const currentVal = state.daily.habits[key as 'smokingCount' | 'nicotineCount'];
    
    if (currentVal + 1 > limit) {
        playSound('error');
        setWarningMsg("Limit Exceeded! Streak Reset.");
        setShowWarning(true);
        updateState(prev => ({
            ...prev,
            global: { ...prev.global, streaks: { ...prev.global.streaks, habits: 0 } }, 
            daily: { 
                ...prev.daily, 
                habits: { 
                    ...prev.daily.habits, 
                    failedToday: true, 
                    [key]: currentVal + 1 
                } 
            }
        }));
        setTimeout(() => setShowWarning(false), 4000);
    } else {
        updateState(prev => {
             const newDaily = { ...prev.daily, habits: { ...prev.daily.habits, [key]: currentVal + 1 } };
             return { ...prev, daily: newDaily };
        });
    }
  };

  const handleRamadanStatUpdate = (key: string, delta: number) => {
      playSound('pop');
      updateState(prev => ({
          ...prev,
          global: { ...prev.global, ramadanStats: { ...prev.global.ramadanStats, [key]: Math.max(0, (prev.global.ramadanStats ? prev.global.ramadanStats[key as keyof typeof prev.global.ramadanStats] : 0) + delta) } }
      }));
  };

  const handleRamadanDailyToggle = (key: keyof DailyStats['ramadan']) => {
      playSound('click');
      updateState(prev => {
         const oldVal = prev.daily.ramadan[key];
         const newVal = !oldVal;
         
         let newRamadanStats = { ...prev.global.ramadanStats };
         if (newVal) {
             if (key === 'iftar') newRamadanStats.fastsDone += 1;
             if (key === 'taraweeh') newRamadanStats.taraweehPrayed += 1;
         } else {
             if (key === 'iftar') newRamadanStats.fastsDone = Math.max(0, newRamadanStats.fastsDone - 1);
             if (key === 'taraweeh') newRamadanStats.taraweehPrayed = Math.max(0, newRamadanStats.taraweehPrayed - 1);
         }
         
         const newDaily = { ...prev.daily, ramadan: { ...prev.daily.ramadan, [key]: newVal } };
         
         const wasDayComplete = prev.daily.ramadan.suhoor && prev.daily.ramadan.iftar && prev.daily.ramadan.taraweeh && prev.daily.ramadan.readParah;
         const isDayComplete = newDaily.ramadan.suhoor && newDaily.ramadan.iftar && newDaily.ramadan.taraweeh && newDaily.ramadan.readParah;
         const newStreaks = checkAndToggleStreak(prev, 'ramadan', wasDayComplete, isDayComplete);
         
         return {
             ...prev,
             global: { ...prev.global, streaks: newStreaks, ramadanStats: newRamadanStats },
             daily: newDaily
         };
      });
  };

  const handleQuranProgress = (part: string) => {
    if (!['rub', 'nisf', 'thalatha', 'kamil'].includes(part)) return;
    playSound('click');
    setState(prev => {
        const wasComplete = Object.values(prev.daily.quranParts).some(Boolean);
        const newParts = { ...prev.daily.quranParts, [part]: !prev.daily.quranParts[part as keyof typeof prev.daily.quranParts] };
        const isComplete = Object.values(newParts).some(Boolean);
        const newStreaks = checkAndToggleStreak(prev, 'quranSurah', wasComplete, isComplete);
        
        const allDone = newParts.rub && newParts.nisf && newParts.thalatha && newParts.kamil;
        
        if (allDone) {
            playSound('success');
            let newParah = prev.global.currentParah + 1;
            let currentKhatams = prev.global.quransRecited || 0;
            
            if (newParah > 30) {
                newParah = 1;
                currentKhatams += 1;
                showCongratulation('QURAN');
            } else {
                showCongratulation('QURAN');
            }
            
            return {
                ...prev,
                global: { 
                    ...prev.global, 
                    currentParah: newParah, 
                    quransRecited: currentKhatams,
                    xp: prev.global.xp + 50, 
                    streaks: newStreaks 
                },
                daily: { ...prev.daily, quranParts: { rub: false, nisf: false, thalatha: false, kamil: false } }
            };
        } else {
            return { ...prev, global: { ...prev.global, streaks: newStreaks }, daily: { ...prev.daily, quranParts: newParts } };
        }
    });
  };

  const handleMarkHadees = () => {
    playSound('success');
    updateState(prev => {
        const wasComplete = false; 
        const isComplete = true;
        const newStreaks = checkAndToggleStreak(prev, 'hadees', wasComplete, isComplete);
        showCongratulation('HADEES');
        return {
            ...prev,
            global: { ...prev.global, streaks: newStreaks },
            daily: { ...prev.daily, hadeesRead: true }
        };
    });
  };

  const handleNightUpdate = (key: 'surahMulk' | 'surahBaqarah' | 'ayatulKursi' | 'fourQuls') => {
      playSound('click');
      updateState(prev => {
          const n = prev.daily.night;
          const wasComplete = n.surahMulk && n.surahBaqarah && n.ayatulKursi && n.fourQuls;
          
          const newDaily = { ...prev.daily, night: { ...prev.daily.night, [key]: !prev.daily.night[key] } };
          const u = newDaily.night;
          
          const isComplete = u.surahMulk && u.surahBaqarah && u.ayatulKursi && u.fourQuls;
          const newStreaks = checkAndToggleStreak(prev, 'night', wasComplete, isComplete);
          
          return { ...prev, global: { ...prev.global, streaks: newStreaks }, daily: newDaily };
      });
  };
  
  const handleUpdateJournal = (text: string) => {
      updateState(prev => ({ ...prev, daily: { ...prev.daily, journal: text } }));
  };

  const handleMemorizeNext = () => {
      playSound('success');
      addToast("Content Learned! +20 XP", "success");
      updateState(prev => ({ ...prev, global: { ...prev.global, memorizeProgress: (prev.global.memorizeProgress || 0) + 1, xp: prev.global.xp + 20 } }));
      showCongratulation('MEMORIZE');
  };
  
  const handleUpdatePushups = (amt: number) => {
      playSound('click');
      updateState(prev => {
          const wasComplete = prev.daily.fitness.pushups >= prev.daily.fitness.pushupsTarget;
          const newCount = prev.daily.fitness.pushups + amt;
          const isComplete = newCount >= prev.daily.fitness.pushupsTarget;
          
          if (!wasComplete && isComplete) {
              playSound('success');
              showCongratulation('FITNESS');
          }
          
          const newStreaks = checkAndToggleStreak(prev, 'fitness', wasComplete, isComplete);
          return {
              ...prev,
              global: { ...prev.global, streaks: newStreaks },
              daily: { ...prev.daily, fitness: { ...prev.daily.fitness, pushups: newCount } }
          };
      });
  };

  const handleAddCustomExercise = (name: string, target: number) => {
      playSound('pop');
      updateState(prev => ({
          ...prev,
          daily: { 
              ...prev.daily, 
              fitness: { 
                  ...prev.daily.fitness, 
                  customWorkouts: [...prev.daily.fitness.customWorkouts, { id: Date.now().toString(), name, target, count: 0, sets: 0 }] 
              } 
          }
      }));
  };

  const handleUpdateCustomExercise = (id: string, amt: number) => {
      playSound('click');
      updateState(prev => ({
          ...prev,
          daily: {
              ...prev.daily,
              fitness: {
                  ...prev.daily.fitness,
                  customWorkouts: prev.daily.fitness.customWorkouts.map(ex => ex.id === id ? { ...ex, count: ex.count + amt } : ex)
              }
          }
      }));
  };

  const handleMoodUpdate = (mood: SpiritualMood) => {
    playSound('pop');
    updateState(prev => ({
      ...prev,
      daily: { ...prev.daily, mood }
    }));
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Atmosphere mode={state.global.theme} view={view} />
      <ToastContainer toasts={toasts} />
      
      {congratsMsg && (
          <CongratsModal message={congratsMsg} onClose={() => setCongratsMsg(null)} />
      )}

      {showWarning && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 animate-fade-in backdrop-blur-sm px-4">
            <div className="bg-gradient-to-b from-red-900 to-black border border-red-500 rounded-3xl p-8 max-w-sm text-center shadow-2xl shadow-red-500/50 animate-slide-up">
                <AlertTriangle size={60} className="text-red-500 mx-auto mb-4 animate-pulse" />
                <h2 className="text-3xl font-bold text-white mb-2">LIMIT EXCEEDED</h2>
                <p className="text-red-300 mb-6">{warningMsg || "Warning: Daily limit exceeded. Streak reset to 0."}</p>
                <button onClick={() => setShowWarning(false)} className="w-full py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500">I Understand</button>
            </div>
        </div>
      )}

      {view === ViewState.WIDGET && <WidgetView state={state} onClose={() => setView(ViewState.DASHBOARD)} />}

      {view !== ViewState.WIDGET && (
        <div className="min-h-screen relative z-10 max-w-md mx-auto pb-32">
          {view === ViewState.DASHBOARD && <Dashboard state={state} changeView={setView} updateMood={handleMoodUpdate} />}
          {view === ViewState.SALAH && <TabSalah state={state} updatePrayer={handleUpdatePrayer} updateQada={(amt) => updateState(prev => ({ ...prev, global: { ...prev.global, qadaBank: Math.max(0, prev.global.qadaBank + amt) } }))} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.DHIKR && <TabDhikr state={state} updateDhikr={handleDhikr} addCustomDhikr={handleAddCustomDhikr} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.AI_CHAT && <AIAssistant state={state} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.QURAN && <TabQuran state={state} updatePart={handleQuranProgress} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.HADEES && <TabHadees state={state} markRead={handleMarkHadees} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.NIGHT && <TabNight state={state} updateNight={handleNightUpdate} updateJournal={handleUpdateJournal} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.MDF && <TabMDF state={state} resetRelapse={() => updateState(prev => ({...prev, global: {...prev.global, lastRelapseDate: Date.now(), streaks: {...prev.global.streaks, mdf: 0}}, daily: {...prev.daily, habits: {...prev.daily.habits, failedToday: true}}}))} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.HABITS && <TabHabits state={state} updateHabit={handleHabitUpdate} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.HYGIENE && <TabHygiene state={state} updateHygiene={handleHygiene} updateHabit={handleHabitUpdate} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.FITNESS && <TabFitness state={state} updatePushups={handleUpdatePushups} addCustomExercise={handleAddCustomExercise} updateCustomExercise={handleUpdateCustomExercise} onOpenBreathwork={() => setView(ViewState.BREATHWORK)} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.MEMORIZE && <TabMemorize state={state} markLearned={handleMemorizeNext} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.RAMADAN && <TabRamadan state={state} toggleRamadanDaily={handleRamadanDailyToggle} updateRamadanStat={handleRamadanStatUpdate} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.NAMES99 && <TabNames99 state={state} onBack={() => setView(ViewState.DASHBOARD)} themeOverride={currentThemeColor} />}
          {view === ViewState.BREATHWORK && <TabBreathwork onBack={() => setView(ViewState.FITNESS)} />}
          {view === ViewState.JANAZAH && <TabJanazah onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.TIBB && <TabTibb onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.WORD_QURAN && <TabWordQuran onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.SETTINGS && <TabSettings state={state} setTheme={(t) => updateState(prev => ({...prev, global: {...prev.global, theme: t}}))} setCustomColor={(c) => updateState(prev => ({...prev, global: {...prev.global, customColor: c}}))} toggleRamadan={() => updateState(prev => ({...prev, global: {...prev.global, ramadanMode: !prev.global.ramadanMode}}))} exportData={exportData} importData={importData} enterWidgetMode={() => setView(ViewState.WIDGET)} onBack={() => setView(ViewState.DASHBOARD)} buyFreeze={buyFreeze} buyTravelMode={buyTravelMode} resetApp={hardReset} requestNotify={requestNotificationPermission} updateQada={(amt) => updateState(prev => ({ ...prev, global: { ...prev.global, qadaBank: Math.max(0, prev.global.qadaBank + amt) } }))} />}
        </div>
      )}
      
      {view !== ViewState.WIDGET && view !== ViewState.BREATHWORK && (
        <BottomNav 
            currentView={view} 
            changeView={(v) => { playSound('click'); setView(v); }} 
            ramadanMode={state.global.ramadanMode} 
            isDay={isDay}
        />
      )}
    </>
  );
};

export default App;