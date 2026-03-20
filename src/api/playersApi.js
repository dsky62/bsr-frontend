// src/api/playersApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all players
export async function fetchPlayers() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/players`);

    if (!response.ok) {
      throw new Error(`Failed to fetch players: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Should be an array of players
  } catch (error) {
    console.error("Error in fetchPlayers:", error);
    throw error;
  }
}

// GET a single player by ID
export async function fetchPlayerById(playerId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/players/${playerId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch player ${playerId}: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Should be a single player object
  } catch (error) {
    console.error("Error in fetchPlayerById:", error);
    throw error;
  }
}

