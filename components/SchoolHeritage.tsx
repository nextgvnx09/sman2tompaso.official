
import React from 'react';
import { Landmark, Compass, History, Camera, ArrowRight, Heart, Sparkles } from 'lucide-react';

const SchoolHeritage: React.FC = () => {
  const stories = [
    { 
      title: 'Watu Pinabetengan', 
      desc: 'Situs megalitikum tempat sembilan sub-etnis Minahasa membagi wilayah dan bersumpah menjaga persatuan.', 
      icon: <Landmark /> 
    },
    { 
      title: 'Filosofi Mapalus', 
      desc: 'Semangat gotong royong masyarakat Tompaso yang kami implementasikan dalam kolaborasi belajar siswa.', 
      icon: <Heart /> 
    },
    { 
      title: 'Tompaso Heritage', 
      desc: 'Mengenal tradisi berkuda dan kearifan lokal pertanian yang menjadikan Tompaso unik di Sulawesi Utara.', 
      icon: <Compass /> 
    },
  ];

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 lg:order-1">
            <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Local Wisdom & Identity</span>
            <h1 className="text-6xl md:text-[110px] font-black text-[#0A0F1E] tracking-tighter leading-[0.85] mb-10">
              Akar & <br /> <span className="text-gray-200 italic font-serif font-light">Peradaban.</span>
            </h1>
            <p className="text-gray-500 text-xl font-light leading-relaxed mb-12 max-w-lg">
              SMAN 2 Tompaso tidak hanya mencetak teknokrat, tapi juga penjaga budaya. Terletak di jantung sejarah Minahasa, kami bangga menjadi bagian dari pelestarian Situs Watu Pinabetengan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0A0F1E] text-[#F3C623] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#F3C623] hover:text-[#0A0F1E] transition-all flex items-center space-x-4 shadow-2xl shadow-blue-900/10">
                 <span>Eksplorasi Pinabetengan</span>
                 <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="aspect-[4/5] bg-gray-100 rounded-[100px] overflow-hidden shadow-3xl group">
                <img 
                  src="https://images.unsplash.com/photo-1596402184320-417d7178b2cd?q=80&w=2070&auto=format&fit=crop" 
                  alt="Situs Pinabetengan" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A0F1E]/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-[#F3C623] p-12 rounded-[60px] shadow-2xl max-w-xs border-8 border-white animate-bounce-slow">
                <Sparkles className="h-10 w-10 text-[#0A0F1E] mb-6" />
                <p className="text-[#0A0F1E] font-black text-2xl leading-tight">Mewarisi Semangat Leluhur Minahasa.</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {stories.map((s, i) => (
             <div key={i} className="p-12 bg-[#F8F9FB] rounded-[60px] border border-gray-50 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0A0F1E] mb-10 shadow-sm group-hover:bg-[#F3C623] transition-all">
                   {s.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 group-hover:text-[#F3C623] transition-colors">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{s.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolHeritage;
