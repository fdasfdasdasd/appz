
import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  }
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  SALAH = 'SALAH',
  DHIKR = 'DHIKR',
  QURAN = 'QURAN',
  HADEES = 'HADEES', 
  NIGHT = 'NIGHT',   
  MDF = 'MDF',
  FITNESS = 'FITNESS',
  HYGIENE = 'HYGIENE', 
  HABITS = 'HABITS',
  MEMORIZE = 'MEMORIZE',
  RAMADAN = 'RAMADAN',
  SETTINGS = 'SETTINGS',
  WIDGET = 'WIDGET',
  AI_CHAT = 'AI_CHAT',
  NAMES99 = 'NAMES99',
  BREATHWORK = 'BREATHWORK',
  JANAZAH = 'JANAZAH',
  TIBB = 'TIBB',
  WORD_QURAN = 'WORD_QURAN'
}

export type SubView = 'DAILY' | 'STATS' | 'AWARDS';

export type ThemeMode = 'AUTO' | 'DAY' | 'NIGHT';

export type SpiritualMood = 'BROKEN' | 'LOW' | 'NEUTRAL' | 'HIGH' | 'ECSTATIC' | null;

export interface Prayer {
  id: string;
  name: string;
  urduName: string;
  completed: boolean;
  completedAt: string | null;
  isJamaah: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'LEGEND' | 'ETERNAL' | 'TITAN' | 'MYTHIC' | 'DIVINE';
  icon: string;
  category: 'SALAH' | 'DHIKR' | 'QURAN' | 'MDF' | 'HYGIENE' | 'HABITS' | 'RAMADAN' | 'FITNESS' | 'MEMORIZE' | 'HADEES' | 'NIGHT' | 'NAMES99' | 'KNOWLEDGE';
  metric?: 'STREAK' | 'COUNT' | 'VALUE' | 'XP' | 'SPECIAL';
  value?: number;
}

export interface CustomDhikr {
  id: string;
  text: string;
  target: number;
  count: number;
}

export interface Exercise {
  id: string;
  name: string;
  target: number;
  count: number;
  sets: number;
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  prayers: Prayer[];
  
  // Dhikr split
  dhikrAstaghfirullah: number;
  dhikrRabbiInni: number;
  customDhikr: CustomDhikr[];
  
  // Quran
  quranParts: {
    rub: boolean;
    nisf: boolean;
    thalatha: boolean;
    kamil: boolean;
  };
  
  // Night Routine
  night: {
    surahMulk: boolean;
    surahBaqarah: boolean; // Last 2 ayats
    tasbihFatima: boolean;
    ayatulKursi: boolean;
    fourQuls: boolean;
  };
  journal: string; // Gratitude journal

  // Hadees
  hadeesRead: boolean;
  
  // Hygiene & Habits
  hygiene: {
    shower: boolean;
    brush: boolean;
    cleanDesk: boolean; 
    waterGlasses: number;
  };
  habits: {
    smokingCount: number; // Limit 2
    nicotineCount: number; // Limit 3
    failedToday: boolean;
  };
  
  // Fitness
  fitness: {
    pushups: number;
    pushupsTarget: number;
    customWorkouts: Exercise[];
  };
  
  // Ramadan
  ramadan: {
    suhoor: boolean;
    iftar: boolean;
    taraweeh: boolean;
    charity: boolean;
    readParah: boolean;
  };
  
  imanScore: number;
  mood: SpiritualMood;
  completedDuaReview: boolean;
  mdfCheckIn: boolean; 
}

