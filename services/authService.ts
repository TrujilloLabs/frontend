import axios from 'axios';
import { LoginRequest, RegisterRequest, AuthResponse } from '../interfaces/auth';

const API_BASE_URL = 'http://172.28.128.1:5000/api/v1';

const authApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authService = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    console.log('Sending login request to:', `${API_BASE_URL}/auth/login`);
    console.log('Credentials:', credentials);
    try {
      const response = await authApi.post('/auth/login', credentials);
      console.log('Login response:', response.data);
      
      // Decodificar JWT para extraer información del usuario
      const token = response.data.access_token;
      const payload = JSON.parse(atob(token.split('.')[1]));
      
      const user = {
        id: payload.sub,
        email: payload.email,
        firstName: payload.email.split('@')[0], // Temporal
        lastName: '',
        role: payload.role,
        store_id: payload.store_id,
        isActive: true
      };
      
      return {
        access_token: token,
        user
      };
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      throw error;
    }
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const userData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      store_id: data.storeId
    };
    try {
      const response = await authApi.post('/users', userData);

      
      // Después del registro, hacer login automático
      return await authService.login({ email: data.email, password: data.password, storeId: data.storeId });
    } catch (error) {
      console.error('Register error:', error.response?.data || error.message);
      throw error;
    }
  },

  validateToken: async (token: string): Promise<AuthResponse> => {
    const response = await authApi.get('/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return {
      access_token: token,
      user: response.data
    };
  }
};