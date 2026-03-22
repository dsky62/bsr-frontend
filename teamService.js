import axios from "axios";

const API_URL = "http://localhost:5000/api/teams";

export const getTeams = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getTeamById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const addTeam = async (teamData) => {
  const res = await axios.post(API_URL, teamData);
  return res.data;
};

export const updateTeam = async (id, teamData) => {
  const res = await axios.put(`${API_URL}/${id}`, teamData);
  return res.data;
};

export const deleteTeam = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

