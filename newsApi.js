// src/api/newsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all news
export async function fetchNews() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news`);

    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchNews:", error);
    throw error;
  }
}

// GET single news article by ID
export async function fetchNewsById(newsId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/${newsId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch news item ${newsId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchNewsById:", error);
    throw error;
  }
}

