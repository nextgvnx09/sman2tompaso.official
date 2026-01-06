
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit3, Loader2, RefreshCw, LayoutDashboard, LogOut, FileText, BarChart3, Users, ExternalLink, Search } from 'lucide-react';
import { fetchNews, deleteNews, logout } from '../lib/actions';
import { NewsItem, Page } from '../types';
import NewsForm from './NewsForm';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const { data } = await fetchNews();
      if (data) setNews(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (confirm('Apakah Anda yakin ingin menghapus berita ini secara permanen?')) {
      const { error } = await deleteNews(id);
      if (!error) loadData();
    }
  };

  const handleEdit = (item: NewsItem) => {
    setEditingNews(item);
    setIsFormOpen(true);
  };

  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FB] min-h-screen pb-32">
      {/* Dynamic Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-[60] py-5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <div className="bg-[#0A0F1E] p-3.5 rounded-2xl shadow-xl shadow-blue-900/10 transform -rotate-3">
              <LayoutDashboard className="h-6 w-6 text-[#F3C623]" />
            </div>
            <div>
              <h1 className="text-xl font-black text-[#0A0F1E] tracking-tight uppercase">Dashboard <span className="text-gray-300">Admin</span></h1>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-0.5">SMAN 2 Tompaso Official</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={handleLogout}
              className="group text-[10px] font-black text-gray-400 hover:text-red-500 transition-all uppercase tracking-widest flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Sign Out</span>
            </button>
            <button 
              onClick={() => {
                setEditingNews(null);
                setIsFormOpen(true);
              }}
              className="bg-[#F3C623] text-[#0A0F1E] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-3"
            >
              <Plus className="h-4 w-4" />
              <span>Publikasi Baru</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* SaaS Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-3xl font-black text-[#0A0F1E] leading-none mb-1">{news.length}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Konten Terbit</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mb-6">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-3xl font-black text-[#0A0F1E] leading-none mb-1">Live</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Status Sistem</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-3xl font-black text-[#0A0F1E] leading-none mb-1">1</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Admin Aktif</p>
            </div>
          </div>
          <div className="bg-[#0A0F1E] p-8 rounded-[32px] shadow-2xl shadow-blue-900/10 flex flex-col justify-between text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F3C623]/20 rounded-full -mr-8 -mt-8 blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#F3C623] mb-6 relative z-10">
              <ExternalLink className="h-6 w-6" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-widest mb-1 text-[#F3C623]">Visit Site</p>
              <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Pratinjau Publik</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[48px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h3 className="text-2xl font-black text-[#0A0F1E] tracking-tight">Manajemen Konten Publikasi</h3>
              <p className="text-xs text-gray-400 font-medium mt-1">Kelola berita, pengumuman, dan agenda sekolah secara real-time.</p>
            </div>
            
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-grow md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Cari judul konten..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-sm font-medium"
                />
              </div>
              <button 
                onClick={loadData} 
                className={`p-4 bg-gray-50 hover:bg-white border border-gray-100 rounded-2xl transition-all shadow-sm ${loading ? 'animate-spin' : ''}`}
              >
                <RefreshCw className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="py-40 flex flex-col items-center">
              <div className="relative">
                <Loader2 className="h-16 w-16 animate-spin text-[#F3C623] mb-6" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#0A0F1E] rounded-lg"></div>
                </div>
              </div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">Menghubungkan ke Database...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="py-48 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-8">
                <FileText className="h-12 w-12" />
              </div>
              <p className="text-[#0A0F1E] font-black text-xl mb-2">Belum ada konten ditemukan.</p>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">Mulai dengan membuat publikasi berita atau pengumuman pertama Anda hari ini.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Detail Publikasi</th>
                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status & Tanggal</th>
                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Opsi Pengelolaan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredNews.map((item) => (
                    <tr key={item.id} className="group hover:bg-gray-50/50 transition-all duration-300">
                      <td className="px-10 py-8">
                        <div className="flex items-center space-x-6">
                          <div className="relative shrink-0">
                            <img 
                              src={item.image_url || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop'} 
                              className="w-20 h-16 object-cover rounded-[20px] bg-gray-100 shadow-md group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute -top-2 -left-2 bg-[#F3C623] text-[#0A0F1E] px-2 py-0.5 rounded-lg text-[8px] font-black uppercase shadow-lg">
                              {item.category}
                            </div>
                          </div>
                          <div>
                            <p className="font-black text-[#0A0F1E] text-lg leading-tight mb-2 group-hover:text-[#F3C623] transition-colors">{item.title}</p>
                            <div className="flex items-center space-x-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                              <span className="flex items-center">
                                <Users className="h-3 w-3 mr-1.5" />
                                {item.author_name || 'Admin'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex flex-col">
                          <span className="text-xs text-[#0A0F1E] font-black mb-1">Diterbitkan</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                            {new Date(item.created_at || '').toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex justify-end space-x-3">
                          <button 
                            onClick={() => handleEdit(item)}
                            className="p-4 bg-white hover:bg-yellow-50 text-gray-300 hover:text-yellow-600 rounded-2xl border border-gray-100 transition-all shadow-sm active:scale-95"
                            title="Edit Konten"
                          >
                            <Edit3 className="h-4.5 w-4.5" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="p-4 bg-white hover:bg-red-50 text-gray-300 hover:text-red-500 rounded-2xl border border-gray-100 transition-all shadow-sm active:scale-95"
                            title="Hapus Konten"
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Action Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 py-6 z-[50]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">
          <p>© 2026 SMAN 2 Tompaso Administration Hub</p>
          <div className="flex space-x-8">
            <span className="text-green-500">Koneksi Database Stabil</span>
            <span className="text-[#0A0F1E]">Supabase Cloud</span>
          </div>
        </div>
      </footer>

      {isFormOpen && (
        <NewsForm 
          onClose={() => { setIsFormOpen(false); setEditingNews(null); }} 
          initialData={editingNews}
          onSuccess={() => { setIsFormOpen(false); setEditingNews(null); loadData(); }} 
        />
      )}
    </div>
  );
};

export default AdminDashboard;
