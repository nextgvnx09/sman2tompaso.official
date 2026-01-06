
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Calendar, MapPin, Activity, Clock } from 'lucide-react';

interface ScheduleItem {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // "HH:mm - HH:mm"
  location: string;
  category: 'CORE ACADEMIC' | 'OPERATIONAL' | 'STRATEGIC' | 'SOCIAL';
  description: string;
}

const INITIAL_SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-01',
    title: 'Apel Perdana Semester Genap 2026',
    date: '2026-01-07',
    time: '07:15 - 08:00',
    location: 'Sovereign Square',
    category: 'OPERATIONAL',
    description: 'Pembukaan resmi tahun ajaran baru dan pengarahan Vision 2026 oleh Kepala Sekolah.'
  },
  {
    id: 'sch-02',
    title: 'Sinkronisasi Digital & LMS Check',
    date: '2026-01-07',
    time: '08:30 - 10:00',
    location: 'Intel Hub / Lab Komputer',
    category: 'CORE ACADEMIC',
    description: 'Aktivasi akun belajar siswa dan pengecekan konektivitas sistem cloud sekolah.'
  },
  {
    id: 'sch-03',
    title: 'Masa Orientasi Akademik Terpadu',
    date: '2026-01-07',
    time: '10:30 - 12:30',
    location: 'Visionary Hall',
    category: 'CORE ACADEMIC',
    description: 'Pendalaman kurikulum baru dan pengenalan metode pembelajaran berbasis AI.'
  },
  {
    id: 'sch-04',
    title: 'Briefing Ekskul & Pengembangan Bakat',
    date: '2026-01-07',
    time: '13:30 - 15:00',
    location: 'Social Space',
    category: 'SOCIAL',
    description: 'Pemaparan program kerja ekstrakurikuler untuk semester genap.'
  }
];

const SchoolSchedule: React.FC = () => {
  const [activeSchedule, setActiveSchedule] = useState<ScheduleItem[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateSchedule = () => {
      const now = new Date();
      setCurrentTime(now);

      // Logika Real-time: Hanya tampilkan agenda yang waktu selesainya belum lewat
      const filtered = INITIAL_SCHEDULE.filter(item => {
        const [_, endTimeStr] = item.time.split(' - ');
        const [endH, endM] = endTimeStr.split(':').map(Number);
        
        const eventEnd = new Date(item.date);
        eventEnd.setHours(endH, endM, 0, 0);

        return now < eventEnd;
      });

      setActiveSchedule(filtered);
    };

    updateSchedule();
    const interval = setInterval(updateSchedule, 10000); // Update setiap 10 detik
    return () => clearInterval(interval);
  }, []);

  const isOngoing = (item: ScheduleItem) => {
    const [startTimeStr, endTimeStr] = item.time.split(' - ');
    const [startH, startM] = startTimeStr.split(':').map(Number);
    const [endH, endM] = endTimeStr.split(':').map(Number);
    
    const start = new Date(item.date);
    start.setHours(startH, startM, 0, 0);
    const end = new Date(item.date);
    end.setHours(endH, endM, 0, 0);

    return currentTime >= start && currentTime <= end;
  };

  return (
    <section className="py-24 lg:py-48 bg-[#F8F9FB] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-24">
        
        {/* Header Control */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-32 gap-10">
          <div className="max-w-4xl reveal">
            <div className="inline-flex items-center space-x-3 bg-primary px-6 py-2 rounded-full mb-8 border border-white/10">
              <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-white font-black tracking-[0.5em] uppercase text-[9px]">Sovereign Control Center</span>
            </div>
            <h2 className="text-[10vw] lg:text-[120px] font-black text-primary tracking-tighter leading-[0.8] mb-8">
              DAILY <br /> <span className="text-[#D4AF37] italic font-serif-prestige font-light lowercase">ops.</span>
            </h2>
            <p className="text-gray-400 text-lg lg:text-2xl font-light italic font-serif-prestige">
              Agenda operasional sekolah yang diperbarui secara real-time berdasarkan sistem pusat.
            </p>
          </div>
          
          <div className="bg-primary p-10 lg:p-14 rounded-[50px] lg:rounded-[70px] text-white shadow-3xl min-w-[320px] border border-white/5 reveal relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl -mr-12 -mt-12"></div>
             <p className="text-6xl lg:text-8xl font-black mb-2 tracking-tighter font-mono-intel relative z-10">
               {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
             </p>
             <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] border-t border-white/10 pt-5 mt-5 flex items-center">
               <Calendar className="h-3 w-3 mr-3" />
               Rabu, 07 Januari 2026
             </p>
          </div>
        </div>

        {/* Schedule List */}
        <div className="grid grid-cols-1 gap-6 lg:gap-10">
          {activeSchedule.length > 0 ? (
            activeSchedule.map((item, i) => {
              const ongoing = isOngoing(item);
              return (
                <div 
                  key={item.id} 
                  className={`group p-8 lg:p-16 rounded-[40px] lg:rounded-[100px] border transition-all duration-700 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 reveal ${
                    ongoing 
                    ? 'bg-primary border-[#D4AF37] text-white shadow-2xl scale-[1.02] z-20' 
                    : 'bg-white border-gray-100 text-primary hover:border-[#D4AF37]/30'
                  }`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={`shrink-0 text-center lg:text-right lg:border-r lg:pr-16 w-full lg:w-auto ${ongoing ? 'border-white/10' : 'border-gray-100'}`}>
                     <p className="text-5xl lg:text-8xl font-black tracking-tighter mb-1 font-mono-intel">{item.time.split(' - ')[0]}</p>
                     <div className="flex items-center justify-center lg:justify-end space-x-2">
                       {ongoing && <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping"></div>}
                       <p className={`text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em] ${ongoing ? 'text-[#D4AF37]' : 'text-gray-300'}`}>
                         {ongoing ? 'IN PROGRESS' : item.category}
                       </p>
                     </div>
                  </div>
                  
                  <div className="flex-grow space-y-4 text-center lg:text-left">
                     <h4 className="text-2xl lg:text-5xl font-black tracking-tighter leading-tight">
                       {item.title}
                     </h4>
                     <p className={`text-base lg:text-2xl font-light leading-relaxed italic font-serif-prestige ${ongoing ? 'text-white/60' : 'text-gray-400'}`}>
                       "{item.description}"
                     </p>
                  </div>

                  <div className={`shrink-0 flex items-center space-x-4 px-10 py-5 rounded-full transition-all border ${
                    ongoing ? 'bg-white/5 border-white/10 text-[#D4AF37]' : 'bg-gray-50 border-gray-100 text-gray-400'
                  }`}>
                     <MapPin className="h-4 w-4" />
                     <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.5em]">{item.location}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-32 text-center bg-white rounded-[100px] border border-dashed border-gray-200 reveal">
              <Activity className="h-12 w-12 text-gray-200 mx-auto mb-6" />
              <p className="text-gray-300 font-serif-prestige italic text-2xl">Operasional hari ini telah selesai.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default SchoolSchedule;
