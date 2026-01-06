
import React from 'react';

export interface NewsItem {
  id: string | number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image_url: string;
  date: string;
  author_name: string;
  created_at?: string;
}

export enum Page {
  HOME = 'HOME',
  BERITA = 'BERITA',
  GALERI = 'GALERI',
  HISTORY = 'HISTORY', 
  PPDB = 'PPDB',
  GURU = 'GURU',
  KONTAK = 'KONTAK',
  ADMIN = 'ADMIN'
}
