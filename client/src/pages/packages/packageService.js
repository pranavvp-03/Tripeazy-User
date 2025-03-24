import axios from "axios";

const API_URL = "http://localhost:5000/api/packages";

// Get all packages (with pagination)
export const fetchPackages = async (page = 1, limit = 10, category = 'All') => {
  try {
    const response = await axios.get(API_URL, {
      params: { page, limit, category },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
};

// Get package details by ID
export const fetchPackageDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get organized packages
export const fetchOrganizedPackages = async () => {
  try {
    const response = await axios.get(`${API_URL}/organized`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Search packages by query


export const searchPackages = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search?query=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error("Error searching packages:", error);
    throw error;
  }
};



