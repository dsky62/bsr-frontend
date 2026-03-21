// src/api/staffApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all staff
export async function fetchStaff() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/staff`);

    if (!response.ok) {
      throw new Error(`Failed to fetch staff: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchStaff:", error);
    throw error;
  }
}

// GET single staff member by ID
export async function fetchStaffById(staffId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/staff/${staffId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch staff member ${staffId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchStaffById:", error);
    throw error;
  }
}

