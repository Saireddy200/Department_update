// src/apiService.js
import axios from "axios";

const API_URL = "http://localhost:8080"; // The base URL for your backend API

const apiService = {
  // Login function
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        username,
        password
      });
      return response.data; // Return the response data (e.g., user data or token)
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Propagate the error to the caller
    }
  },

  // Get list of scholarships
  getScholarships: async () => {
    const token = localStorage.getItem("authToken"); // Get JWT token from local storage
    try {
      const response = await axios.get(`${API_URL}/api/scholarships`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data; // Return the list of scholarships
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      throw error;
    }
  },

  // Apply for a scholarship
  applyForScholarship: async (userId, scholarshipId) => {
    const token = localStorage.getItem("authToken"); // Get JWT token
    try {
      const response = await axios.post(`${API_URL}/api/applications`, 
        { userId, scholarshipId }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data; // Return the response (e.g., success message)
    } catch (error) {
      console.error("Error applying for scholarship:", error);
      throw error;
    }
  }
};

export default apiService; // Export the apiService for use in other components
