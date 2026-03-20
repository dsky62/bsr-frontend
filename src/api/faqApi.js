// src/api/faqApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all FAQ entries
export async function fetchFaq() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq`);

    if (!response.ok) {
      throw new Error(`Failed to fetch FAQ: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchFaq:", error);
    throw error;
  }
}

// GET single FAQ item by ID
export async function fetchFaqById(faqId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/faq/${faqId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch FAQ item ${faqId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchFaqById:", error);
    throw error;
  }
}

