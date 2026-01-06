
import React from 'react';
import { BookOpen, FlaskConical, Monitor, Trophy, Music, Coffee } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const facilities = [
  {
    title: 'Digital Library',
    desc: 'Akses ribuan literatur digital dan koleksi fisik.',
    icon: <BookOpen className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.LIBRARY
  },
  {
    title: 'Advanced Labs',
    desc: 'Laboratorium sains standar industri untuk riset.',
    icon: <FlaskConical className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.LAB
  },
  {
    title: 'IT Hub Center',
    desc: 'Fasilitas komputasi tinggi untuk kreatifitas.',
    icon: <Monitor className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.IT_CENTER
  },
  {
    title: 'Sport Arena',
    desc: 'Kompleks olahraga terpadu untuk atletik.',
    icon: <Trophy className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.SPORTS
  },
  {
    title: 'Amphitheater',
    desc: 'Aula serbaguna megah untuk pertunjukan.',
    icon: <Music className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.ARTS
  },
  {
    title: 'Social Space',
    desc: 'Area interaksi asri dan kantin modern.',
    icon: <Coffee className="h-6 w-6" />,
    image: SCHOOL_ASSETS.FACILITIES.LOUNGE
  },
];

const Facilities: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-32">
          <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Infrastructure Hub</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter">Fasilitas <span className="text-gray-200">Modern.</span></h2>
          <div className="w-24 h-1 bg-[#F3C623] mx-auto rounded-full mt-10 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <div 
              key={idx}
              className="group relative h-[400px] rounded-[48px] overflow-hidden flex flex-col justify-end p-10 shadow-2xl transition-all duration-700 hover:-translate-y-4"
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/40 to-transparent group-hover:via-[#0A0F1E]/60 transition-all"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E] mb-6 shadow-xl transform group-hover:rotate-12 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-white/60 leading-relaxed font-light text-sm italic line-clamp-2">
                  "{item.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
