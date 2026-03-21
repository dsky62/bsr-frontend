// src/api/partnersApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all partners
export async function fetchPartners() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/partners`);

    if (!response.ok) {
      throw new Error(`Failed to fetch partners: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchPartners:", error);
    throw error;
  }
}

// GET single partner by ID
export async function fetchPartnerById(partnerId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/partners/${partnerId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch partner ${partnerId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchPartnerById:", error);
    throw error;
  }
}

