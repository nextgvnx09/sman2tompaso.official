
import React from 'react';
import { Landmark, Sparkles, Cpu, ArrowUpRight } from 'lucide-react';

const DigitalHeritage: React.FC = () => {
  return (
    <section className="py-24 lg:py-64 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="glow-orb glow-gold w-[500px] h-[500px] -top-32 -left-32"></div>
      
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          <div className="lg:col-span-6 space-y-8 lg:space-y-16 reveal">
            <div className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
              <Landmark className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">Historical Intersection</span>
            </div>
            
            <h2 className="text-[10vw] lg:text-[100px] font-black text-white tracking-tighter leading-[0.9] lg:leading-[0.8]">
              ROOTED IN <br /> 
              <span className="text-[#D4AF37] italic font-serif-prestige font-light lowercase">legacy.</span>
            </h2>
            
            <p className="text-white/40 text-lg lg:text-3xl font-light leading-relaxed font-serif-prestige italic">
              "Dari batu persatuan Pinabetengan menuju arsitektur peradaban digital 2026."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 group hover:border-[#D4AF37]/50 hover:bg-white/[0.02] transition-all cursor-default active:scale-95">
                <Cpu className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black text-xl mb-2">AI Integration</h4>
                <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/60 transition-colors">Kurikulum yang disinkronisasi dengan kebutuhan industri teknologi masa depan.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 group hover:border-[#D4AF37]/50 hover:bg-white/[0.02] transition-all cursor-default active:scale-95">
                <Sparkles className="h-8 w-8 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-black text-xl mb-2">Cultural Pride</h4>
                <p className="text-white/30 text-sm leading-relaxed group-hover:text-white/60 transition-colors">Menjaga nilai Mapalus dalam setiap inovasi yang kami ciptakan.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="relative rounded-[60px] lg:rounded-[100px] overflow-hidden aspect-square lg:aspect-[4/5] shadow-4xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1596402184320-417d7178b2cd?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[3s] group-hover:scale-105" 
                alt="Watu Pinabetengan Heritage" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 lg:p-12 glass-nav-card !bg-white/5 !backdrop-blur-3xl rounded-[40px] border border-white/10 group-hover:border-[#D4AF37]/30 transition-all">
                <p className="text-white font-serif-prestige italic text-xl lg:text-3xl mb-8 leading-relaxed">
                  "Satu-satunya sekolah di Minahasa yang mengintegrasikan sejarah purba dengan kecerdasan buatan."
                </p>
                <button className="flex items-center space-x-3 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] group tap-feedback !bg-transparent !p-0">
                  <span>Explore Roadmap 2026</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DigitalHeritage;
