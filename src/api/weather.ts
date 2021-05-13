import axios from "axios";

const weatherApi = axios.create({
  baseURL: `https://${process.env.REACT_APP_OPEN_WEATHER_API_URL}`,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_OPEN_WEATHER_API_URL,
  },
});

export { weatherApi };
