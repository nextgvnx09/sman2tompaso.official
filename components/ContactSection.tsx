
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="pt-40 pb-20 bg-[#050811]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
            <span className="text-[#F3C623] font-black tracking-[0.4em] uppercase text-xs mb-6 block">Hubungi Kami</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10">
              Pusat <br /> <span className="text-white/10">Layanan Sekolah.</span>
            </h1>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
              Tim administrasi kami siap membantu Anda memberikan informasi terkait pendaftaran, administrasi akademik, atau kerjasama institusi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#0A0F1E] rounded-[32px] border border-white/5 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#F3C623] mb-6 shadow-sm group-hover:bg-[#F3C623] group-hover:text-[#0A0F1E] transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Telepon Kantor</h4>
                <p className="text-white/40 text-sm font-medium">+62 831 3174 6652</p>
              </div>
              <div className="p-8 bg-[#0A0F1E] rounded-[32px] border border-white/5 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#F3C623] mb-6 shadow-sm group-hover:bg-[#F3C623] group-hover:text-[#0A0F1E] transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Email Resmi</h4>
                <p className="text-white/40 text-sm font-medium truncate">info@sman2tompaso.sch.id</p>
              </div>
            </div>

            <div className="mt-8 p-8 bg-[#0A0F1E] rounded-[32px] text-white overflow-hidden relative group border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3C623]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#F3C623]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-black text-[#F3C623] mb-2 uppercase text-xs tracking-widest">Jam Operasional Layanan</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Senin - Jumat: 07.15 - 15.30 WITA<br/>Sabtu: Kegiatan Ekstrakurikuler</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-[#0A0F1E] p-10 rounded-[48px] border border-white/5 h-full backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Kirim Pesan Cepat</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Nama Lengkap</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:border-[#F3C623] focus:bg-white/10 transition-all text-sm text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Subjek</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:border-[#F3C623] focus:bg-white/10 transition-all text-sm text-white" placeholder="PPDB 2026" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Pesan Anda</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-white/5 focus:outline-none focus:border-[#F3C623] focus:bg-white/10 transition-all text-sm text-white resize-none" placeholder="Tuliskan pertanyaan Anda..."></textarea>
                </div>
                <button className="w-full bg-[#F3C623] text-[#0A0F1E] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center space-x-3 shadow-xl shadow-yellow-500/10">
                  <MessageCircle className="h-5 w-5" />
                  <span>Kirim ke Admin</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 h-[550px] w-full bg-[#0A0F1E] rounded-[48px] overflow-hidden relative shadow-2xl border border-white/5 group">
           {/* Interactive Google Map Embed */}
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.883711915631!2d124.81446008715818!3d1.144445899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287399589d97277%3A0x861343715d027725!2sSMA%20Negeri%202%20Tompaso!5e0!3m2!1sid!2sid!4v1709192456789!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2) grayscale(0.5)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:invert-0 group-hover:grayscale-0 group-hover:brightness-100"
           ></iframe>
           
           <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-[#0A0F1E]/95 backdrop-blur-lg p-6 rounded-[32px] border border-white/10 text-white flex items-center space-x-6 shadow-2xl pointer-events-none transform translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
             <div className="w-12 h-12 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E] shrink-0">
               <MapPin className="h-6 w-6" />
             </div>
             <div>
               <h4 className="font-black text-sm uppercase tracking-widest text-[#F3C623]">Lokasi Sekolah</h4>
               <p className="text-xs text-white/60 mt-1 font-medium italic">Jl. Raya Tompaso, Minahasa, Sulawesi Utara</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
