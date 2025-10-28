import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, User, LoginRequest, RegisterRequest } from '../interfaces/auth';
import { authService } from '../services/authService';
import { getToken, saveToken, removeToken } from '../storage/tokenStorage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await getToken();
      if (token) {
        const response = await authService.validateToken(token);
        setUser(response.user);
      }
    } catch (error) {
      await removeToken();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: LoginRequest) => {
    console.log('AuthContext: Starting login...');
    const response = await authService.login(credentials);
    console.log('AuthContext: Got response:', response);
    await saveToken(response.access_token);
    console.log('AuthContext: Token saved');
    setUser(response.user);
    console.log('AuthContext: User set:', response.user);
  };

  const register = async (data: RegisterRequest) => {
    const response = await authService.register(data);
    await saveToken(response.access_token);
    setUser(response.user);
  };

  const logout = async () => {
    await removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};