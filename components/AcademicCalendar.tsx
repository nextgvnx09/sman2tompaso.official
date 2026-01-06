
import React from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

const AcademicCalendar: React.FC = () => {
  const events = [
    { date: '15 Jan', name: 'Simulasi UNBK 2026', type: 'AKADEMIK', color: 'bg-blue-500' },
    { date: '20 Jan', name: 'Open House & PPDB Expo', type: 'EVENT', color: 'bg-[#F3C623]' },
    { date: '05 Feb', name: 'Porseni Tompaso Hub', type: 'LOMBA', color: 'bg-red-500' },
    { date: '12 Feb', name: 'Wisuda Angkatan 2025', type: 'MOMENT', color: 'bg-purple-500' },
  ];

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">School Schedule 2026</span>
            <h1 className="text-6xl md:text-[100px] font-black text-[#0A0F1E] tracking-tighter leading-none">
              Kalender <br /> <span className="text-gray-200">Akademik.</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-[32px] border border-gray-100">
             <button className="p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform"><ChevronLeft className="h-5 w-5" /></button>
             <div className="px-6">
               <p className="text-lg font-black uppercase tracking-widest">Januari 2026</p>
             </div>
             <button className="p-3 bg-white rounded-xl shadow-sm hover:scale-110 transition-transform"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Calendar View (Mock) */}
          <div className="lg:col-span-8 bg-[#F8F9FB] rounded-[60px] p-10 border border-gray-50">
             <div className="grid grid-cols-7 gap-4 mb-8">
               {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
                 <div key={day} className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{day}</div>
               ))}
             </div>
             <div className="grid grid-cols-7 gap-4">
               {Array.from({ length: 31 }).map((_, i) => (
                 <div key={i} className={`aspect-square flex items-center justify-center rounded-[24px] text-sm font-bold transition-all cursor-pointer ${
                   i === 14 || i === 19 ? 'bg-[#0A0F1E] text-white shadow-xl' : 'bg-white text-gray-300 hover:bg-[#F3C623] hover:text-[#0A0F1E]'
                 }`}>
                   {i + 1}
                 </div>
               ))}
             </div>
          </div>

          {/* Event Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-2xl font-black text-[#0A0F1E] tracking-tight mb-8 uppercase italic">Agenda Terdekat</h3>
            {events.map((ev, i) => (
              <div key={i} className="group flex items-start space-x-6 p-8 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl hover:border-[#F3C623]/30 transition-all cursor-default">
                <div className={`w-16 h-16 shrink-0 rounded-2xl ${ev.color} flex flex-col items-center justify-center text-white shadow-lg`}>
                  <span className="text-xs font-black uppercase">{ev.date.split(' ')[1]}</span>
                  <span className="text-xl font-black">{ev.date.split(' ')[0]}</span>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag className="h-3 w-3 text-[#F3C623]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#F3C623]">{ev.type}</span>
                  </div>
                  <h4 className="text-lg font-black text-[#0A0F1E] leading-tight mb-2 group-hover:text-[#F3C623] transition-colors">{ev.name}</h4>
                  <p className="text-gray-400 text-[10px] font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-2" /> 08:00 - Selesai
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
