
import React, { useState, useEffect } from 'react';
import { Timer, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

const LiveTicker: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [currentEvent, setCurrentEvent] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      const currentH = now.getHours();
      const currentM = now.getMinutes();
      const nowTotal = currentH * 60 + currentM;

      // Data yang disinkronkan dengan SchoolSchedule.tsx
      const events = [
        { name: 'Inisiasi Akademik 2026', start: 7*60+15, end: 8*60+30 },
        { name: 'Sinkronisasi LMS Cloud', start: 9*60, end: 11*60+30 },
        { name: 'Briefing Strategis Komite', start: 13*60, end: 15*60+30 }
      ];

      const active = events.find(e => nowTotal >= e.start && nowTotal <= e.end);
      const next = events.find(e => e.start > nowTotal);

      if (active) {
        setCurrentEvent(active.name);
        setIsLive(true);
      } else if (next) {
        setCurrentEvent(`Next Operation: ${next.name}`);
        setIsLive(false);
      } else {
        setCurrentEvent(null);
      }
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 10000); // Cek setiap 10 detik
    return () => clearInterval(interval);
  }, []);

  if (!currentEvent) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[500] w-[92%] lg:w-auto reveal active">
      <div className={`glass-nav-card p-3 rounded-[30px] border shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex items-center space-x-5 lg:space-x-10 ${isLive ? 'border-[#D4AF37]/40 bg-[#0A0F1E]/95' : 'border-white/10 bg-[#0A0F1E]/80'}`}>
        <div className={`shrink-0 w-14 h-14 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center transition-all duration-1000 ${isLive ? 'bg-[#D4AF37] text-[#0A0F1E] status-live' : 'bg-white/5 text-white'}`}>
          {isLive ? <Activity className="h-7 w-7 lg:h-9 lg:w-9" /> : <Timer className="h-7 w-7" />}
        </div>
        
        <div className="pr-6 lg:pr-12">
          <div className="flex items-center space-x-3 mb-1">
             <ShieldCheck className={`h-3 w-3 ${isLive ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
             <p className={`text-[8px] lg:text-[10px] font-black uppercase tracking-[0.5em] ${isLive ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
               {isLive ? 'System Status: Operational' : 'Upcoming Operation'}
             </p>
          </div>
          <p className="text-white font-black text-xs lg:text-xl tracking-tighter truncate max-w-[180px] lg:max-w-md uppercase font-mono-intel">
            {currentEvent}
          </p>
        </div>

        <button 
          onClick={onExplore}
          className="bg-white text-[#0A0F1E] p-4 lg:px-10 lg:py-6 rounded-2xl flex items-center space-x-4 hover:bg-[#D4AF37] transition-all active:scale-95 group shadow-2xl"
        >
          <span className="hidden lg:inline text-[10px] font-black uppercase tracking-[0.5em]">Explore Intelligence</span>
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default LiveTicker;
