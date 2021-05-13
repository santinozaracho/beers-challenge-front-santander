//import { weatherApi } from "@api";
import { DEFAULT_COORDS } from "@constants";
import { weatherMockApi } from "./mock";

const getByCoords = async ({
  lat = DEFAULT_COORDS.lat,
  lon = DEFAULT_COORDS.lon,
} = {}) => {
  // const response = await weatherApi.get(
  //   `/forecast/daily?lat=${lat}&lon=${lon}`
  // );

  const response = await weatherMockApi.get();

  return response?.data;
};

export const WeatherAPI = {
  getByCoords,
};
