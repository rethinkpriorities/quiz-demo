// API configuration for backend endpoints
// Uses VITE_API_URL environment variable in production (set to Lambda Function URL)
// Defaults to '/api' for local development with netlify dev

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const endpoints = {
  share: `${API_BASE_URL}/share`,
};

export default { API_BASE_URL, endpoints };
