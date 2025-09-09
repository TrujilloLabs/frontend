// src/interfaces/index.ts

interface BackendCategory {
  id: string;
  name: string;
  isVisible: boolean;
  store: string;
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

interface BackendSubcategory {
  id: string;
  name: string;
  isVisible: boolean;
  store: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  category: BackendCategory; // La subcategoría de la API de productos tiene una categoría anidada
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // 🚨 Viene como string del backend
  stock: number;
  priceCop: number; // Tu API ya lo envía como number
  priceUsd?: number | null;
  imageUrl?: string;
  storeId: string;
  subcategory: BackendSubcategory; // 🚨 La subcategoría anidada tiene una categoría dentro
  slug: string;
  tags: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

export interface Subcategory {
  id: string;
  name: string;
  isVisible: boolean;
  store: string;
  icon?: string;
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
