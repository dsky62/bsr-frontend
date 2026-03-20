// src/api/coachesApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all coaches
export async function fetchCoaches() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/coaches`);

    if (!response.ok) {
      throw new Error(`Failed to fetch coaches: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchCoaches:", error);
    throw error;
  }
}

// GET single coach by ID
export async function fetchCoachById(coachId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/coaches/${coachId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch coach ${coachId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchCoachById:", error);
    throw error;
  }
}

