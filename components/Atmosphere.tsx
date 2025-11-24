


import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeMode, ViewState } from '../types';

interface Props {
  mode: ThemeMode;
  view: ViewState;
}

// Background Element SVGs & Particles with Slower, More Premium Motion

const ArabicLetters = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Alif */}
        <div className="absolute top-[20%] left-[10%] opacity-[0.03] animate-float-slow text-9xl text-white font-arabic blur-sm transition-opacity duration-1000">ا</div>
        {/* Lam */}
        <div className="absolute top-[50%] right-[15%] opacity-[0.03] animate-float-slow text-9xl text-white font-arabic blur-sm transition-opacity duration-1000" style={{ animationDelay: '2s' }}>ل</div>
        {/* Meem */}
        <div className="absolute bottom-[30%] left-[20%] opacity-[0.03] animate-float-slow text-9xl text-white font-arabic blur-sm transition-opacity duration-1000" style={{ animationDelay: '4s' }}>م</div>
    </div>
);

const FloatingBeads = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full bg-amber-400/20 blur-xl animate-float-slow mix-blend-screen"
                style={{
                    width: Math.random() * 50 + 20 + 'px',
                    height: Math.random() * 50 + 20 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 15 + 15 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
             />
        ))}
    </div>
);

const WaterBubbles = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(8)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full border border-cyan-400/20 opacity-30 animate-slide-up"
                style={{
                    width: Math.random() * 30 + 10 + 'px',
                    height: Math.random() * 30 + 10 + 'px',
                    bottom: '-50px',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 10 + 10 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
             />
        ))}
    </div>
);

const FireSparks = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(12)].map((_, i) => (
             <div 
                key={i} 
                className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-40 animate-slide-up blur-[1px] shadow-[0_0_10px_rgba(251,146,60,0.5)]"
                style={{
                    bottom: '0',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 5 + 3 + 's',
                    animationDelay: Math.random() * 3 + 's'
                }}
             />
        ))}
    </div>
);

const SynapseNodes = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="w-full h-full">
            {/* Neural connections */}
            <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" />
            <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '1s'}} />
            <line x1="40%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '2s'}} />
            
            <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                    <stop offset="50%" stopColor="rgba(56, 189, 248, 0.4)" />
                    <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                </linearGradient>
            </defs>

            <circle cx="40%" cy="50%" r="3" fill="#818cf8" className="animate-pulse" style={{ animationDelay: '0.5s'}}>
                 <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
);

const MosqueSilhouette = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[35vh] opacity-10 pointer-events-none z-0 animate-slide-up transition-opacity duration-1000">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-white fill-current blur-[1px]">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fillOpacity="1" />
        </svg>
    </div>
);

