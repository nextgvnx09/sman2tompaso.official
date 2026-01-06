
import React from 'react';
import { Trophy, Award, Medal, Star, ArrowRight } from 'lucide-react';

const AchievementsShowcase: React.FC = () => {
  const accomplishments = [
    { title: 'Juara 1 Nasional', category: 'Inovasi Digital', year: '2025', desc: 'Sertifikasi kompetensi AI untuk 100% siswa kelas 12.' },
    { title: 'Gold Medal', category: 'Sains & Robotik', year: '2024', desc: 'Pengembangan prototipe irigasi cerdas berbasis IoT.' },
    { title: 'Sekolah Adiwiyata', category: 'Lingkungan Hidup', year: '2025', desc: 'Penghargaan atas komitmen pelestarian ekosistem Minahasa.' },
  ];

  return (
    <section className="py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-10">
          <div>
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Hall of Excellence</span>
            <h2 className="text-5xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter leading-none">
              Etalase <br /> <span className="text-gray-200">Kebanggaan.</span>
            </h2>
          </div>
          <p className="max-w-sm text-gray-400 text-lg font-light leading-relaxed">
            Dedikasi tanpa henti dalam mengejar standar tertinggi prestasi akademik maupun karakter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accomplishments.map((acc, i) => (
            <div key={i} className="group relative bg-[#F8F9FB] p-16 rounded-[64px] border border-gray-100 hover:bg-[#0A0F1E] transition-all duration-700 hover:-translate-y-4">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#F3C623] mb-12 shadow-sm group-hover:rotate-12 transition-transform">
                 <Trophy className="h-10 w-10" />
               </div>
               <span className="text-[10px] font-black text-[#F3C623] uppercase tracking-[0.3em] mb-4 block">{acc.category}</span>
               <h4 className="text-3xl font-black text-[#0A0F1E] group-hover:text-white mb-6 transition-colors">{acc.title}</h4>
               <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 group-hover:text-white/40 transition-colors">"{acc.desc}"</p>
               <div className="flex items-center justify-between pt-8 border-t border-gray-100 group-hover:border-white/10">
                  <span className="text-xl font-black text-gray-200 group-hover:text-[#F3C623]">{acc.year}</span>
                  <Award className="h-6 w-6 text-gray-200 group-hover:text-[#F3C623]" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;
