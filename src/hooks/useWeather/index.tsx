import { ERROR_MESSAGES } from "@constants";
import { Coords } from "@types";
import { notification } from "antd";
import { useQuery } from "react-query";
import { WeatherAPI } from "./api";

const onError = () => {
  notification.error({
    message: "Error al obtener los datos",
    description: ERROR_MESSAGES.GENERIC_ERROR,
  });
};

const useWeather = (coords: Coords) => {
  return useQuery([coords], WeatherAPI.getByCoords, {
    onError,
  });
};

export { useWeather };
