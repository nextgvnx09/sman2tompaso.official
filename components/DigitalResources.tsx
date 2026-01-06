
import React from 'react';
import { Book, Globe, Shield, PenTool, ExternalLink, Download } from 'lucide-react';

const DigitalResources: React.FC = () => {
  const resources = [
    { title: 'E-Library Hub', type: 'Database Buku', link: '#', icon: <Book /> },
    { title: 'Learning Management', type: 'Portal Tugas', link: '#', icon: <PenTool /> },
    { title: 'Jurnal Ilmiah', type: 'Referensi Riset', link: '#', icon: <Globe /> },
    { title: 'Cyber Security', type: 'Panduan Keamanan', link: '#', icon: <Shield /> },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#F8F9FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Student Ecosystem</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter leading-none">
            Smart <br /> <span className="text-gray-200">Resources.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="group bg-white p-12 rounded-[56px] border border-gray-50 hover:shadow-2xl hover:border-[#F3C623]/30 transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3C623]/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 mb-10 group-hover:bg-[#0A0F1E] group-hover:text-[#F3C623] transition-all transform group-hover:rotate-12">
                 {res.icon}
               </div>
               <h4 className="text-2xl font-black mb-4 group-hover:text-[#F3C623] transition-colors">{res.title}</h4>
               <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">{res.type}</p>
               <button className="flex items-center space-x-3 text-[#0A0F1E] font-black text-[9px] uppercase tracking-widest group/btn">
                 <span>Akses Portal</span>
                 <ExternalLink className="h-3 w-3 transform group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          ))}
        </div>

        {/* Info Download Section */}
        <div className="mt-20 bg-[#0A0F1E] rounded-[60px] p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
             <h3 className="text-3xl font-black mb-6">Unduh Kalender Akademik 2025/2026</h3>
             <p className="text-white/40 font-light leading-relaxed">Dapatkan panduan lengkap jadwal sekolah, ujian, dan hari libur nasional dalam format PDF yang elegan.</p>
          </div>
          <button className="bg-white text-[#0A0F1E] px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-[#F3C623] transition-all flex items-center space-x-4 shrink-0">
             <Download className="h-4 w-4" />
             <span>Download PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalResources;
