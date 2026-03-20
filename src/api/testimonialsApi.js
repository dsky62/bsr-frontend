// src/api/testimonialsApi.js

const API_BASE_URL = "http://localhost:5000";

// GET all testimonials
export async function fetchTestimonials() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/testimonials`);

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchTestimonials:", error);
    throw error;
  }
}

// GET single testimonial by ID
export async function fetchTestimonialById(testimonialId) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/testimonials/${testimonialId}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonial ${testimonialId}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchTestimonialById:", error);
    throw error;
  }
}

