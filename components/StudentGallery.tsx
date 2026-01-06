
import React from 'react';
import { ImageIcon, Eye, Sparkles, Heart } from 'lucide-react';

const StudentGallery: React.FC = () => {
  const works = [
    { title: 'Digital Portrait Tompaso', author: 'Preysi Pesik (XII-1)', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop', likes: '124' },
    { title: 'Green Tech Innovation', author: 'Cakrawala L. (XI-3)', img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop', likes: '98' },
    { title: 'Minahasa Culture Photo', author: 'Firen G. (X-2)', img: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd?q=80&w=2070&auto=format&fit=crop', likes: '215' },
    { title: 'Cyber Security Research', author: 'Esterlita S. (XII-2)', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', likes: '86' },
  ];

  return (
    <div className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center lg:text-left">
          <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Creativity & Innovation Hub</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter leading-none mb-8">
            Galeri <br /> <span className="text-gray-200">Karya Siswa.</span>
          </h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed">
            Pameran digital karya terbaik siswa SMAN 2 Tompaso. Dari inovasi teknologi hingga ekspresi seni budaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.map((w, i) => (
            <div key={i} className="group relative h-[500px] rounded-[60px] overflow-hidden shadow-2xl">
               <img src={w.img} alt={w.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div>
                    <h4 className="text-3xl font-black text-white mb-2">{w.title}</h4>
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{w.author}</p>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl text-white">
                     <Heart className="h-4 w-4 text-[#F3C623]" />
                     <span className="text-xs font-black">{w.likes}</span>
                  </div>
               </div>
               <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#F3C623] rounded-full flex items-center justify-center text-[#0A0F1E] shadow-2xl">
                    <Eye className="h-6 w-6" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGallery;
