import React, { createContext, useContext, useState } from 'react';
import { User, Hospital, Patient } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: 'hospital' | 'patient') => Promise<void>;
  register: (data: any, type: 'hospital' | 'patient') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string, type: 'hospital' | 'patient') => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: type === 'hospital' ? 'General Hospital' : 'John Doe',
      type,
      createdAt: new Date()
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const register = async (data: any, type: 'hospital' | 'patient') => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email,
      name: type === 'hospital' ? data.hospitalName : data.name,
      type,
      createdAt: new Date()
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};