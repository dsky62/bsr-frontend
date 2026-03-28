import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const playersAPI = {
  getAll: () => api.get('/players'),
  create: (data) => api.post('/players', data),
};

export const rankingsAPI = {
  getAll: () => api.get('/rankings'),
  create: (data) => api.post('/rankings', data),
};

export const videosAPI = {
  getAll: () => api.get('/media'),
  create: (formData) => api.post('/media', formData),
};

export default api;