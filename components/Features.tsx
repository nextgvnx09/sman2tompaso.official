
import React from 'react';
import { ShieldCheck, Users2, BrainCircuit, Rocket, ChevronRight, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const highlights = [
    {
      title: 'Digital First',
      desc: 'Kurikulum yang terintegrasi dengan teknologi AI dan cloud computing masa depan.',
      icon: <BrainCircuit className="h-7 w-7" />,
      tag: 'TECH'
    },
    {
      title: 'Global Talent',
      desc: 'Pengembangan minat bakat dengan standar kompetensi nasional dan internasional.',
      icon: <Rocket className="h-7 w-7" />,
      tag: 'LEAD'
    },
    {
      title: 'Ethic & Integrity',
      desc: 'Membentuk karakter yang kuat berlandaskan moral dan etika Minahasa.',
      icon: <ShieldCheck className="h-7 w-7" />,
      tag: 'MORAL'
    },
    {
      title: 'Connective',
      desc: 'Jaringan alumni dan kemitraan strategis dengan perguruan tinggi ternama.',
      icon: <Users2 className="h-7 w-7" />,
      tag: 'NET'
    },
  ];

  return (
    <section className="py-48 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="features-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#features-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-32">
          <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Our Methodology</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h3 className="text-6xl md:text-[90px] font-black text-[#0A0F1E] leading-[0.85] tracking-tighter">
              Akselerasi <br /> <span className="text-gray-200 italic font-serif font-light">Kecerdasan.</span>
            </h3>
            <div className="max-w-sm">
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Metode pendidikan kami dirancang untuk mengimbangi kecepatan inovasi global tanpa meninggalkan kearifan lokal Tompaso.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-12 bg-white rounded-[60px] border border-gray-100 hover:border-[#F3C623]/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-14 w-20 h-20 bg-gray-50 rounded-[32px] flex items-center justify-center text-[#F3C623] group-hover:bg-[#0A0F1E] group-hover:text-white transition-all duration-700 transform group-hover:rotate-[15deg] shadow-sm">
                  {item.icon}
                </div>
                
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-[8px] font-black text-[#F3C623] uppercase tracking-[0.3em]">{item.tag}</span>
                  <div className="h-px flex-grow bg-gray-50"></div>
                </div>

                <h4 className="text-3xl font-black text-[#0A0F1E] mb-6 tracking-tighter group-hover:text-[#F3C623] transition-colors">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light text-sm mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                
                <button className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-[#0A0F1E] transition-all">
                  <span>Explore Path</span>
                  <ChevronRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Decorative Background Number */}
              <div className="absolute -bottom-6 -right-6 text-[140px] font-black text-gray-50 group-hover:text-[#F3C623]/5 transition-colors select-none pointer-events-none leading-none">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
