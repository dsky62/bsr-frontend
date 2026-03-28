// src/api/campsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all camps
export async function fetchCamps() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/camps`);

    if (!response.ok) {
      throw new Error(`Failed to fetch camps: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchCamps:", error);
    throw error;
  }
}

// GET single camp by ID
export async function fetchCampById(campId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/camps/${campId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch camp ${campId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchCampById:", error);
    throw error;
  }
}

