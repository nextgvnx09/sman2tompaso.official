
import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Send, Loader2, User, Tag, Save } from 'lucide-react';
import { insertNews, updateNews, fetchCategories } from '../lib/actions';
import { NewsItem } from '../types';

interface NewsFormProps {
  onClose: () => void;
  onSuccess: () => void;
  initialData?: NewsItem | null;
}

const NewsForm: React.FC<NewsFormProps> = ({ onClose, onSuccess, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [category, setCategory] = useState(initialData?.category || '');
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [authorName, setAuthorName] = useState(initialData?.author_name || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || '');
  const [loading, setLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const isEditMode = !!initialData;

  useEffect(() => {
    const loadCategories = async () => {
      setCategoriesLoading(true);
      const { data } = await fetchCategories();
      
      if (data) {
        const catNames = data.map((c: any) => c.name);
        setAvailableCategories(catNames);
        if (!category) setCategory(catNames[0]);
      }
      setCategoriesLoading(false);
    };

    loadCategories();
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category) return;
    setLoading(true);

    try {
      const newsPayload = {
        title,
        category,
        excerpt,
        content,
        author_name: authorName,
        image_url: imageUrl || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop',
      };

      if (isEditMode && initialData) {
        await updateNews(initialData.id, newsPayload);
      } else {
        await insertNews(newsPayload);
      }
      
      onSuccess();
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#0A0F1E]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-reveal border border-gray-100">
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-black text-[#0A0F1E] tracking-tight">
              {isEditMode ? 'Sunting Konten' : 'Publikasi Baru'}
            </h3>
            <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-widest font-bold">SMAN 2 Tompaso Hub</p>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-gray-100 rounded-2xl transition-all">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Judul Publikasi</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-[#0A0F1E] font-medium"
              placeholder="Berikan judul yang menarik..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Kategori</label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all appearance-none text-[#0A0F1E] font-medium"
              >
                {availableCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Penulis</label>
              <input
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-[#0A0F1E] font-medium"
                placeholder="Nama Lengkap"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">URL Gambar (Opsional)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <ImageIcon className="h-4 w-4 text-[#F3C623]" />
              </span>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full pl-12 px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-[#0A0F1E] font-medium"
                placeholder="https://link-gambar.com/foto.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Ringkasan Singkat</label>
            <textarea
              required
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-[#0A0F1E] font-medium resize-none"
              placeholder="Deskripsi pendek untuk kartu berita..."
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Isi Konten</label>
            <textarea
              required
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:border-[#F3C623] focus:bg-white transition-all text-[#0A0F1E] font-medium"
              placeholder="Tuliskan isi berita secara lengkap..."
            />
          </div>

          <div className="pt-6 flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-8 py-5 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 transition-all text-gray-400 uppercase text-[10px] tracking-widest"
            >
              Tutup
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] bg-[#0A0F1E] text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center space-x-3 hover:bg-[#F3C623] hover:text-[#0A0F1E] transition-all disabled:opacity-50 shadow-xl shadow-blue-900/10"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  {isEditMode ? <Save className="h-5 w-5" /> : <Send className="h-5 w-5" />}
                  <span>{isEditMode ? 'Simpan Perubahan' : 'Terbitkan Sekarang'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
