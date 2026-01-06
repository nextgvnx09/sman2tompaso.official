
import React from 'react';
import { Brain, Zap, Heart, Sparkles } from 'lucide-react';

const MottoDeepDive: React.FC = () => {
  const pillars = [
    {
      title: 'CERDAS',
      desc: 'Pengembangan kapasitas intelektual melalui literasi digital yang tajam dan analitis.',
      icon: <Brain className="h-8 w-8" />,
      tag: 'INTELLECT',
      color: 'glow-gold'
    },
    {
      title: 'TERAMPIL',
      desc: 'Aksi nyata dalam penguasaan kompetensi praktis untuk menjawab tantangan global.',
      icon: <Zap className="h-8 w-8" />,
      tag: 'MASTERY',
      color: 'glow-navy'
    },
    {
      title: 'BERMARTABAT',
      desc: 'Integritas moral dan etika luhur sebagai fondasi utama setiap langkah peradaban.',
      icon: <Heart className="h-8 w-8" />,
      tag: 'ETHICS',
      color: 'glow-gold'
    }
  ];

  return (
    <section className="py-24 lg:py-64 bg-white relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-48 gap-8 lg:gap-12">
          <div className="reveal">
            <div className="flex items-center space-x-3 lg:space-x-6 mb-6 lg:mb-10">
              <div className="h-[1px] w-10 lg:w-20 bg-[#D4AF37]"></div>
              <span className="text-[8px] lg:text-[11px] font-black tracking-[0.4em] lg:tracking-[0.6em] uppercase text-[#D4AF37]">Philosophical Pillars</span>
            </div>
            <h2 className="text-[10vw] md:text-7xl lg:text-[120px] font-black text-[#0A0F1E] tracking-tighter leading-[0.9] lg:leading-[0.8]">
              THE SOVEREIGN <br /> <span className="font-serif-prestige italic font-light text-gray-200">identity.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base lg:text-2xl font-light italic leading-relaxed max-w-sm reveal">
            "Membangun harmoni antara kecanggihan akal dan kemurnian hati."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 reveal">
          {pillars.map((p, i) => (
            <div key={i} className="group relative p-8 lg:p-16 rounded-[40px] lg:rounded-[70px] bg-gray-50 border border-gray-100 hover:bg-white transition-all duration-700 overflow-hidden hover:shadow-2xl">
              <div className="mb-8 lg:mb-16 flex items-center justify-between">
                <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-[#0A0F1E] flex items-center justify-center text-[#D4AF37] shadow-xl">
                  {p.icon}
                </div>
                <div className="flex items-center space-x-2 text-[8px] lg:text-[10px] font-black text-[#D4AF37] tracking-[0.3em] lg:tracking-[0.4em]">
                   <Sparkles className="h-3 w-3" />
                   <span>{p.tag}</span>
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-5xl font-black text-[#0A0F1E] mb-4 lg:mb-8 tracking-tighter">{p.title}</h3>
              <p className="text-gray-400 text-sm lg:text-xl font-light leading-relaxed mb-6 lg:mb-16 italic">
                "{p.desc}"
              </p>
              
              <div className="h-0.5 lg:h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MottoDeepDive;
