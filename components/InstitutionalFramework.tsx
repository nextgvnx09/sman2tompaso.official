
import React from 'react';
import { ShieldCheck, Globe, GraduationCap, Award, Compass, Scale } from 'lucide-react';

const InstitutionalFramework: React.FC = () => {
  const pillars = [
    {
      title: 'Academic Rigor',
      subtitle: 'SUPREMASI INTELEKTUAL',
      desc: 'Standar kurikulum yang diakselerasi untuk memenuhi kompetensi global abad ke-21.',
      icon: <GraduationCap className="h-7 w-7" />,
    },
    {
      title: 'Legacy Integrity',
      subtitle: 'KETEGASAN KARAKTER',
      desc: 'Menanamkan nilai moralitas luhur Minahasa sebagai kompas etika di era digital.',
      icon: <Scale className="h-7 w-7" />,
    },
    {
      title: 'Global Alliance',
      subtitle: 'JEJARING STRATEGIS',
      desc: 'Kemitraan eksklusif dengan perguruan tinggi ternama dan sektor industri inovatif.',
      icon: <Globe className="h-7 w-7" />,
    }
  ];

  return (
    <section className="py-32 lg:py-64 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
        <div className="text-center mb-20 lg:mb-40">
          <div className="inline-flex items-center space-x-3 lg:space-x-4 mb-6 lg:mb-8">
            <div className="h-px w-8 lg:w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-black tracking-[0.5em] lg:tracking-[0.8em] uppercase text-[8px] lg:text-[10px]">Framework</span>
            <div className="h-px w-8 lg:w-12 bg-[#D4AF37]"></div>
          </div>
          <h2 className="text-4xl md:text-[100px] font-black text-white tracking-tighter leading-[1.1] lg:leading-none">
            LENTERA <br /> <span className="text-[#D4AF37] italic font-serif-prestige font-light lowercase">peradaban.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => (
            <div 
              key={i} 
              className="group relative p-10 lg:p-16 rounded-[40px] lg:rounded-[80px] bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-700"
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[30px] bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mb-8 lg:mb-12 shadow-2xl group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all duration-500">
                {pillar.icon}
              </div>

              <span className="text-[#D4AF37] text-[8px] lg:text-[9px] font-black tracking-[0.3em] lg:tracking-[0.4em] uppercase mb-3 lg:mb-4 block opacity-60">
                {pillar.subtitle}
              </span>
              <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 lg:mb-8 tracking-tighter group-hover:translate-x-2 lg:group-hover:translate-x-4 transition-transform duration-500">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-base lg:text-lg font-light leading-relaxed font-serif-prestige italic">
                "{pillar.desc}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstitutionalFramework;
