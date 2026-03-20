// src/api/rankingsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all rankings
export async function fetchRankings() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/rankings`);

    if (!response.ok) {
      throw new Error(`Failed to fetch rankings: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchRankings:", error);
    throw error;
  }
}

// GET single ranking by ID
export async function fetchRankingById(rankingId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/rankings/${rankingId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch ranking ${rankingId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchRankingById:", error);
    throw error;
  }
}

