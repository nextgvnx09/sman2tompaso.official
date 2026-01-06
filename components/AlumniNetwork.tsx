
import React from 'react';
import { MapPin, Globe, GraduationCap, Building2 } from 'lucide-react';

const AlumniNetwork: React.FC = () => {
  const alumni = [
    { name: 'Dr. Michael S.', year: '2010', path: 'Universitas Indonesia', role: 'Medical Research' },
    { name: 'Sarah Lempoy', year: '2015', path: 'ITB Bandung', role: 'Software Architect' },
    { name: 'Daniel R.', year: '2018', path: 'Monash University', role: 'Global Economist' },
    { name: 'Angelina P.', year: '2020', path: 'UGM Yogyakarta', role: 'Public Policy' },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#050811] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Global Alumni Network</span>
            <h1 className="text-6xl md:text-[100px] font-black text-white tracking-tighter leading-none mb-10">
              Jejak <br /> <span className="text-white/20 italic font-serif font-light">Global.</span>
            </h1>
            <p className="text-white/40 text-xl font-light leading-relaxed max-w-lg mb-12">
              Lulusan SMAN 2 Tompaso tersebar di berbagai universitas terbaik dan perusahaan multinasional di seluruh dunia.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-4xl font-black text-[#F3C623]">500+</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-2">Alumni di PTN</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-4xl font-black text-white">12</p>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-2">Negara Penempatan</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[64px] p-10 relative z-10">
              <div className="space-y-8">
                {alumni.map((a, i) => (
                  <div key={i} className="flex items-center space-x-6 p-6 hover:bg-white/5 rounded-3xl transition-all group">
                    <div className="w-16 h-16 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E]">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xl">{a.name}</h4>
                      <p className="text-[#F3C623] text-xs font-bold uppercase tracking-widest mt-1">{a.path}</p>
                      <p className="text-white/20 text-[10px] font-medium mt-1">{a.role} • Class of {a.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniNetwork;
