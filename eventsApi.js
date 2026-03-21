// src/api/eventsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all events
export async function fetchEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`);

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchEvents:", error);
    throw error;
  }
}

// GET single event by ID
export async function fetchEventById(eventId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events/${eventId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch event ${eventId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchEventById:", error);
    throw error;
  }
}

