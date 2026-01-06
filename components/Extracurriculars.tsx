
import React, { useState } from 'react';
import { Trophy, Music, Camera, Monitor, Heart, Bike, Code, Palette } from 'lucide-react';

const EkskulData = [
  { name: 'Cyber Robotics', cat: 'TECH', icon: <Code />, color: 'bg-blue-500' },
  { name: 'Pramuka Inti', cat: 'LEAD', icon: <Heart />, color: 'bg-red-500' },
  { name: 'Seni Tari Tompaso', cat: 'ART', icon: <Palette />, color: 'bg-purple-500' },
  { name: 'Basket Team', cat: 'SPORT', icon: <Bike />, color: 'bg-orange-500' },
  { name: 'Multimedia & TV', cat: 'TECH', icon: <Camera />, color: 'bg-indigo-500' },
  { name: 'Paduan Suara', cat: 'ART', icon: <Music />, color: 'bg-pink-500' },
  { name: 'English Club', cat: 'ACADEMIC', icon: <Trophy />, color: 'bg-emerald-500' },
  { name: 'E-Sport Hub', cat: 'TECH', icon: <Monitor />, color: 'bg-slate-700' },
];

const Extracurriculars: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'TECH', 'SPORT', 'ART', 'LEAD'];

  const filtered = filter === 'ALL' ? EkskulData : EkskulData.filter(e => e.cat === filter);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Develop Your Talent</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter">Ekosistem <br/><span className="text-gray-200">Kreativitas.</span></h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === c ? 'bg-[#0A0F1E] text-[#F3C623]' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((e, i) => (
            <div key={i} className="group relative bg-[#F8F9FB] rounded-[48px] p-10 overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-700">
              <div className={`absolute top-0 right-0 w-32 h-32 ${e.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity`}></div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0A0F1E] mb-8 shadow-sm group-hover:bg-[#F3C623] transition-all transform group-hover:rotate-12">
                {e.icon}
              </div>
              <h4 className="text-2xl font-black text-[#0A0F1E] mb-2">{e.name}</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{e.cat}</p>
              <div className="mt-10 h-1 w-0 group-hover:w-full bg-[#F3C623] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;
