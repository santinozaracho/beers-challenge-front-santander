import { weatherApi } from "@api";

interface Payload {
  city: string;
}

const getByCity = async ({ city }: Payload) => {
  const response = await weatherApi.get(`/find?q=${city}`);
  console.log(response);

  return response?.data;
};

export const WeatherAPI = {
  getByCity,
};
