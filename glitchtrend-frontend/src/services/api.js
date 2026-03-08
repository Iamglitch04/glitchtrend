const API = "https://glitchtrend-backend.onrender.com";

export const getProducts = async () => {
  const response = await fetch(`${API}/api/products`);
  return response.json();
};
