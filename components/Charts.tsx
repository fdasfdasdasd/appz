

import * as React from 'react';

// Map colors to prevent JIT issues
const CHART_COLORS: Record<string, any> = {
   emerald: { from: '#10b981', to: '#059669', text: '#10b981', bg: 'bg-emerald-500' },
   amber: { from: '#f59e0b', to: '#d97706', text: '#f59e0b', bg: 'bg-amber-500' },
   cyan: { from: '#06b6d4', to: '#0891b2', text: '#06b6d4', bg: 'bg-cyan-500' },
   purple: { from: '#a855f7', to: '#7c3aed', text: '#a855f7', bg: 'bg-purple-500' },
   rose: { from: '#f43f5e', to: '#e11d48', text: '#f43f5e', bg: 'bg-rose-500' },
   orange: { from: '#f97316', to: '#ea580c', text: '#f97316', bg: 'bg-orange-500' },
   pink: { from: '#ec4899', to: '#db2777', text: '#ec4899', bg: 'bg-pink-500' },
   teal: { from: '#14b8a6', to: '#0d9488', text: '#14b8a6', bg: 'bg-teal-500' },
   slate: { from: '#64748b', to: '#475569', text: '#64748b', bg: 'bg-slate-500' },
   blue: { from: '#3b82f6', to: '#2563eb', text: '#3b82f6', bg: 'bg-blue-500' },
};

interface BarChartProps {
  data: number[]; 
  labels: string[];
  maxVal?: number;
  color: string; 
}

export const BarChart: React.FC<BarChartProps> = ({ data, labels, maxVal = 6, color }) => {
  const height = 120;
  const width = 300;
  const barWidth = 18;
  const spacing = data.length > 1 ? (width - (data.length * barWidth)) / (data.length - 1) : 0;
  const theme = CHART_COLORS[color] || CHART_COLORS['emerald'];

  return (
    <div className="w-full h-48 flex items-end justify-center select-none">
      <svg viewBox={`0 0 ${width} ${height + 30}`} className="w-full h-full overflow-visible">
        <defs>
           <linearGradient id={`barGrad-${color}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={theme.from} />
              <stop offset="100%" stopColor={theme.to} />
           </linearGradient>
        </defs>
        {data.map((val, i) => {
          const barH = (val / Math.max(1, maxVal || 6)) * height;
          const x = data.length > 1 ? i * (barWidth + spacing) : width / 2 - barWidth / 2;
          
          return (
            <g key={i} className="group cursor-pointer">
              {/* Bar Background */}
              <rect x={x} y={0} width={barWidth} height={height} rx="6" fill="rgba(255,255,255,0.05)" />
              
              {/* Active Bar */}
              <rect 
                x={x} 
                y={height - barH} 
                width={barWidth} 
                height={barH} 
                rx="6"
                fill={`url(#barGrad-${color})`}
                className="transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100 group-hover:translate-y-[-2px]"
              >
                <animate attributeName="height" from="0" to={barH} dur="0.8s" calcMode="spline" keySplines="0.2 0.8 0.2 1" />
                <animate attributeName="y" from={height} to={height - barH} dur="0.8s" calcMode="spline" keySplines="0.2 0.8 0.2 1" />
              </rect>
              
              {/* Label */}
              <text 
                x={x + barWidth / 2} 
                y={height + 20} 
                textAnchor="middle" 
                fill="currentColor"
                className="text-[9px] font-bold uppercase opacity-40 group-hover:opacity-100 group-hover:fill-white transition-all"
              >
                {labels[i]}
              </text>
              
              {/* Popup Value */}
              <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <rect x={x + barWidth/2 - 12} y={height - barH - 25} width="24" height="18" rx="4" fill="#000" opacity="0.8" />
                  <text 
                    x={x + barWidth / 2} 
                    y={height - barH - 13} 
                    textAnchor="middle" 
                    fill="#fff" 
                    className="text-[10px] font-bold"
                  >
                    {val}
                  </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

interface HeatmapProps {
  history: any[];
  current: any;
}

export const ActivityHeatmap: React.FC<HeatmapProps> = ({ history, current }) => {
  // 30 Days visualization as vertical bars
  const days = 30;
  const today = new Date();
  
  const allData = [...(history || [])];
  if (!allData.find(d => d.date === current.date)) {
      allData.push(current);
  }

  const scoreMap = new Map();
  allData.forEach(day => {
      scoreMap.set(day.date, day.imanScore || 0);
  });

  const cells = [];
  for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const score = scoreMap.get(dateStr) || 0;
      cells.push({ date: dateStr, score, index: i });
  }

  return (
    <div className="w-full h-32 flex items-end justify-between gap-1 overflow-hidden">
        {cells.map((cell, i) => {
            const heightPercent = Math.max(10, cell.score); // Minimum height 10%
            return (
                <div 
                    key={i} 
                    className="relative group flex-1"
                >
                    {/* Bar */}
                    <div 
                        className={`w-full rounded-t-sm transition-all duration-700 ease-out ${
                           cell.score > 80 ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 
                           cell.score > 50 ? 'bg-emerald-500/80' : 
                           cell.score > 20 ? 'bg-emerald-500/40' : 'bg-white/10'
                        }`}
                        style={{ height: `${heightPercent}%`, animationDelay: `${i * 0.03}s` }}
                    ></div>
                    
                    {/* Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black/90 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none border border-white/10">
                        {cell.date.slice(5)}: {Math.round(cell.score)}%
                    </div>
                </div>
            )
        })}
    </div>
  );
};