export interface GlobalStats {
  level: number;
  xp: number;
  streaks: {
    salah: number;
    dhikr: number; 
    mdf: number; 
    fitness: number;
    hygiene: number; 
    habits: number; 
    quranSurah: number; 
    ramadan: number;
    hadees: number; 
    night: number;  
    names99: number;
    breathwork: number;
    
    // MAX STREAKS
    maxSalah: number;
    maxDhikr: number;
    maxMdf: number;
    maxFitness: number;
    maxHygiene: number;
    maxHabits: number;
    maxQuran: number;
    maxRamadan: number;
    maxHadees: number;
    maxNight: number;
  };
  knowledge: {
    janazah: boolean;
    tibb: boolean;
    surahsLearned: string[];
  };
  streakFreezes: number;
  freezeModeUntil: number | null; // New: For Travel/Sick mode
  qadaBank: number;
  quransRecited: number;
  currentParah: number;
  lastRelapseDate: number | null; 
  lastMdfRewardDate: number | null;
  memorizeWeek: number; 
  memorizeProgress: number;
  name: string;
  ramadanMode: boolean;
  ramadanStats: {
    fastsDone: number;
    taraweehPrayed: number;
    quranKhatams: number;
  };
  theme: ThemeMode;
  customColor: string | null; // For Theme Builder
  hapticsEnabled: boolean;
  hasSeenOnboarding: boolean;
  unlockedAchievements: string[]; 
  history: DailyStats[];
}

export interface AppState {
  daily: DailyStats;
  global: GlobalStats;
}

export const INITIAL_DAILY_STATE: DailyStats = {
  date: new Date().toISOString().split('T')[0],
  prayers: [
    { id: 'tahajjud', name: 'Tahajjud', urduName: 'تہجد', completed: false, completedAt: null, isJamaah: false },
    { id: 'fajr', name: 'Fajr', urduName: 'فجر', completed: false, completedAt: null, isJamaah: false },
    { id: 'dhuhr', name: 'Dhuhr', urduName: 'ظہر', completed: false, completedAt: null, isJamaah: false },
    { id: 'asr', name: 'Asr', urduName: 'عصر', completed: false, completedAt: null, isJamaah: false },
    { id: 'maghrib', name: 'Maghrib', urduName: 'مغرب', completed: false, completedAt: null, isJamaah: false },
    { id: 'isha', name: 'Isha', urduName: 'عشاء', completed: false, completedAt: null, isJamaah: false },
  ],
  dhikrAstaghfirullah: 0,
  dhikrRabbiInni: 0,
  customDhikr: [],
  quranParts: { rub: false, nisf: false, thalatha: false, kamil: false },
  night: { surahMulk: false, surahBaqarah: false, tasbihFatima: false, ayatulKursi: false, fourQuls: false },
  journal: "",
  hadeesRead: false,
  hygiene: { shower: false, brush: false, cleanDesk: false, waterGlasses: 0 },
  habits: { smokingCount: 0, nicotineCount: 0, failedToday: false },
  fitness: { pushups: 0, pushupsTarget: 60, customWorkouts: [] },
  ramadan: { suhoor: false, iftar: false, taraweeh: false, charity: false, readParah: false },
  imanScore: 0,
  mood: null,
  completedDuaReview: false,
  mdfCheckIn: false,
};

export const INITIAL_GLOBAL_STATE: GlobalStats = {
  level: 1,
  xp: 0,
  streaks: {
    salah: 0, dhikr: 0, mdf: 0, fitness: 0, hygiene: 0, habits: 0, quranSurah: 0, ramadan: 0, hadees: 0, night: 0, names99: 0, breathwork: 0,
    maxSalah: 0, maxDhikr: 0, maxMdf: 0, maxFitness: 0, maxHygiene: 0, maxHabits: 0, maxQuran: 0, maxRamadan: 0, maxHadees: 0, maxNight: 0
  },
  knowledge: { janazah: false, tibb: false, surahsLearned: [] },
  streakFreezes: 1,
  freezeModeUntil: null,
  qadaBank: 0,
  quransRecited: 0,
  currentParah: 1,
  lastRelapseDate: Date.now() - (1000 * 60 * 60 * 24),
  lastMdfRewardDate: Date.now(),
  memorizeWeek: 0,
  memorizeProgress: 0,
  name: 'Zohaib',
  ramadanMode: false,
  ramadanStats: { fastsDone: 0, taraweehPrayed: 0, quranKhatams: 0 },
  theme: 'NIGHT', 
  customColor: null,
  hapticsEnabled: true,
  hasSeenOnboarding: false,
  unlockedAchievements: [],
  history: []
};
