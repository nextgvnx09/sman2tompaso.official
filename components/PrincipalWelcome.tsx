
import React from 'react';
import { ArrowUpRight, Minus, Quote } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const PrincipalWelcome: React.FC = () => {
  return (
    <section className="py-40 lg:py-64 bg-white relative overflow-hidden">
      {/* Background Context Photo */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img src={SCHOOL_ASSETS.HERO_BUILDING} className="w-full h-full object-cover grayscale" alt="" />
      </div>

      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.012]">
        <h2 className="text-[35vw] font-black text-[#05070B] leading-none text-right -mr-40 mt-40">AKAY.</h2>
      </div>

      <div className="sovereign-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-7 space-y-16 order-2 lg:order-1 reveal">
            <div className="flex items-center space-x-8">
              <Minus className="text-[#F3C623] w-16" />
              <span className="text-[#05070B] text-[10px] font-black uppercase tracking-[0.5em]">The Leadership Philosophy</span>
            </div>

            <h2 className="h-supreme text-7xl md:text-[120px] text-[#05070B] font-black leading-[0.75] tracking-tighter">
              BEYOND <br />
              <span className="text-gray-100 italic font-manifesto font-light lowercase text-[10vw]">the ordinary.</span>
            </h2>

            <div className="max-w-4xl space-y-12">
              <p className="text-4xl md:text-5xl font-manifesto text-gray-400 leading-[1.1] italic">
                "Pendidikan bukan tentang mengisi wadah yang kosong, tapi menyalakan api rasa ingin tahu yang abadi."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Sebagai pemimpin di tanah bersejarah Watu Pinabetengan, kami memiliki tugas suci untuk menjaga tradisi sambil memimpin revolusi digital di Sulawesi Utara.
                </p>
                <p>
                  Visi kami adalah menciptakan ekosistem pendidikan di mana integritas moral dan supremasi intelektual berjalan beriringan menuju masa depan yang cerah.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-12 pt-10">
              <div className="flex flex-col">
                <span className="text-[#05070B] font-black text-3xl md:text-4xl tracking-tighter uppercase">Junus N M Akay, S.Pd, M.Si</span>
                <span className="text-[#F3C623] text-[10px] font-black uppercase tracking-[0.6em] mt-3">Principal & Chief Architect</span>
              </div>
              <div className="group flex items-center justify-center w-20 h-20 rounded-full border border-[#05070B]/10 hover:bg-[#05070B] hover:text-white transition-all duration-700 cursor-pointer">
                <ArrowUpRight className="h-7 w-7" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full reveal">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#F3C623] rounded-[80px] translate-x-8 translate-y-8 -z-10 opacity-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
              <div className="aspect-[3/4] rounded-[80px] overflow-hidden shadow-2xl bg-[#05070B] relative">
                <img 
                  src={SCHOOL_ASSETS.PRINCIPAL_PHOTO} 
                  alt="Junus N M Akay, S.Pd, M.Si" 
                  className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-105 object-top"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#05070B] text-white p-12 rounded-[50px] shadow-3xl z-20 hidden md:block border border-white/5">
                <Quote className="h-8 w-8 text-[#F3C623] mb-4 opacity-30" />
                <p className="text-[9px] font-black uppercase tracking-[0.5em] text-[#F3C623]">Established Virtue</p>
                <p className="text-2xl font-black mt-2 uppercase tracking-tighter">Sovereign Lead</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalWelcome;
