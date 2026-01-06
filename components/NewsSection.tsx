
import React, { useState, useEffect } from 'react';
import { ChevronRight, X, Loader2, Bookmark, Sparkles, Minus, ArrowLeft } from 'lucide-react';
import { NewsItem } from '../types';
import { fetchNews } from '../lib/actions';

const NewsSection: React.FC<{ isFullPage?: boolean }> = ({ isFullPage = false }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => { loadNews(); }, []);

  useEffect(() => {
    if (!loading && news.length > 0) {
      setTimeout(() => {
        const reveals = document.querySelectorAll('.news-reveal');
        reveals.forEach(el => el.classList.add('active'));
      }, 100);
    }
  }, [loading, news]);

  const loadNews = async () => {
    setLoading(true);
    const { data } = await fetchNews();
    if (data) setNews(data);
    setLoading(false);
  };

  const featuredNews = news[0];
  const sideNews = news.slice(1, 4);

  return (
    <section id="warta" className={`py-20 lg:py-48 bg-white relative overflow-hidden ${isFullPage ? 'pt-32 lg:pt-64' : ''}`}>
      <div className="glow-orb glow-gold w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] -top-20 -left-20 opacity-[0.05]"></div>
      
      <div className="max-w-[1700px] mx-auto px-5 lg:px-16 relative z-10">
        
        {/* Editorial Title Block */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-32 gap-6 news-reveal reveal">
          <div className="space-y-3 lg:space-y-8">
            <div className="flex items-center space-x-3 lg:space-x-6">
              <div className="h-[1px] w-10 lg:w-20 bg-[#D4AF37]"></div>
              <span className="text-[7px] lg:text-[10px] font-black uppercase tracking-[0.4em] lg:tracking-[0.8em] text-[#D4AF37]">Jurnal Institusi</span>
            </div>
            <h2 className="text-[11vw] md:text-7xl lg:text-[140px] font-black text-[#0A0F1E] tracking-tighter leading-[0.9] lg:leading-[0.75]">
              JOURNAL <br /> 
              <span className="font-serif-prestige italic font-light text-gray-200 lowercase tracking-normal">of tom's 2.</span>
            </h2>
          </div>
          <div className="max-w-sm w-full lg:text-right">
             <p className="text-gray-400 text-base lg:text-xl font-light italic leading-relaxed mb-4 lg:mb-8">
               "Merekam setiap langkah transformasi SMAN 2 Tompaso menuju masa depan."
             </p>
             <div className="flex lg:justify-end">
                <button className="flex items-center space-x-3 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[#0A0F1E] group border-b border-[#D4AF37]/30 pb-1 hover:text-[#D4AF37] transition-colors active:scale-95">
                  <span>Arsip Berita</span>
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
        </div>

        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center">
             <Loader2 className="animate-spin text-[#D4AF37] h-8 w-8 mb-4" />
             <p className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-300">Mensinkronisasi...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            
            {/* FEATURED STORY */}
            {featuredNews && (
              <div 
                className="lg:col-span-7 group cursor-pointer news-reveal reveal tap-feedback rounded-[40px] p-2"
                onClick={() => setSelectedNews(featuredNews)}
              >
                <div className="relative rounded-[30px] lg:rounded-[60px] overflow-hidden aspect-[4/3] lg:aspect-[16/11] mb-6 lg:mb-12 shadow-xl bg-gray-50 border border-gray-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(212,175,55,0.15)]">
                  <img 
                    src={featuredNews.image_url} 
                    alt={featuredNews.title} 
                    className="w-full h-full object-cover transition-all duration-700 lg:grayscale group-hover:grayscale-0 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/70 via-transparent to-transparent opacity-90 lg:opacity-60"></div>
                  
                  <div className="absolute top-5 left-5 lg:top-10 lg:left-10 bg-white/10 backdrop-blur-xl px-3 py-1.5 lg:px-6 lg:py-3 rounded-full border border-white/20 flex items-center space-x-2 lg:space-x-3">
                    <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                    <span className="text-[7px] lg:text-[9px] font-black uppercase tracking-widest text-white">{featuredNews.category}</span>
                  </div>
                </div>
                
                <div className="space-y-3 lg:space-y-6 px-4">
                  <div className="flex items-center space-x-3 lg:space-x-6 text-[8px] lg:text-[10px] font-black text-[#D4AF37] tracking-widest uppercase">
                    <span>{featuredNews.date}</span>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <span>{featuredNews.author_name}</span>
                  </div>
                  <h3 className="text-3xl lg:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-[1] lg:leading-[0.9] group-hover:text-[#D4AF37] transition-colors duration-500">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-400 text-base lg:text-2xl font-light leading-relaxed line-clamp-2 italic font-serif-prestige">
                    "{featuredNews.excerpt}"
                  </p>
                </div>
              </div>
            )}

            {/* SIDE ARTICLES */}
            <div className="lg:col-span-5 space-y-10 lg:space-y-16">
               <div className="flex items-center justify-between border-b border-gray-100 pb-4 lg:pb-8 mb-6 lg:mb-12 news-reveal reveal">
                 <h4 className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Pilihan Redaksi</h4>
                 <Bookmark className="h-4 w-4 text-[#D4AF37]" />
               </div>
               
               <div className="space-y-8 lg:space-y-20">
                 {sideNews.map((item, idx) => (
                   <div 
                    key={item.id} 
                    className="group cursor-pointer flex gap-5 lg:gap-10 items-start news-reveal reveal hover-card-gold p-4 rounded-[30px]"
                    style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
                    onClick={() => setSelectedNews(item)}
                   >
                     <div className="shrink-0 w-20 h-20 lg:w-40 lg:h-40 rounded-[20px] lg:rounded-[35px] overflow-hidden bg-gray-50 border border-gray-100 group-active:rotate-3 transition-transform">
                        <img src={item.image_url} className="w-full h-full object-cover transition-all duration-700 lg:grayscale group-hover:grayscale-0" alt="" />
                     </div>
                     <div className="space-y-1 lg:space-y-4 pt-1">
                        <span className="text-[7px] lg:text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.2em] lg:tracking-[0.4em]">{item.category}</span>
                        <h5 className="text-lg lg:text-2xl font-black text-[#0A0F1E] leading-tight group-hover:text-[#D4AF37] transition-colors line-clamp-2 tracking-tight">
                          {item.title}
                        </h5>
                        <div className="flex items-center space-x-3 text-[7px] lg:text-[9px] font-bold text-gray-300 uppercase tracking-widest group-hover:text-[#0A0F1E] transition-colors">
                           <span>{item.date}</span>
                           <Minus className="h-2 w-2" />
                           <span className="underline decoration-[#D4AF37]">Detail</span>
                        </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        )}
      </div>

      {/* READER MODAL */}
      {selectedNews && (
        <div className="fixed inset-0 z-[2000] bg-white overflow-y-auto modal-animate">
          <div className="sticky top-0 z-[2100] bg-white/95 backdrop-blur-3xl border-b border-gray-100 px-5 lg:px-20 py-4 lg:py-8 flex justify-between items-center">
            <button 
              onClick={() => setSelectedNews(null)} 
              className="group flex items-center space-x-3 lg:space-x-6 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-[#0A0F1E] tap-feedback !bg-transparent !p-2"
            >
              <ArrowLeft className="h-5 w-5 lg:h-6 lg:w-6 group-hover:-translate-x-2 transition-transform" />
              <span>Kembali</span>
            </button>
            <button 
              onClick={() => setSelectedNews(null)} 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#0A0F1E] text-white flex items-center justify-center shadow-lg active:scale-90 active:bg-[#D4AF37] transition-all"
            >
              <X className="h-5 w-5 lg:h-6 lg:w-6" />
            </button>
          </div>
          
          <article className="max-w-4xl mx-auto px-5 lg:px-6 pt-12 pb-24 lg:pt-32 lg:pb-40 reveal active">
             <div className="text-center mb-10 lg:mb-32 space-y-6 lg:space-y-12">
               <span className="text-[#D4AF37] text-[9px] lg:text-[12px] font-black uppercase tracking-[0.6em] block">{selectedNews.category}</span>
               <h1 className="text-3xl md:text-6xl lg:text-[110px] font-serif-prestige italic font-light text-[#0A0F1E] leading-[1.1] lg:leading-[0.85] tracking-tight">{selectedNews.title}</h1>
               <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em]">
                 <span>{selectedNews.author_name}</span>
                 <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                 <span>{selectedNews.date}</span>
               </div>
             </div>

             <div className="rounded-[30px] lg:rounded-[100px] overflow-hidden shadow-2xl mb-12 lg:mb-40 bg-gray-50 aspect-[16/9] border-2 lg:border-8 border-white group">
                <img src={selectedNews.image_url} className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105" alt="" />
             </div>

             <div className="max-w-3xl mx-auto">
               <p className="text-xl lg:text-5xl font-serif-prestige italic text-gray-400 leading-tight border-l-2 lg:border-l-4 border-[#D4AF37] pl-5 lg:pl-16 py-2 mb-12 lg:mb-24">
                 "{selectedNews.excerpt}"
               </p>
               <div className="text-[#0A0F1E] text-lg lg:text-2xl font-light leading-relaxed whitespace-pre-line font-serif-prestige first-letter:text-6xl lg:first-letter:text-9xl first-letter:font-black first-letter:float-left first-letter:mr-4 first-letter:text-[#D4AF37]">
                 {selectedNews.content}
               </div>
               
               <div className="mt-20 lg:mt-40 pt-12 lg:pt-24 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
                  <div className="flex items-center space-x-4 lg:space-x-8 group">
                    <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-[20px] lg:rounded-[35px] bg-[#0A0F1E] flex items-center justify-center text-[#D4AF37] font-black text-lg group-hover:bg-[#D4AF37] group-hover:text-[#0A0F1E] transition-all">
                      {selectedNews.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[7px] lg:text-[10px] font-black uppercase tracking-widest text-gray-300">Penulis Artikel</p>
                      <p className="text-lg lg:text-2xl font-black text-[#0A0F1E]">{selectedNews.author_name}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setSelectedNews(null); }}
                    className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 lg:px-14 py-4 lg:py-7 rounded-full text-[8px] lg:text-[10px] font-black uppercase tracking-[0.4em] shadow-lg tap-feedback"
                  >
                    Tutup Artikel
                  </button>
               </div>
             </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
