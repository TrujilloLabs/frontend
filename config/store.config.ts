// Configuración de la tienda usando variables de entorno

export const STORE_CONFIG = {
  STORE_ID: process.env.EXPO_PUBLIC_STORE_ID || '',
  STORE_NAME: process.env.EXPO_PUBLIC_STORE_NAME || 'Mi Tienda',
  STORE_LOGO: process.env.EXPO_PUBLIC_STORE_LOGO || '',
};