
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import TeachersSection from './components/TeachersSection';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import AdmissionHub from './components/AdmissionHub';
import SmartUtility from './components/SmartUtility';
import NewsSection from './components/NewsSection';
import PrincipalWelcome from './components/PrincipalWelcome';
import StudentGallery from './components/StudentGallery';
import SchoolHistory from './components/SchoolHistory';
import MottoDeepDive from './components/MottoDeepDive';
import FeaturedPrograms from './components/FeaturedPrograms';
import AchievementsShowcase from './components/AchievementsShowcase';
import DigitalHeritage from './components/DigitalHeritage';
import SchoolSchedule from './components/SchoolSchedule';
import InstitutionalFramework from './components/InstitutionalFramework';
import MomoAI from './components/MomoAI';
import { StatsSection, CareerPathExplorer } from './components/EliteSections';
import { getCurrentUser } from './lib/actions';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [activePage]);

  const checkUser = async () => {
    const user = await getCurrentUser();
    if (user) setIsAdminAuthenticated(true);
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return (
          <div className="bg-white min-h-screen relative overflow-hidden">
            <Hero />
            <StatsSection />
            <MottoDeepDive />
            <PrincipalWelcome />
            <InstitutionalFramework />
            <AchievementsShowcase />
            <FeaturedPrograms />
            <CareerPathExplorer />
            <DigitalHeritage />
            
            {/* Real-time Schedule Integrated Right After Heritage */}
            <div id="schedule" className="reveal">
              <SchoolSchedule />
            </div>

            <SmartUtility />
            <NewsSection />
            
            {/* CTA Section */}
            <div className="py-32 lg:py-64 bg-primary relative reveal overflow-hidden">
              <div className="glow-orb glow-gold w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
              <div className="max-w-[1700px] mx-auto px-6 lg:px-24 relative z-10">
                <div className="rounded-[60px] lg:rounded-[120px] p-12 lg:p-48 text-center border border-white/5 shadow-4xl group bg-white/5 backdrop-blur-3xl">
                   <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">
                     <span className="text-[#D4AF37] font-black text-[10px] lg:text-[14px] uppercase tracking-[0.6em] lg:tracking-[1em] mb-8 block reveal">Initialize Your Legacy</span>
                     <h2 className="text-[10vw] lg:text-[10vw] text-white font-black leading-[0.8] tracking-tighter reveal">
                       RISE <br /> <span className="text-[#D4AF37] italic font-serif-prestige font-light lowercase">beyond.</span>
                     </h2>
                     <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-12 pt-8 lg:pt-10 reveal">
                       <button 
                         onClick={() => setActivePage(Page.PPDB)} 
                         className="bg-[#D4AF37] text-primary px-10 py-6 lg:px-24 lg:py-12 rounded-full font-black text-[9px] lg:text-[12px] uppercase tracking-[0.4em] lg:tracking-[0.5em] transition-all duration-700 hover:bg-white"
                       >
                         Admission 2026
                       </button>
                       <button 
                         onClick={() => setActivePage(Page.KONTAK)} 
                         className="px-10 py-6 lg:px-24 lg:py-12 rounded-full border border-white/20 text-white font-black text-[9px] lg:text-[12px] uppercase tracking-[0.4em] lg:tracking-[0.5em] hover:bg-white hover:text-primary transition-all duration-700"
                       >
                         Contact Office
                       </button>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      case Page.BERITA: return <NewsSection isFullPage={true} />;
      case Page.GALERI: return <StudentGallery />;
      case Page.HISTORY: return <SchoolHistory />;
      case Page.GURU: return <TeachersSection />;
      case Page.PPDB: return <AdmissionHub />;
      case Page.KONTAK: return <ContactSection />;
      case Page.ADMIN:
        return isAdminAuthenticated ? (
          <AdminDashboard onLogout={() => setIsAdminAuthenticated(false)} />
        ) : (
          <AdminLogin onSuccess={() => setIsAdminAuthenticated(true)} />
        );
      default: return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#D4AF37] selection:text-primary">
      {activePage !== Page.ADMIN && (
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      )}
      <main className="flex-grow">{renderContent()}</main>
      {activePage !== Page.ADMIN && <Footer onAdminClick={() => setActivePage(Page.ADMIN)} />}
      
      {/* Momo AI Assistant */}
      <MomoAI />
    </div>
  );
};

export default App;
