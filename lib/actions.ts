
import { NewsItem } from '../types';

/**
 * MOCK DATABASE ACTIONS (LocalStorage Based)
 * Sistem ini memungkinkan Admin Dashboard bekerja tanpa backend database.
 */

const STORAGE_KEY = 'sman2t_news_data';
const AUTH_KEY = 'sman2t_admin_session';

// Data Awal untuk simulasi
const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'msg-2026-01',
    title: "Segenap Keluarga Besar SMAN 2 Tompaso Mengucapkan Selamat Natal 2025 & Tahun Baru 2026",
    category: "Pengumuman",
    date: "25/12/2025",
    author_name: "Kepala Sekolah",
    excerpt: "Momen refleksi dan transformasi menuju visi sekolah digital yang lebih cerdas, terampil, dan bermartabat di tahun yang baru.",
    content: `Salam Sejahtera bagi kita semua,\n\nDi penghujung tahun 2025 ini, SMAN 2 Tompaso merayakan momen penuh sukacita dan harapan. Natal bukan sekadar perayaan, melainkan pengingat bagi kita semua untuk terus membawa terang dalam dunia pendidikan melalui integritas dan kasih.\n\nMemasuki tahun 2026, SMAN 2 Tompaso berkomitmen penuh untuk memacu akselerasi transformasi digital. Kita akan melangkah lebih jauh, merajut mimpi-mimpi besar siswa-siswi kita menjadi realitas yang nyata di era Vision 2026.\n\nMari kita jadikan semangat baru ini sebagai motor penggerak untuk menjadi pribadi yang lebih cerdas teknologi, lebih terampil dalam berkarya, dan senantiasa bermartabat dalam perilaku.\n\nSelamat Natal 2025 bagi yang merayakan, dan Selamat Tahun Baru 2026 untuk kita semua. Semoga berkat Tuhan senantiasa menyertai langkah SMAN 2 Tompaso.\n\nSalam Transformasi,\nJunus N M Akay, S.Pd\nKepala SMAN 2 Tompaso`,
    image_url: "https://i.ibb.co.com/M55mkPHY/images-2.jpg",
    created_at: "2025-12-25T00:00:00.000Z"
  },
  {
    id: 'news-2025-12',
    title: "Inovasi Kurikulum: Ujian Semester Berbasis Proyek Oleh Siswa Kelas 12 SMAN 2 Tompaso",
    category: "Pendidikan",
    date: "12/12/2025",
    author_name: "Tim Kurikulum",
    excerpt: "Siswa kelas 12 menunjukkan kompetensi luar biasa dalam memecahkan masalah nyata melalui Project-Based Assessment tahun ajaran ini.",
    content: `Dalam rangka implementasi Kurikulum Merdeka yang lebih mendalam, SMA Negeri 2 Tompaso menyelenggarakan Ujian Semester Berbasis Proyek (Project-Based Assessment) bagi seluruh siswa kelas 12 yang dilaksanakan pada tanggal 12 Desember 2025.\n\nBerbeda dengan ujian konvensional, metode ini menuntut siswa untuk berkolaborasi, berpikir kritis, dan menciptakan solusi nyata atas permasalahan di masyarakat Tompaso. Berbagai proyek unggulan dipresentasikan, mulai dari prototipe sistem irigasi cerdas, aplikasi manajemen pasar tradisional, hingga dokumenter pelestarian budaya lokal.\n\nKepala Sekolah, Bapak Junus N M Akay, menyampaikan bahwa metode ini bertujuan untuk mengukur tidak hanya pengetahuan teoretis, tetapi juga kesiapan mental dan keterampilan praktis siswa sebelum melangkah ke jenjang perguruan tinggi atau dunia kerja.\n\n"Kami melihat antusiasme yang luar biasa. Siswa tidak lagi hanya menghafal, mereka mencipta. Inilah esensi dari transformasi pendidikan yang kami usung," ujar beliau saat meninjau sesi presentasi proyek.\n\nEvaluasi dilakukan oleh tim penguji internal dan eksternal untuk memastikan kualitas capaian pembelajaran tetap berada pada standar tertinggi.`,
    image_url: "https://i.ibb.co.com/nM7F2Srg/FB-IMG-1767525007335.jpg",
    created_at: "2025-12-12T09:00:00.000Z"
  },
  {
    id: '1',
    title: "SMAN 2 Tompaso Raih Penghargaan Sekolah Digital Terinovatif 2026",
    category: "Prestasi",
    date: "10/01/2026",
    author_name: "Tim Humas",
    excerpt: "Berkat integrasi sistem pembelajaran berbasis AI, SMAN 2 Tompaso diakui sebagai pionir transformasi digital.",
    content: "SMAN 2 Tompaso resmi dinobatkan sebagai sekolah digital paling inovatif tahun ini. Penghargaan ini diberikan atas keberhasilan sekolah dalam mengimplementasikan platform pembelajaran berbasis cloud dan kecerdasan buatan (AI).",
    image_url: "https://i.ibb.co.com/ymGxjc7R/FB-IMG-1767525533073.jpg",
    created_at: "2026-01-10T08:00:00.000Z"
  }
];

// Sinkronisasi Data
const getStoredNews = (): NewsItem[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_NEWS));
    return INITIAL_NEWS;
  }
  return JSON.parse(stored);
};

/**
 * Authentication (Mock)
 */
export const login = async (email: string, password: string) => {
  if ((email.includes('@') && password === 'admin123') || password === 'sman2tompaso') {
    const session = { id: 'admin-1', email, expires: Date.now() + 86400000 };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { data: { user: session }, error: null };
  }
  return { data: { user: null }, error: { message: 'Kredensial salah. Gunakan password: admin123' } };
};

export const logout = async () => {
  localStorage.removeItem(AUTH_KEY);
  return { error: null };
};

export const getCurrentUser = async () => {
  const session = localStorage.getItem(AUTH_KEY);
  if (!session) return null;
  const parsed = JSON.parse(session);
  if (Date.now() > parsed.expires) {
    localStorage.removeItem(AUTH_KEY);
    return null;
  }
  return parsed;
};

/**
 * Database Operations (LocalStorage Implementation)
 */
export const fetchNews = async () => {
  try {
    const data = getStoredNews();
    return { data, error: null };
  } catch (err) {
    return { data: [], error: err };
  }
};

export const fetchCategories = async () => {
  return { 
    data: [
      { name: 'Pendidikan' }, 
      { name: 'Prestasi' }, 
      { name: 'Kegiatan Siswa' }, 
      { name: 'Agenda Sekolah' }, 
      { name: 'Pengumuman' }
    ], 
    error: null 
  };
};

export const insertNews = async (news: Omit<NewsItem, 'id' | 'date'>) => {
  const currentNews = getStoredNews();
  const newEntry: NewsItem = {
    ...news,
    id: Math.random().toString(36).substring(2, 11),
    date: new Date().toLocaleDateString('id-ID'),
    created_at: new Date().toISOString()
  };
  
  const updated = [newEntry, ...currentNews];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return { data: [newEntry], error: null };
};

export const updateNews = async (id: string | number, news: Omit<NewsItem, 'id' | 'date'>) => {
  const currentNews = getStoredNews();
  const updated = currentNews.map(item => 
    item.id.toString() === id.toString() 
      ? { ...item, ...news } 
      : item
  );
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return { data: updated, error: null };
};

export const deleteNews = async (id: string | number) => {
  const currentNews = getStoredNews();
  const filtered = currentNews.filter(item => item.id.toString() !== id.toString());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return { error: null };
};
