const axios = require("axios").default;

export async function getHotels(url) {
  const response = await fetch(url);
  const data = await response.json();
  try {
  } catch (error) {}
  return data;
}
