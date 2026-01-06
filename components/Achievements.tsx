
import React from 'react';
import { Trophy, Star, Medal, Target, RefreshCw, Send, ShieldCheck, Zap } from 'lucide-react';

const achievementCategories = [
  {
    title: 'Keunggulan Akademik',
    desc: 'Digitalisasi data Olimpiade Sains (OSN), Debat, dan Lomba Karya Ilmiah Remaja.',
    status: 'Sinkronisasi 2026',
    icon: <Star className="h-6 w-6" />,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Prestasi Olahraga',
    desc: 'Pendataan medali O2SN, Atletik, dan Turnamen Olahraga tingkat Provinsi.',
    status: 'Validasi Data',
    icon: <Trophy className="h-6 w-6" />,
    color: 'from-orange-400 to-red-600'
  },
  {
    title: 'Seni & Budaya',
    desc: 'Arsip kemenangan FLS2N, Paduan Suara, dan Pelestarian Budaya Minahasa.',
    status: 'Proses Arsip',
    icon: <Medal className="h-6 w-6" />,
    color: 'from-purple-400 to-pink-600'
  },
  {
    title: 'Inovasi & Teknologi',
    desc: 'Rekam jejak kompetisi Robotik, Coding, dan Kreativitas Digital siswa.',
    status: 'Ready for Update',
    icon: <Zap className="h-6 w-6" />,
    color: 'from-emerald-400 to-teal-600'
  }
];

const Achievements: React.FC = () => {
  return (
    <section className="py-40 bg-[#F8F9FB] overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F3C623]/5 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 space-y-10 lg:space-y-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 bg-[#F3C623]/10 px-6 py-2 rounded-full mb-8">
              <RefreshCw className="h-3 w-3 text-[#F3C623] animate-spin" />
              <span className="text-[#F3C623] font-black tracking-[0.4em] uppercase text-[9px]">Data Synchronization Mode</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter leading-none">
              Rekam Jejak <br /> <span className="text-gray-200">Kecemerlangan.</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 text-lg font-light leading-relaxed italic">
              "Kami sedang melakukan digitalisasi seluruh arsip prestasi SMAN 2 Tompaso untuk membangun Wall of Fame digital yang terintegrasi."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {achievementCategories.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-12 rounded-[56px] border border-gray-100 hover:shadow-2xl transition-all duration-700 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#0A0F1E] group-hover:text-[#F3C623] transition-all mb-10 shadow-sm transform group-hover:rotate-12">
                  {item.icon}
                </div>
                
                <h4 className="text-2xl font-black text-[#0A0F1E] leading-tight mb-4 group-hover:text-[#F3C623] transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
                  {item.desc}
                </p>
                
                <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#F3C623] rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">{item.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Students/Alumni */}
        <div className="bg-[#0A0F1E] rounded-[60px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex bg-white/5 border border-white/10 p-4 rounded-3xl mb-8">
              <ShieldCheck className="h-6 w-6 text-[#F3C623]" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Punya Prestasi yang Belum Tercatat?</h3>
            <p className="text-white/40 mb-12 font-light text-lg">
              Bantu kami melengkapi sejarah kebanggaan sekolah. Kirimkan data prestasi Anda (Siswa/Alumni) untuk kami verifikasi dan tampilkan di Portal Digital.
            </p>
            <button className="group bg-[#F3C623] text-[#0A0F1E] px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-500 flex items-center justify-center space-x-4 mx-auto shadow-2xl shadow-yellow-500/20">
              <Send className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Laporkan Prestasi</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
