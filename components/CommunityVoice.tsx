
import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';

const CommunityVoice: React.FC = () => {
  const testimonials = [
    { name: 'Dr. Michael Sumendap', role: 'Alumni Angkatan 2012', text: 'SMAN 2 Tompaso memberikan landasan karakter yang sangat kuat bagi karir medis saya hari ini.' },
    { name: 'Ibu Ratna Kalesaran', role: 'Orang Tua Siswa', text: 'Transformasi digital sekolah ini membuat saya tenang akan masa depan pendidikan anak saya.' },
  ];

  return (
    <section className="py-48 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <MessageSquare className="h-12 w-12 text-[#F3C623] mx-auto mb-10 opacity-30" />
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            Suara <br /> <span className="text-[#F3C623] italic font-serif">Komunitas.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-20 rounded-[80px] hover:bg-white/10 transition-all group">
               <Quote className="h-16 w-16 text-[#F3C623] mb-12 opacity-20 group-hover:opacity-100 transition-opacity" />
               <p className="text-2xl md:text-3xl font-serif italic text-white/80 leading-relaxed mb-16">
                 "{t.text}"
               </p>
               <div className="flex items-center space-x-6 pt-12 border-t border-white/10">
                  <div className="w-16 h-16 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E] font-black text-2xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white">{t.name}</h4>
                    <p className="text-[#F3C623] text-[10px] font-bold uppercase tracking-widest mt-2">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityVoice;
