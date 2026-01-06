
import React from 'react';
import { Terminal, Shield } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-white py-24 px-12 lg:px-24 border-t border-black/5">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <h2 className="text-2xl font-black tracking-tighter">SMAN 2 <br/> <span className="text-gray-200">TOMPASO</span></h2>
            <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
              Jl. Raya Tompaso, Minahasa, Sulawesi Utara. <br/>
              Pusat keunggulan pendidikan menengah.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-gray-300">NAVIGATION</h4>
            <ul className="space-y-4 text-[10px] font-black tracking-[0.2em] text-black">
              <li><a href="#" className="hover:text-gray-400 transition-colors">ARCHIVE</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">ADMISSION</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">INSTITUTION</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-gray-300">CONTACT</h4>
            <ul className="space-y-4 text-[10px] font-black tracking-[0.2em] text-black">
              <li>+62 831-3174-6652</li>
              <li>OFFICE@SMAN2TOMPASO.ID</li>
            </ul>
          </div>

          <div className="space-y-10">
             <button onClick={onAdminClick} className="flex items-center space-x-4 group">
               <div className="w-10 h-10 border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                 <Shield size={16} />
               </div>
               <span className="text-[10px] font-black tracking-widest">ADMIN PORTAL</span>
             </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5">
          <p className="text-[9px] font-black tracking-[0.5em] text-gray-300 mb-8 md:mb-0">© 2026 SMAN 2 TOMPASO. NOIR EDITION.</p>
          <div className="flex items-center space-x-6">
             <div className="h-px w-10 bg-black/10"></div>
             <p className="text-[9px] font-black tracking-[0.4em] flex items-center">
               <Terminal size={12} className="mr-3" />
               DESIGN BY CHRISTIAN LEMPOY
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
