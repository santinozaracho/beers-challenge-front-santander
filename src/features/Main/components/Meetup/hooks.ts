import { useQuery } from "react-query";
import { notification } from "antd";

import { DEFAULT_COORDS, ERROR_MESSAGES } from "@constants";
import { MeetupAPI, Utils } from "@services";
import { Coords } from "@types";
import { useWeather } from "@hooks";

interface Params {
  guests?: number;
  date?: string;
  coords?: Coords;
}

const onError = () => {
  notification.error({
    message: "Error al obtener los datos",
    description: ERROR_MESSAGES.GENERIC_ERROR,
  });
};

export const useMeetupQuery = ({ id }: { id: number }) =>
  useQuery([id], MeetupAPI.getById, {
    onError,
  });

export const useTempAndBeersQuery = ({ guests, date, coords }: Params) => {
  const { data, isLoading } = useWeather(coords ?? DEFAULT_COORDS);

  if (!isLoading && data) {
    const temp = Utils.getTempByDateFromForecasts(
      date ?? "1970-1-1",
      data.data ?? []
    );

    const { beers, packs } = Utils.getBeersQuantity(guests ?? 0, temp);

    return { temp, beers, packs, isLoading };
  }

  return { temp: 0, beers: 0, packs: 0, isLoading: true };
};
