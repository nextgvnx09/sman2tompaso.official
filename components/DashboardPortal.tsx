
import React, { useState } from 'react';
import { Layout, BookOpen, Clock, FileText, Settings, Bell, Search, GraduationCap, ArrowRight, Download } from 'lucide-react';

const DashboardPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('STUDENT');

  const assignments = [
    { subject: 'Matematika', task: 'Kalkulus Lanjut', deadline: '2 jam lagi', status: 'URGENT' },
    { subject: 'Bahasa Inggris', task: 'Essay Writing', deadline: 'Besok', status: 'NORMAL' },
    { subject: 'Informatika', task: 'Web Development', deadline: '3 hari lagi', status: 'LATER' },
  ];

  return (
    <div className="pt-40 pb-32 bg-[#F8F9FB] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Nav */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-[#0A0F1E] rounded-[40px] p-8 text-white">
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-12 bg-[#F3C623] rounded-2xl flex items-center justify-center text-[#0A0F1E]">
                  <Layout className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tight text-sm">Smart Portal</h3>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest">v2.6.0 Stable</p>
                </div>
              </div>
              
              <nav className="space-y-3">
                {['Dashboard', 'Tugas Saya', 'E-Rapor', 'E-Library', 'Absensi'].map((item, i) => (
                  <button key={i} className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-[#F3C623] text-[#0A0F1E]' : 'text-white/40 hover:bg-white/5'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#0A0F1E]' : 'bg-white/10'}`}></div>
                    <span>{item}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-20 p-6 bg-white/5 rounded-3xl border border-white/5">
                <p className="text-[10px] font-black text-[#F3C623] uppercase tracking-widest mb-2">Informasi Akun</p>
                <p className="text-white/40 text-[9px] leading-relaxed">Gunakan NISN Anda untuk sinkronisasi data rapor digital.</p>
              </div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black text-[#0A0F1E] tracking-tighter">Ringkasan <br/><span className="text-gray-300">Akademik.</span></h2>
              <div className="flex items-center space-x-4">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center space-x-4 px-6">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">User Settings</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               {/* Activity Card */}
               <div className="bg-white p-10 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-lg font-black text-[#0A0F1E] uppercase tracking-tight">Tugas Mendatang</h4>
                    <FileText className="text-[#F3C623] h-6 w-6" />
                  </div>
                  <div className="space-y-6">
                    {assignments.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-[#0A0F1E] transition-all">
                        <div>
                          <p className="text-xs font-black text-[#0A0F1E] group-hover:text-white uppercase mb-1">{item.subject}</p>
                          <p className="text-[10px] text-gray-400 group-hover:text-white/40">{item.task}</p>
                        </div>
                        <span className={`text-[8px] font-black px-3 py-1.5 rounded-lg ${item.status === 'URGENT' ? 'bg-red-100 text-red-600' : 'bg-[#F3C623] text-[#0A0F1E]'}`}>
                          {item.deadline}
                        </span>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Resource Card */}
               <div className="bg-[#0A0F1E] p-10 rounded-[48px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F3C623]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-4 text-[#F3C623]">Perpustakaan Digital</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-10 italic">Akses koleksi digital terbaik dari database sekolah untuk menunjang riset mandiri Anda.</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 cursor-pointer transition-all">
                       <span className="text-[10px] font-black uppercase tracking-widest">Ensiklopedia Sains</span>
                       <Download className="h-4 w-4 text-[#F3C623]" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 cursor-pointer transition-all">
                       <span className="text-[10px] font-black uppercase tracking-widest">Modul Bahasa Jerman</span>
                       <Download className="h-4 w-4 text-[#F3C623]" />
                    </div>
                  </div>
               </div>
            </div>

            {/* Attendance & Stats */}
            <div className="bg-white p-12 rounded-[56px] border border-gray-100 shadow-sm">
               <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="flex items-center space-x-8">
                    <div className="w-20 h-20 rounded-[32px] border-4 border-[#F3C623] flex items-center justify-center">
                       <p className="text-2xl font-black text-[#0A0F1E]">98%</p>
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#0A0F1E] uppercase tracking-widest">Persentase Kehadiran</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Siswa Teraktif Bulan Ini</p>
                    </div>
                 </div>
                 <div className="h-px w-full md:w-px md:h-20 bg-gray-100"></div>
                 <div className="flex items-center space-x-6">
                    <button className="bg-[#F3C623] text-[#0A0F1E] px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
                      Cek E-Rapor
                    </button>
                    <button className="flex items-center space-x-3 text-gray-400 hover:text-[#0A0F1E] transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest">Butuh Bantuan?</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPortal;
