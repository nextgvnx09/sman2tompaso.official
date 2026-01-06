
import React from 'react';
import { Library, BookOpen, Search, Download, ExternalLink, Bookmark } from 'lucide-react';

const LibraryPortal: React.FC = () => {
  const books = [
    { title: 'Inovasi Digital 2026', cat: 'TEKNOLOGI', author: 'Tim Kurikulum', status: 'PDF' },
    { title: 'Sastra Minahasa Modern', cat: 'BUDAYA', author: 'Arsip Sekolah', status: 'E-PUB' },
    { title: 'Fisika Kuantum Dasar', cat: 'SAINS', author: 'Diane Langi', status: 'PDF' },
    { title: 'Manajemen Kepemimpinan', cat: 'OSIS', author: 'Lembaga Kepemimpinan', status: 'LINK' },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#F8F9FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Digital Knowledge Center</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A0F1E] tracking-tighter mb-8">Pusat <br/><span className="text-gray-200">Literasi.</span></h1>
            <div className="flex items-center space-x-6 bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
              <Search className="h-5 w-5 text-gray-300" />
              <input type="text" placeholder="Cari buku atau jurnal..." className="bg-transparent outline-none text-sm w-full font-medium" />
            </div>
          </div>
          <div className="w-full lg:w-[400px] bg-[#0A0F1E] p-10 rounded-[60px] text-white">
             <Bookmark className="text-[#F3C623] h-10 w-10 mb-8" />
             <h3 className="text-2xl font-black mb-4">Akses Koleksi Pro</h3>
             <p className="text-white/40 text-sm font-light leading-relaxed mb-8">Gunakan akun Belajar.id Anda untuk membuka 5.000+ literatur premium secara gratis.</p>
             <button className="w-full bg-[#F3C623] text-[#0A0F1E] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">Hubungkan Akun</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {books.map((b, i) => (
             <div key={i} className="group bg-white p-10 rounded-[50px] border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 mb-8 group-hover:bg-[#F3C623] group-hover:text-[#0A0F1E] transition-all">
                   <BookOpen className="h-6 w-6" />
                </div>
                <span className="text-[8px] font-black text-[#F3C623] mb-3 block tracking-widest">{b.cat}</span>
                <h4 className="text-xl font-black text-[#0A0F1E] mb-6 leading-tight h-12 line-clamp-2">{b.title}</h4>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{b.author}</p>
                   <Download className="h-4 w-4 text-gray-200 group-hover:text-[#F3C623] cursor-pointer transition-colors" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryPortal;
