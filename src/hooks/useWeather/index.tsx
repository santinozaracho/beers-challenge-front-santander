import { useQuery } from "react-query";
import { WeatherAPI } from "./api";

const useWeather = (city: string) =>
  useQuery(false, () => WeatherAPI.getByCity({ city }));

export { useWeather };
