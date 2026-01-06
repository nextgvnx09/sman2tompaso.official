
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles, Minus, Cpu, ShieldCheck } from 'lucide-react';
import { getMomoAIResponse } from '../services/geminiService';

const MomoAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Selamat datang di pusat kedaulatan digital SMAN 2 Tompaso. Saya Momo AI, siap melayani kebutuhan informasi Anda dengan presisi tinggi.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    const response = await getMomoAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response || 'Koneksi ke neural core terputus. Silakan coba sesaat lagi.' }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button - Modern Minimalist */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[1000] group flex items-center space-x-4 bg-primary p-4 lg:p-6 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-500 border border-white/10 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <Bot className="h-6 w-6 lg:h-8 lg:w-8 text-[#D4AF37] relative z-10" />
        </div>
        <div className="text-left hidden lg:block pr-2">
          <p className="text-white font-black text-[9px] uppercase tracking-[0.4em] leading-none mb-1">Momo AI</p>
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-500 text-[7px] font-bold uppercase tracking-[0.2em]">Neural Core Active</p>
          </div>
        </div>
      </button>

      {/* Chat Window - The Tian Lempoy Design */}
      <div className={`fixed inset-0 lg:inset-auto lg:bottom-10 lg:right-10 lg:w-[450px] lg:h-[750px] z-[2000] bg-white lg:rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        
        {/* Premium Header with Mesh Gradient */}
        <div className="bg-[#0A0F1E] p-10 lg:p-14 text-white relative overflow-hidden">
          {/* Decorative Mesh Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-[80px] -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] -ml-20 -mb-20"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Cpu className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">Sovereign Core Architecture</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">MOMO <br/> <span className="text-[#D4AF37] italic font-serif-prestige font-light lowercase">concierge.</span></h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="bg-white/5 p-3 rounded-2xl hover:bg-white/10 border border-white/10 transition-all active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messaging Area - Clean & Spaced */}
        <div ref={scrollRef} className="flex-grow p-8 lg:p-10 overflow-y-auto space-y-8 bg-[#FAFAFA] custom-scrollbar">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-reveal`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`max-w-[85%] p-6 lg:p-8 rounded-[30px] lg:rounded-[40px] text-sm lg:text-base leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-[#0A0F1E] text-white shadow-xl rounded-tr-none' 
                : 'bg-white text-[#0A0F1E] border border-gray-100 shadow-sm rounded-tl-none font-serif-prestige italic'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-6 rounded-[30px] border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">Processing...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input & Credits Area */}
        <div className="p-8 lg:p-10 bg-white border-t border-gray-50">
          <div className="relative mb-6">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sovereign inquiry..."
              className="w-full bg-[#F5F5F7] border border-transparent px-8 py-5 lg:py-6 rounded-full text-primary focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all pr-20 font-medium placeholder:text-gray-300"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A0F1E] text-[#D4AF37] p-4 lg:p-5 rounded-full hover:bg-[#D4AF37] hover:text-[#0A0F1E] transition-all disabled:opacity-20 shadow-lg"
            >
              <Send className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          </div>
          
          {/* The Tian Lempoy Signature - Elegant & Professional */}
          <div className="flex flex-col items-center justify-center space-y-2 opacity-40">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-3 w-3" />
              <p className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-400">
                Digital Architecture by <span className="text-[#0A0F1E]">Tian Lempoy</span>
              </p>
            </div>
            <p className="text-[7px] font-bold text-gray-300 uppercase tracking-widest">
              Sovereign Edition © 2026 SMAN 2 Tompaso
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MomoAI;