export const Atmosphere: React.FC<Props> = ({ mode, view }) => {
  const [gradients, setGradients] = useState({
    bg: 'bg-[#020617]', 
    orb1: 'bg-purple-900/20',
    orb2: 'bg-indigo-900/10',
    overlay: 'opacity-0'
  });

  const isDay = mode === 'DAY' || (mode === 'AUTO' && new Date().getHours() >= 6 && new Date().getHours() < 18);

  useEffect(() => {
    // Smoother, darker, more professional gradients
    
    if (isDay) {
       // Day Mode: Professional Light/Airy
       const baseBg = 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-300 via-sky-100 to-white'; 
       
       switch (view) {
         case ViewState.FITNESS:
            setGradients({ bg: baseBg, orb1: 'bg-orange-400/20', orb2: 'bg-yellow-400/20', overlay: 'opacity-0' });
            break;
         case ViewState.HYGIENE:
            setGradients({ bg: baseBg, orb1: 'bg-cyan-400/20', orb2: 'bg-blue-400/20', overlay: 'opacity-0' });
            break;
         case ViewState.RAMADAN:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-fuchsia-50 to-white', orb1: 'bg-amber-300/30', orb2: 'bg-purple-300/20', overlay: 'opacity-10' });
            break;
         case ViewState.AI_CHAT:
             setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-sky-50', orb1: 'bg-blue-300/20', orb2: 'bg-purple-300/10', overlay: 'opacity-0' });
             break;
         default:
            setGradients({ bg: baseBg, orb1: 'bg-blue-300/20', orb2: 'bg-sky-200/20', overlay: 'opacity-0' });
       }
    } else {
       // Night Mode: Deep, Rich, AMOLED friendly
       const baseBg = 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#020617] via-[#0f172a] to-black';

       switch (view) {
         case ViewState.MDF:
           setGradients({ bg: baseBg, orb1: 'bg-rose-900/20', orb2: 'bg-slate-900/30', overlay: 'opacity-20' });
           break;
         case ViewState.FITNESS:
            setGradients({ bg: baseBg, orb1: 'bg-orange-900/20', orb2: 'bg-red-900/10', overlay: 'opacity-20' });
            break;
         case ViewState.NIGHT:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#020617] to-black', orb1: 'bg-indigo-900/30', orb2: 'bg-slate-800/20', overlay: 'opacity-30' });
            break;
         case ViewState.AI_CHAT:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black', orb1: 'bg-blue-900/20', orb2: 'bg-purple-900/20', overlay: 'opacity-10' });
            break;
         default:
            setGradients({ bg: baseBg, orb1: 'bg-emerald-900/20', orb2: 'bg-teal-900/10', overlay: 'opacity-20' });
       }
    }
  }, [mode, view, isDay]);

  const renderBackgroundElements = () => {
      switch (view) {
          case ViewState.SALAH:
              return <MosqueSilhouette />;
          case ViewState.DHIKR:
              return <><MosqueSilhouette /><FloatingBeads /></>;
          case ViewState.QURAN:
          case ViewState.HADEES:
              return <><MosqueSilhouette /><ArabicLetters /></>;
          case ViewState.MEMORIZE:
              return <SynapseNodes />;
          case ViewState.AI_CHAT:
              return <SynapseNodes />;
          case ViewState.RAMADAN:
              return <MosqueSilhouette />;
          case ViewState.FITNESS:
              return <FireSparks />;
          case ViewState.HYGIENE:
              return <WaterBubbles />;
          case ViewState.NIGHT:
              return <MosqueSilhouette />;
          default:
              return null;
      }
  };

  return (
    <div className={`fixed inset-0 -z-50 transition-all duration-[3000ms] ease-in-out overflow-hidden ${gradients.bg}`}>
      
      {/* Texture Overlay */}
      <div className={`absolute inset-0 bg-noise ${gradients.overlay} pointer-events-none transition-opacity duration-[2000ms]`}></div>

      {/* Moving Fog */}
      <div className="absolute top-0 left-0 w-[200%] h-full opacity-[0.03] pointer-events-none animate-drift-slow" 
           style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), transparent 60%)' }}>
      </div>

      {/* Primary Light Source (Orb 1) */}
      <div className={`absolute top-[-20%] left-[0%] w-[80vw] h-[80vw] rounded-full blur-[150px] animate-breathe ${gradients.orb1} transition-all duration-[4000ms] mix-blend-screen opacity-60`} />
      
      {/* Secondary Light Source (Orb 2) */}
      <div className={`absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] animate-pulse-slow ${gradients.orb2} transition-all duration-[4000ms] mix-blend-screen opacity-50`} />
      
      {/* Contextual Elements */}
      {renderBackgroundElements()}
      
      {/* Subtle Starfield (Only Visible in Dark Modes usually, managed by blend mode) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-plus-lighter">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-pulse-slow" 
               style={{ width: Math.random()*2+'px', height: Math.random()*2+'px', top: Math.random()*100+'%', left: Math.random()*100+'%', animationDelay: Math.random()*5+'s' }} />
        ))}
      </div>
    </div>
  );
};
