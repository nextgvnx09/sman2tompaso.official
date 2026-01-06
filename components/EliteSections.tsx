
import React, { useState } from 'react';
import { Cpu, Globe2, Zap, ArrowRight, Target, BookOpen } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Uni Placement', value: '94%', sub: 'Global Ranking' },
    { label: 'Digi-Literacy', value: '100%', sub: 'Certified' },
    { label: 'E-Library', value: '8K+', sub: 'Digital Assets' },
    { label: 'Fiber Speed', value: 'Gbps', sub: 'Low Latency' },
  ];

  return (
    <div className="py-20 lg:py-40 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-32">
          {stats.map((s, i) => (
            <div key={i} className="group cursor-default relative reveal">
              <p className="text-4xl md:text-[100px] lg:text-[140px] font-black text-[#05070B] tracking-tighter leading-none transition-all duration-1000 group-hover:text-[#D4AF37]">
                {s.value}
              </p>
              <div className="h-px lg:h-1 w-8 lg:w-20 bg-[#D4AF37] my-4 lg:my-8 transition-all duration-1000 group-hover:w-full"></div>
              <p className="text-[#05070B] font-black text-[8px] lg:text-[11px] uppercase tracking-[0.4em] mb-1">{s.label}</p>
              <p className="text-gray-300 text-[7px] lg:text-[10px] font-bold uppercase tracking-widest italic">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CareerPathExplorer: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const paths = [
    { id: 'it', name: 'Cyber Architecture', icon: <Cpu className="h-6 w-6" />, career: 'AI Engineer', skill: 'Quantum Data Analysis', desc: 'Membangun ekosistem masa depan melalui arsitektur kode.' },
    { id: 'science', name: 'Bio-Intelligence', icon: <Zap className="h-6 w-6" />, career: 'Biotech Researcher', skill: 'Genetics Engineering', desc: 'Menjelajahi batas-batas kehidupan melalui riset bioteknologi.' },
    { id: 'lang', name: 'Global Diplomacy', icon: <Globe2 className="h-6 w-6" />, career: 'Ambassador', skill: 'Multilingual Mastery', desc: 'Menghubungkan peradaban di panggung diplomasi internasional.' }
  ];

  return (
    <div className="py-24 lg:py-64 bg-[#05070B] relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-48 items-center">
          <div className="reveal">
            <div className="inline-flex items-center space-x-3 lg:space-x-6 bg-white/5 px-6 py-2 rounded-full mb-8 border border-white/10">
              <Target className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">Quantum Career</span>
            </div>
            <h2 className="text-[10vw] md:text-8xl lg:text-[100px] font-black text-white tracking-tighter leading-[0.9] lg:leading-[0.8] mb-12">
              DESIGN <br /> <span className="text-white/20 italic font-serif-prestige font-light lowercase">your destiny.</span>
            </h2>
            <div className="space-y-4">
              {paths.map(p => (
                <button 
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`w-full p-6 lg:p-8 rounded-[30px] lg:rounded-[50px] border transition-all duration-700 flex items-center justify-between group ${
                    selected === p.id ? 'bg-[#D4AF37] border-[#D4AF37] text-[#05070B]' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4 lg:space-x-10">
                    <div className={`p-4 rounded-[20px] transition-all duration-700 ${selected === p.id ? 'bg-black/10' : 'bg-white/5'}`}>{p.icon}</div>
                    <div className="text-left">
                      <p className="font-black text-xs lg:text-base uppercase tracking-widest">{p.name}</p>
                    </div>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-all duration-700 ${selected === p.id ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className={`relative min-h-[350px] lg:min-h-[600px] flex items-center justify-center transition-all duration-[1s] ${selected ? 'opacity-100 scale-100 reveal active' : 'opacity-10 scale-95 blur-xl'}`}>
            <div className="bg-white/5 backdrop-blur-3xl w-full rounded-[40px] lg:rounded-[80px] p-8 lg:p-20 relative z-10 border border-white/10 shadow-3xl">
              {selected ? (
                <div className="space-y-6 lg:space-y-16">
                  <span className="text-[#D4AF37] text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Analysis</span>
                  <h3 className="text-3xl md:text-8xl font-black text-white mb-6 leading-[0.9]">
                    THE <br /> <span className="text-[#D4AF37] italic font-serif-prestige font-light">{paths.find(p => p.id === selected)?.career}</span>
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-white/20 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] mb-2">Competency</p>
                      <p className="text-white text-lg lg:text-3xl font-light font-serif-prestige italic">{paths.find(p => p.id === selected)?.skill}</p>
                    </div>
                    <p className="text-white/40 text-sm lg:text-xl font-light italic leading-relaxed font-serif-prestige max-w-lg">"{paths.find(p => p.id === selected)?.desc}"</p>
                    <button className="w-full lg:w-auto bg-white text-[#05070B] px-8 py-4 lg:px-16 lg:py-8 rounded-full font-black text-[9px] lg:text-[11px] uppercase tracking-[0.4em] hover:bg-[#D4AF37] transition-all">Download Syllabus</button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <BookOpen className="h-10 w-10 lg:h-20 lg:w-20 mx-auto mb-6 text-white/5" />
                  <p className="text-xs lg:text-xl font-serif-prestige italic text-white/10 uppercase tracking-widest">Select career roadmap...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
