
import React from 'react';
import { ArrowUpRight, Play, Trophy, Sparkles } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-white pt-28 lg:pt-0">
      {/* Background Decor - Refined */}
      <div className="glow-orb glow-gold w-[350px] h-[350px] lg:w-[900px] lg:h-[900px] -top-20 -right-20 opacity-25 lg:opacity-15"></div>
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-12 reveal order-2 lg:order-1">
            <div className="flex items-center space-x-4 lg:space-x-8">
              <div className="h-[1px] w-12 lg:w-24 bg-[#D4AF37]"></div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-[#D4AF37] animate-pulse" />
                <span className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.5em] lg:tracking-[0.8em] text-[#D4AF37]">
                  Elite Academic Hub
                </span>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-[13vw] lg:text-[140px] font-black text-[#0A0F1E] leading-[0.85] tracking-tighter text-balance">
                THE PEAK <br /> 
                <span className="font-serif-prestige italic font-light text-[#D4AF37] lowercase tracking-normal">performance.</span>
              </h1>
            </div>

            <div className="max-w-2xl relative">
               <div className="absolute -left-6 lg:-left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#D4AF37] to-transparent opacity-40"></div>
               <p className="text-gray-400 text-lg lg:text-3xl font-light leading-relaxed pl-2 lg:pl-0 text-balance font-serif-prestige">
                Membentuk ekosistem di mana <span className="text-primary font-bold not-italic">kecerdasan digital</span> berpadu dengan kemurnian martabat di jantung Minahasa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 lg:gap-10 pt-4">
              <button className="group relative bg-primary px-10 py-6 lg:px-16 lg:py-8 rounded-2xl lg:rounded-[40px] text-white tap-feedback overflow-hidden shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <div className="flex items-center justify-center space-x-4 lg:space-x-8 relative z-10 transition-colors group-hover:text-primary">
                  <span className="text-[10px] lg:text-[12px] font-black uppercase tracking-[0.4em]">Explore Curricula</span>
                  <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5" />
                </div>
              </button>

              <button className="flex items-center justify-center space-x-5 lg:space-x-8 px-4 py-2 group tap-feedback">
                 <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#F8F9FB] rounded-full flex items-center justify-center text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <Play className="h-3 w-3 lg:h-4 lg:w-4 fill-current ml-1" />
                 </div>
                 <div className="text-left">
                   <p className="text-[9px] lg:text-[11px] font-black uppercase tracking-[0.3em] text-primary">Video Profil</p>
                   <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] text-gray-300">Sovereign Identity</p>
                 </div>
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative reveal order-1 lg:order-2" style={{ transitionDelay: '0.4s' }}>
            <div className="relative z-20 group max-w-[480px] mx-auto lg:max-w-none">
              
              {/* Main Frame */}
              <div className="relative z-10 rounded-[50px] lg:rounded-[110px] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.1)] border-[8px] lg:border-[18px] border-white aspect-[4/5] bg-gray-50 transform lg:rotate-2 group-hover:rotate-0 transition-all duration-1000">
                <img 
                  src={SCHOOL_ASSETS.HERO_BUILDING} 
                  alt="SMAN 2 Tompaso Building" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
              
              {/* Achievement Floating Card - Fixed Overlap Bug */}
              <div className="absolute -bottom-10 -right-4 lg:-bottom-16 lg:-left-24 glass-nav-card !bg-white/95 p-8 lg:p-14 rounded-[40px] lg:rounded-[70px] shadow-[0_40px_80px_rgba(0,0,0,0.12)] z-30 min-w-[200px] lg:min-w-[420px] hover:translate-y-[-10px] transition-all duration-700 border border-gray-100">
                 <div className="flex items-center justify-between mb-6 lg:mb-12">
                   <div className="p-3 lg:p-6 bg-primary rounded-2xl lg:rounded-[32px] group-hover:bg-[#D4AF37] transition-colors duration-500 shadow-xl shadow-primary/10">
                      <Trophy className="h-4 w-4 lg:h-10 lg:w-10 text-[#D4AF37] group-hover:text-primary transition-colors" />
                   </div>
                   <div className="text-right">
                     <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-primary/20 block mb-1">Capaian</span>
                     <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1.5 rounded-full">Visionary 2026</span>
                   </div>
                 </div>
                 
                 <div className="space-y-0 lg:space-y-2">
                   <p className="text-4xl lg:text-8xl font-black text-primary tracking-tighter leading-none">
                     150<span className="text-[#D4AF37]">+</span>
                   </p>
                   <p className="text-[9px] lg:text-[13px] text-primary/40 font-black uppercase tracking-[0.5em] lg:tracking-[0.7em]">
                     Honors <span className="text-[#D4AF37]">Awarded</span>
                   </p>
                 </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 lg:w-48 lg:h-48 border border-gray-100 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
