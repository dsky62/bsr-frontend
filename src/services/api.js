// src/services/api.js

import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with actual API base URL

// Players API endpoints
export const getPlayers = () => axios.get(`${API_URL}/players`);
export const getPlayerById = (id) => axios.get(`${API_URL}/players/${id}`);
export const createPlayer = (data) => axios.post(`${API_URL}/players`, data);
export const updatePlayer = (id, data) => axios.put(`${API_URL}/players/${id}`, data);
export const deletePlayer = (id) => axios.delete(`${API_URL}/players/${id}`);

// Rankings API endpoints
export const getRankings = () => axios.get(`${API_URL}/rankings`);
export const getRankingById = (id) => axios.get(`${API_URL}/rankings/${id}`);
export const createRanking = (data) => axios.post(`${API_URL}/rankings`, data);
export const updateRanking = (id, data) => axios.put(`${API_URL}/rankings/${id}`, data);
export const deleteRanking = (id) => axios.delete(`${API_URL}/rankings/${id}`);

// Videos API endpoints
export const getVideos = () => axios.get(`${API_URL}/videos`);
export const getVideoById = (id) => axios.get(`${API_URL}/videos/${id}`);
export const createVideo = (data) => axios.post(`${API_URL}/videos`, data);
export const updateVideo = (id, data) => axios.put(`${API_URL}/videos/${id}`, data);
export const deleteVideo = (id) => axios.delete(`${API_URL}/videos/${id}`);

// Events API endpoints
export const getEvents = () => axios.get(`${API_URL}/events`);
export const getEventById = (id) => axios.get(`${API_URL}/events/${id}`);
export const createEvent = (data) => axios.post(`${API_URL}/events`, data);
export const updateEvent = (id, data) => axios.put(`${API_URL}/events/${id}`, data);
export const deleteEvent = (id) => axios.delete(`${API_URL}/events/${id}`);
