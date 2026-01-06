
import React from 'react';
import { Monitor, Leaf, Globe, Sparkles, ArrowRight } from 'lucide-react';

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="py-40 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F3C623]/5 rounded-full blur-[200px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Visionary Roadmap</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Program <br /> <span className="text-white/20 italic font-serif">Akselerasi.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed">
            Menghadirkan standar pendidikan internasional melalui inisiatif strategis yang terukur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
          {/* Main Feature */}
          <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-[60px] p-16 hover:bg-white/10 transition-all group overflow-hidden relative">
            <Monitor className="text-[#F3C623] h-14 w-14 mb-10" />
            <h3 className="text-4xl font-black text-white mb-6">Digital Learning Transformation</h3>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-xl mb-10">
              Implementasi kurikulum berbasis Cloud Computing dan AI untuk mempersiapkan siswa menghadapi revolusi industri 5.0.
            </p>
            <button className="flex items-center space-x-4 text-[#F3C623] font-black text-xs uppercase tracking-widest group-hover:translate-x-4 transition-transform">
              <span>Selengkapnya</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F3C623]/10 rounded-full blur-3xl group-hover:bg-[#F3C623]/20 transition-all"></div>
          </div>

          {/* Secondary Features */}
          <div className="md:col-span-4 bg-[#F3C623] rounded-[60px] p-12 text-[#0A0F1E] group">
            <Leaf className="h-10 w-10 mb-10" />
            <h3 className="text-2xl font-black mb-4">Eco-Green Hub</h3>
            <p className="text-[#0A0F1E]/60 text-sm font-medium leading-relaxed">Pusat edukasi lingkungan dan keberlanjutan berbasis kearifan lokal Tompaso.</p>
          </div>

          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-[60px] p-12 hover:bg-white/10 transition-all text-white">
            <Globe className="h-10 w-10 mb-10 text-[#F3C623]" />
            <h3 className="text-2xl font-black mb-4">Global English Zone</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">Program intensif penguasaan bahasa internasional untuk mobilitas global siswa.</p>
          </div>

          <div className="md:col-span-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[60px] p-12 text-white flex items-center justify-between group overflow-hidden">
             <div className="max-w-md relative z-10">
                <Sparkles className="h-10 w-10 mb-8 text-blue-200" />
                <h3 className="text-3xl font-black mb-4">Olimpiade & Prestasi Center</h3>
                <p className="text-white/60 text-sm leading-relaxed">Wadah pembinaan intensif bagi talenta unggul di bidang sains, seni, dan olahraga.</p>
             </div>
             <div className="hidden lg:block transform translate-x-10 group-hover:translate-x-0 transition-transform duration-1000">
                <div className="w-32 h-32 border-8 border-white/10 rounded-full flex items-center justify-center">
                   <div className="w-20 h-20 border-4 border-white/20 rounded-full"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
