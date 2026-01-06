
import React from 'react';
import { ClipboardList, Calendar, CheckCircle, FileText, ArrowRight, Phone } from 'lucide-react';

const AdmissionHub: React.FC = () => {
  const steps = [
    { title: 'Registrasi Online', desc: 'Pengisian formulir biodata lengkap melalui portal resmi.', icon: <ClipboardList /> },
    { title: 'Verifikasi Berkas', desc: 'Validasi dokumen persyaratan oleh tim panitia PPDB.', icon: <FileText /> },
    { title: 'Pemetaan Bakat', desc: 'Tes wawancara dan observasi minat bakat siswa.', icon: <CheckCircle /> },
    { title: 'Pengumuman', desc: 'Hasil seleksi akhir dapat diakses melalui portal.', icon: <Calendar /> },
  ];

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#F3C623] font-black tracking-[0.5em] uppercase text-xs mb-6 block">Admission Center 2026</span>
          <h1 className="text-6xl md:text-[100px] font-black text-[#0A0F1E] tracking-tighter leading-none mb-10">
            Mulai Perjalanan <br /> <span className="text-gray-200 italic font-serif font-light">Emasmu.</span>
          </h1>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">
            Bergabunglah dengan komunitas pembelajar digital terbaik di Minahasa. Proses pendaftaran yang transparan dan efisien.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="bg-[#0A0F1E] rounded-[60px] p-16 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3C623]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <h3 className="text-4xl font-black mb-12 tracking-tight">Alur Pendaftaran</h3>
             <div className="space-y-12">
               {steps.map((s, i) => (
                 <div key={i} className="flex items-start space-x-8 group">
                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#F3C623] group-hover:bg-[#F3C623] group-hover:text-[#0A0F1E] transition-all duration-500">
                     {s.icon}
                   </div>
                   <div>
                     <p className="text-xl font-black mb-2">{s.title}</p>
                     <p className="text-white/40 text-sm font-light leading-relaxed">{s.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="p-12 bg-[#F8F9FB] rounded-[50px] border border-gray-100">
              <h4 className="text-2xl font-black mb-6 tracking-tight">Persyaratan Umum</h4>
              <ul className="space-y-4 text-gray-500">
                {['Lulusan SMP/Mts Sederajat', 'Usia maksimal 21 tahun', 'Fotokopi Ijazah/SKL', 'Pas Foto 3x4 (4 Lembar)', 'Akta Kelahiran & Kartu Keluarga'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 bg-[#F3C623] rounded-full"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <button className="bg-[#F3C623] text-[#0A0F1E] p-10 rounded-[40px] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-yellow-500/20 text-center">
                 Daftar Sekarang
               </button>
               <button className="bg-white border border-gray-100 p-10 rounded-[40px] font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all text-center flex items-center justify-center space-x-3">
                 <Phone className="h-4 w-4" />
                 <span>Bantuan PPDB</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHub;
