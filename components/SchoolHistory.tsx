
import React from 'react';
import { Landmark, History, Compass, ShieldCheck, Quote, Award, Sparkles, MapPin } from 'lucide-react';

const SchoolHistory: React.FC = () => {
  const milestones = [
    { year: '2000-an', title: 'Fondasi Awal', desc: 'Lahir dari kebutuhan masyarakat Tompaso akan pendidikan berkualitas yang berakar pada kearifan lokal Minahasa.' },
    { year: '2010', title: 'Era Transformasi', desc: 'Mulai memperkuat infrastruktur fisik dan laboratorium sains sebagai penunjang utama kurikulum.' },
    { year: '2015', title: 'Prestasi Nasional', desc: 'Pencapaian medali pertama dalam olimpiade sains tingkat nasional, mengukuhkan nama Tompaso di peta pendidikan Indonesia.' },
    { year: '2023', title: 'Digital Frontier', desc: 'Inisiasi program Vision 2026: Transformasi penuh menuju sekolah digital berbasis Cloud dan AI.' },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Museum Style */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1596402184320-417d7178b2cd?q=80&w=2070&auto=format&fit=crop" 
            alt="Tompaso Heritage" 
            className="w-full h-full object-cover grayscale transition-transform duration-[20s] hover:scale-110"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
           <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-10 backdrop-blur-xl">
             <Landmark className="h-4 w-4 text-[#F3C623]" />
             <span className="text-[#F3C623] text-[10px] font-black tracking-[0.5em] uppercase">The Legacy of Tompaso</span>
           </div>
           <h1 className="text-6xl md:text-[120px] font-black text-white tracking-tighter leading-none mb-10">
             Akar & <br /> <span className="text-gray-500 italic font-serif font-light">Peradaban.</span>
           </h1>
           <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto italic">
             "Membangun masa depan tanpa melupakan tempat kita berpijak."
           </p>
        </div>
      </section>

      {/* Narasi Mendalam */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
           <div className="space-y-12">
              <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-[10px] block">Historical Narrative</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter leading-none">
                Berdiri di Jantung <br /> <span className="text-gray-200">Minahasa.</span>
              </h2>
              <div className="space-y-8 text-gray-500 text-xl font-light leading-relaxed">
                <p>
                   SMA Negeri 2 Tompaso bukan sekadar institusi pendidikan; ia adalah manifestasi dari semangat masyarakat Tompaso untuk terus maju. Terletak di dekat situs sejarah megah **Watu Pinabetengan**, sekolah ini memikul tanggung jawab moral sebagai penjaga gerbang intelektual dan budaya.
                </p>
                <p>
                   Sejak didirikan, fokus utama kami adalah menyelaraskan kecanggihan teknologi dengan integritas karakter. Kami percaya bahwa siswa yang hebat adalah mereka yang menguasai algoritma masa depan namun tetap menjunjung tinggi kearifan lokal *Mapalus*.
                </p>
              </div>
           </div>
           
           <div className="relative group">
              <div className="absolute -inset-4 bg-[#F3C623] rounded-[80px] opacity-10 blur-3xl group-hover:opacity-20 transition-all"></div>
              <div className="relative bg-[#0A0F1E] p-16 rounded-[80px] text-white shadow-3xl">
                 <Quote className="h-16 w-16 text-[#F3C623] mb-12 opacity-30" />
                 <p className="text-3xl md:text-4xl font-serif italic leading-snug mb-12">
                    "Identitas SMAN 2 Tompaso adalah tentang perpaduan antara kecerdasan digital dan keluhuran martabat."
                 </p>
                 <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E]">
                       <History className="h-8 w-8" />
                    </div>
                    <div>
                       <p className="font-black text-xl">20+ Tahun</p>
                       <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Pengabdian Intelektual</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-40 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
             <h2 className="text-5xl md:text-7xl font-black text-[#0A0F1E] tracking-tighter mb-8 italic">Garis Waktu <span className="text-gray-200">Evolusi.</span></h2>
             <p className="text-gray-400 text-lg font-light">Setiap langkah adalah bukti komitmen kami terhadap kualitas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {milestones.map((m, i) => (
               <div key={i} className="group bg-white p-12 rounded-[60px] border border-gray-100 hover:shadow-2xl transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3C623]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                  <span className="text-4xl font-black text-[#F3C623] mb-8 block leading-none">{m.year}</span>
                  <h4 className="text-2xl font-black text-[#0A0F1E] mb-6 tracking-tight">{m.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{m.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-[#0A0F1E] rounded-[100px] overflow-hidden flex flex-col lg:flex-row items-center shadow-3xl">
              <div className="w-full lg:w-1/2 h-[600px] relative">
                 <img 
                  src="https://images.unsplash.com/photo-1596402184320-417d7178b2cd?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
                  alt="Watu Pinabetengan"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-transparent to-transparent hidden lg:block"></div>
              </div>
              <div className="w-full lg:w-1/2 p-20 text-white">
                 <Sparkles className="h-10 w-10 text-[#F3C623] mb-8" />
                 <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Warisan <br/><span className="text-[#F3C623]">Pinabetengan.</span></h3>
                 <p className="text-white/40 text-lg font-light leading-relaxed mb-12">
                   Sekolah kami berdiri di tanah yang disucikan oleh sejarah. Watu Pinabetengan adalah simbol persatuan dan musyawarah leluhur Minahasa—nilai yang kami tanamkan pada setiap siswa untuk menjadi pribadi yang bijak dan inklusif.
                 </p>
                 <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-[#F3C623]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#F3C623]">Tompaso, Minahasa, Sulawesi Utara</span>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolHistory;
