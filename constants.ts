import { ServicePackage, ContactInfo } from './types';
import { Smartphone, Layout, Database, CheckCircle, XCircle } from 'lucide-react';

export const PACKAGES: ServicePackage[] = [
  {
    id: 'starter',
    name: 'STARTER',
    priceRange: '100k - 500k',
    features: [
      '1 Halaman (Single Page)',
      'Website Statis (Konten Tetap)',
      'Desain Bisa Request Warna',
      'Tidak Ada Revisi Desain',
      'Free SSL and Hosting'
    ],
    isRecommended: false
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    priceRange: '500k - 3jt',
    features: [
      'Hingga 5 Halaman',
      'Dinamis (CMS Sederhana)',
      'Klien Bisa Ganti Konten',
      'Revisi 2x',
      'Optimasi HP (Mobile Friendly)',
      'Free SSL and Hosting',
      'Free Custom Domain'
    ],
    isRecommended: true
  },
  {
    id: 'business',
    name: 'BUSINESS',
    priceRange: '3jt+',
    features: [
      'Full Custom System',
      'Database + Admin Panel Khusus',
      'Fitur Login/Register',
      'Manajemen Konten Lengkap',
      'Prioritas Support',
      'Scalable Architecture'
    ],
    isRecommended: false
  }
];

export const CONTACT_INFO: ContactInfo = {
  phone: '082282462024',
  email: 'ikhwanda466@gmail.com'
};
