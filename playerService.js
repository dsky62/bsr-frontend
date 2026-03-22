import axios from "axios";

const API_URL = "http://localhost:5000/api/players";

export const getPlayers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPlayerById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const addPlayer = async (player) => {
  const res = await axios.post(API_URL, player);
  return res.data;
};

export const updatePlayer = async (id, player) => {
  const res = await axios.put(`${API_URL}/${id}`, player);
  return res.data;
};

export const deletePlayer = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

