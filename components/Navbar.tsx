
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';
import { SCHOOL_ASSETS } from '../constants/assets';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INDEX', value: Page.HOME },
    { name: 'BERITA', value: Page.BERITA },
    { name: 'GALERI', value: Page.GALERI },
    { name: 'GURU', value: Page.GURU },
    { name: 'KONTAK', value: Page.KONTAK },
  ];

  const handleLinkClick = (page: Page) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[1000] px-4 lg:px-12 transition-all duration-700 ${isScrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`max-w-[1600px] mx-auto transition-all duration-700 glass-nav-card rounded-[35px] ${isScrolled ? 'py-4 px-8 shadow-2xl bg-white/80' : 'py-6 px-10 bg-white/40 border-white/20'}`}>
        <div className="flex justify-between items-center">
          
          {/* BRAND */}
          <div 
            className="flex items-center space-x-5 cursor-pointer group shrink-0 active:scale-95 transition-transform" 
            onClick={() => handleLinkClick(Page.HOME)}
          >
            <div className="relative">
              <img src={SCHOOL_ASSETS.LOGO} alt="SMAN 2 Tompaso" className="w-10 h-10 lg:w-12 lg:h-12 relative z-10" />
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg lg:text-2xl font-black text-[#0A0F1E] tracking-tighter leading-none">
                SMAN 2 <span className="text-[#D4AF37]">TOMPASO</span>
              </h1>
              <span className="text-[7px] lg:text-[8px] font-black text-gray-400 uppercase tracking-[0.4em] mt-1">Sovereign Identity</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleLinkClick(link.value)}
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative py-2 group tap-feedback ${
                  activePage === link.value ? 'text-[#0A0F1E]' : 'text-gray-400'
                }`}
              >
                {link.name}
                <div className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${activePage === link.value ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </button>
            ))}
            
            <button 
              onClick={() => handleLinkClick(Page.PPDB)}
              className="relative group bg-[#0A0F1E] px-8 py-3.5 rounded-2xl overflow-hidden tap-feedback flex items-center space-x-2"
            >
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white">PPDB 2026</span>
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-3 bg-white rounded-2xl shadow-lg active:scale-90 active:bg-[#D4AF37] transition-all"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#0A0F1E] z-[900] transition-all duration-700 flex flex-col justify-center items-center lg:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="space-y-10 text-center">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleLinkClick(link.value)}
              className="text-4xl font-black text-white active:text-[#D4AF37] active:scale-95 transition-all tracking-tighter block w-full uppercase"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick(Page.PPDB)}
            className="mt-10 px-12 py-6 bg-[#D4AF37] text-[#0A0F1E] rounded-full font-black text-xs uppercase tracking-widest active:scale-90 transition-all"
          >
            Enrollment 2026
          </button>
        </div>
        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white p-4">
          <X className="h-10 w-10" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
