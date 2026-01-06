
import React from 'react';
import { User, Users, GraduationCap, Building2, ArrowRight } from 'lucide-react';

const QuickAccess: React.FC = () => {
  const roles = [
    { name: 'Siswa Aktif', role: 'PORTAL AKADEMIK', icon: <GraduationCap />, color: 'bg-blue-500' },
    { name: 'Guru & Staf', role: 'ADMINISTRASI', icon: <User />, color: 'bg-[#0A0F1E]' },
    { name: 'Orang Tua', role: 'PEMANTAUAN', icon: <Users />, color: 'bg-[#F3C623]' },
    { name: 'Alumni', role: 'JEJARING', icon: <Building2 />, color: 'bg-emerald-500' },
  ];

  return (
    <section className="py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">{item.role}</p>
              <h4 className="text-xl font-black text-[#0A0F1E] mb-6">{item.name}</h4>
              <div className="flex items-center space-x-2 text-[#F3C623] text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                 <span>Masuk Portal</span>
                 <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
