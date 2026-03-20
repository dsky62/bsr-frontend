// src/api/teamsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all teams
export async function fetchTeams() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teams`);

    if (!response.ok) {
      throw new Error(`Failed to fetch teams: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Should be an array of teams
  } catch (error) {
    console.error("Error in fetchTeams:", error);
    throw error;
  }
}

// GET a single team by ID
export async function fetchTeamById(teamId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teams/${teamId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch team ${teamId}: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Should be a single team object
  } catch (error) {
    console.error("Error in fetchTeamById:", error);
    throw error;
  }
}

