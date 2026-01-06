
import React from 'react';
import { Database, Download, FileSpreadsheet, PhoneCall, ArrowUpRight } from 'lucide-react';

const SmartUtility: React.FC = () => {
  const tools = [
    { title: 'NISN DATABASE', desc: 'Centralized national data verification.', icon: <Database /> },
    { title: 'RESOURCES', desc: 'Academic guides and digital forms.', icon: <Download /> },
    { title: 'ADMISSION', desc: 'Real-time PPDB tracking portal.', icon: <FileSpreadsheet /> },
    { title: 'DIRECT SUPPORT', desc: 'Admin assistance via WhatsApp.', icon: <PhoneCall /> },
  ];

  return (
    <section className="py-48 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-xl">
            <span className="text-[#F3C623] font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Unified Services</span>
            <h2 className="h-xl text-5xl md:text-[80px] font-black text-[#0A0F1E] tracking-tighter">CONTROL <br/><span className="text-gray-200">CENTER.</span></h2>
          </div>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-sm">
            Efisiensi layanan digital yang dirancang untuk kecepatan dan transparansi akses bagi seluruh warga sekolah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="group bg-[#F8F9FB] p-12 rounded-[60px] hover:bg-[#F3C623] transition-all duration-700 cursor-pointer">
              <div className="w-16 h-16 bg-[#0A0F1E] rounded-2xl flex items-center justify-center text-[#F3C623] mb-12 group-hover:bg-[#0A0F1E] group-hover:text-white transition-all">
                {tool.icon}
              </div>
              <h4 className="text-2xl font-black text-[#0A0F1E] mb-2">{tool.title}</h4>
              <p className="text-gray-400 group-hover:text-[#0A0F1E]/60 text-sm font-light mb-12">{tool.desc}</p>
              <div className="flex justify-between items-center pt-8 border-t border-[#0A0F1E]/5 group-hover:border-[#0A0F1E]/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#0A0F1E]">Access Now</span>
                <ArrowUpRight className="h-5 w-5 text-[#0A0F1E]/20 group-hover:text-[#0A0F1E]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartUtility;
