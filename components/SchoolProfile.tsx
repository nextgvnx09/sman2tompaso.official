
import React from 'react';
import { Target, Compass, Book, Star, ChevronRight, Users, Brain, Zap, Heart, ShieldCheck, Crown, UserCheck } from 'lucide-react';
import { SCHOOL_ASSETS } from '../constants/assets';

const SchoolProfile: React.FC = () => {
  const mottoValues = [
    {
      title: 'Cerdas',
      desc: 'Mengutamakan perkembangan intelektual dan literasi digital yang tajam di era informasi.',
      icon: <Brain className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Terampil',
      desc: 'Membekali siswa dengan keahlian praktis dan kreativitas yang siap bersaing secara global.',
      icon: <Zap className="h-8 w-8" />,
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Bermartabat',
      desc: 'Menjunjung tinggi etika, moralitas, dan kearifan lokal Minahasa dalam setiap tindakan.',
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-red-50 text-red-600'
    }
  ];

  const osisLeadership = {
    chair: { name: 'Preysi Pesik', role: 'Ketua OSIS' },
    vice: { name: 'Esterlita Suoth', role: 'Wakil Ketua OSIS' },
    secretaries: [
      { name: 'Chika Korompis', role: 'Sekretaris I' },
      { name: 'Cakrawala Lempoy', role: 'Sekretaris II' }
    ],
    treasurers: [
      { name: 'Firen Gahung', role: 'Bendahara I' },
      { name: 'Angel', role: 'Bendahara II' }
    ]
  };

  return (
    <div className="bg-white">
      {/* Modern Profile Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F3C623] rounded-full blur-[200px] opacity-[0.05] translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">The School Legacy</span>
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-10 tracking-tighter leading-none">
              Identitas & <br /> <span className="text-gray-500 italic font-serif font-light">Eksistensi.</span>
            </h1>
            <p className="text-white/40 text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              SMA Negeri 2 Tompaso: Ekosistem pertumbuhan intelektual dan spiritual di tanah Minahasa.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Philosophy */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] mb-4 block">Nilai Inti Kami</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-none">Filosofi <br/><span className="text-gray-200 underline decoration-[#F3C623]/20">Pendidikan.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {mottoValues.map((motto, idx) => (
              <div key={idx} className="bg-[#F8F9FB] p-16 rounded-[64px] border border-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-700 group">
                <div className={`mb-12 w-20 h-20 ${motto.color} rounded-[30px] flex items-center justify-center shadow-sm transform group-hover:rotate-12 transition-transform`}>
                  {motto.icon}
                </div>
                <h4 className="text-3xl font-black text-[#0A0F1E] mb-6 tracking-tight">{motto.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light italic">
                  "{motto.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OSIS LEADERSHIP SECTION */}
      <section className="py-40 bg-[#F8F9FB] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 space-y-8 lg:space-y-0">
            <div className="max-w-2xl">
              <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Student Leadership</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                Suara <br /> <span className="text-gray-200">Siswa.</span>
              </h2>
            </div>
            <div className="max-w-sm text-right">
              <p className="text-gray-400 font-light italic">"Pemimpin hari ini, inovator hari esok. Mengenal pengurus OSIS SMAN 2 Tompaso."</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Ketua OSIS - Featured Card */}
            <div className="md:col-span-7 bg-[#0A0F1E] rounded-[60px] p-12 text-white relative overflow-hidden group hover:shadow-3xl transition-all duration-700">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3C623]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#F3C623]/20 transition-all duration-700"></div>
              <Crown className="text-[#F3C623] h-12 w-12 mb-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <span className="text-[#F3C623] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">President of Student Council</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{osisLeadership.chair.name}</h3>
              <p className="text-white/40 text-lg font-light max-w-md leading-relaxed">Bertanggung jawab atas koordinasi seluruh aspirasi siswa dan penggerak utama inovasi digital komunitas SMAN 2 Tompaso.</p>
              <div className="mt-12 flex items-center space-x-4">
                <div className="h-px w-20 bg-[#F3C623]/30"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 italic">Periode 2025/2026</span>
              </div>
            </div>

            {/* Wakil Ketua OSIS */}
            <div className="md:col-span-5 bg-white rounded-[60px] p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#F3C623]/30 transition-all duration-700 group">
              <UserCheck className="text-[#F3C623] h-10 w-10 mb-10" />
              <span className="text-[#F3C623] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Vice President</span>
              <h3 className="text-4xl font-black text-[#0A0F1E] tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>{osisLeadership.vice.name}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Menopang visi kepengurusan dalam memastikan seluruh program kerja berjalan selaras dengan motto Cerdas, Terampil, Bermartabat.</p>
            </div>

            {/* Sekretaris Grid */}
            <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {osisLeadership.secretaries.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-[48px] p-10 border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-[#0A0F1E] group-hover:text-[#F3C623] transition-all mb-8">
                    <Book className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 text-[9px] font-black uppercase tracking-widest mb-2 block">{sec.role}</span>
                  <h4 className="text-xl font-black text-[#0A0F1E] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{sec.name}</h4>
                </div>
              ))}
            </div>

            {/* Bendahara Grid */}
            <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {osisLeadership.treasurers.map((tr, idx) => (
                <div key={idx} className="bg-white rounded-[48px] p-10 border border-gray-100 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-[#0A0F1E] group-hover:text-[#F3C623] transition-all mb-8">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 text-[9px] font-black uppercase tracking-widest mb-2 block">{tr.role}</span>
                  <h4 className="text-xl font-black text-[#0A0F1E] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>{tr.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal Section - Re-styled */}
      <section className="py-40 max-w-7xl mx-auto px-6 border-t border-gray-100">
        <div className="flex flex-col lg:flex-row items-center gap-32">
          <div className="w-full lg:w-5/12 relative">
             <div className="relative rounded-[80px] overflow-hidden shadow-2xl h-[750px]">
                <img 
                  src={SCHOOL_ASSETS.PRINCIPAL_PHOTO} 
                  alt="Junus N M Akay" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';
                  }}
                />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-[#0A0F1E] p-12 rounded-[40px] shadow-2xl border border-white/10 hidden md:block">
               <p className="text-[#F3C623] text-[10px] font-black tracking-[0.5em] uppercase mb-4">Nakhoda Utama</p>
               <h4 className="text-white text-3xl font-black tracking-tight">Junus N M Akay</h4>
             </div>
          </div>
          
          <div className="w-full lg:w-7/12 space-y-12">
            <h2 className="text-6xl font-black text-[#0A0F1E] tracking-tighter">Kepemimpinan <br/><span className="text-gray-200">Progresif.</span></h2>
            <div className="space-y-8 text-gray-500 text-xl leading-relaxed font-light">
              <p className="italic font-serif">
                "Di SMAN 2 Tompaso, kami tidak hanya mencetak lulusan, tapi melahirkan agen perubahan yang berintegritas."
              </p>
              <p>
                Melalui visi transformasi digital, kami memastikan setiap aspek pendidikan di sekolah ini relevan dengan kebutuhan dunia kerja masa depan namun tetap berakar pada kearifan lokal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-gray-100">
              <div>
                <p className="text-5xl font-black text-[#0A0F1E]">80+</p>
                <p className="text-[10px] text-[#F3C623] font-black uppercase tracking-widest mt-2">Siswa Aktif</p>
              </div>
              <div>
                <p className="text-5xl font-black text-[#0A0F1E]">100%</p>
                <p className="text-[10px] text-[#F3C623] font-black uppercase tracking-widest mt-2">Literasi Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolProfile;
