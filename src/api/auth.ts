// src/api/auth.ts
import api from '@/api/index';

export const register = (email: string, password: string) => {
  return api.post('/auth/register', { email, password });
};

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};
