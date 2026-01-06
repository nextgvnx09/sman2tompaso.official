
import React, { useState } from 'react';
import { BookText, FileSearch, Download, Brain, GraduationCap, ArrowUpRight, Search, LayoutGrid } from 'lucide-react';

const StudyRepository: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('SEMUA');

  const materials = [
    { title: 'Persiapan SNBT 2026', type: 'Bank Soal', subject: 'Potensi Kognitif', size: '2.4 MB', year: '2025' },
    { title: 'Modul Kimia Organik', type: 'Materi', subject: 'Kimia', size: '5.1 MB', year: '2024' },
    { title: 'Rangkuman Fisika Kuantum', type: 'Materi', subject: 'Fisika', size: '1.8 MB', year: '2024' },
    { title: 'Simulasi OSN Informatika', type: 'Latihan', subject: 'TIK', size: '3.2 MB', year: '2025' },
    { title: 'Kumpulan Essay B. Inggris', type: 'Referensi', subject: 'B. Inggris', size: '0.9 MB', year: '2024' },
  ];

  const categories = ['SEMUA', 'BANK SOAL', 'MATERI', 'LATIHAN', 'REFERENSI'];

  return (
    <div className="pt-40 pb-32 bg-[#F8F9FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Knowledge Management System</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter leading-none mb-6">
              Pusat Materi <br /> <span className="text-gray-200">Digital Siswa.</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Akses instan ke ribuan modul belajar, bank soal SNBT, dan referensi akademik terbaik yang dikurasi oleh para pendidik SMAN 2 Tompaso.
            </p>
          </div>
          <div className="flex items-center space-x-4 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            <Search className="h-5 w-5 text-gray-300 ml-2" />
            <input type="text" placeholder="Cari materi..." className="bg-transparent outline-none text-sm w-48 md:w-64 font-medium" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-[#0A0F1E] text-white shadow-xl' : 'bg-white text-gray-400 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-[48px] border border-gray-100 hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                  <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-[#F3C623] transition-colors">
                    <Download className="h-5 w-5 text-gray-300 group-hover:text-[#0A0F1E]" />
                  </div>
               </div>
               
               <div className="w-14 h-14 bg-[#0A0F1E] rounded-2xl flex items-center justify-center text-[#F3C623] mb-8">
                  <BookText className="h-6 w-6" />
               </div>
               
               <h4 className="text-2xl font-black text-[#0A0F1E] mb-2 tracking-tight">{item.title}</h4>
               <p className="text-[#F3C623] text-[10px] font-black uppercase tracking-widest mb-6">{item.subject}</p>
               
               <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-gray-300 text-[8px] font-bold uppercase tracking-widest">Format</span>
                    <span className="text-[#0A0F1E] font-black text-xs">PDF DOCUMENT</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-gray-300 text-[8px] font-bold uppercase tracking-widest">Ukuran</span>
                    <span className="text-[#0A0F1E] font-black text-xs">{item.size}</span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#0A0F1E] rounded-[60px] p-16 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3C623]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-xl">
                 <h3 className="text-4xl font-black mb-6">Butuh Modul Khusus?</h3>
                 <p className="text-white/40 font-light leading-relaxed">Permintaan materi khusus yang tidak tersedia di repositori dapat diajukan kepada tim kurikulum sekolah.</p>
              </div>
              <button className="bg-[#F3C623] text-[#0A0F1E] px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center space-x-4">
                 <span>Ajukan Materi Baru</span>
                 <ArrowUpRight className="h-4 w-4" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudyRepository;
