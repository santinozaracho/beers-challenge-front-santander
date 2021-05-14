import { BEER_QUANTITY_BY_PACK, WEATHER_FORECAST_DAYS } from "@constants";
import { Forecast } from "@types";

export const TEMP_TYPES = {
  COLD: "COLD",
  HOT: "HOT",
  NORMAL: "NORMAL",
};

const beersPerGuestMapper = {
  [TEMP_TYPES.COLD]: 0.75,
  [TEMP_TYPES.HOT]: 2,
  [TEMP_TYPES.NORMAL]: 1,
};

const getTempType = (temp: number) =>
  temp < 20 ? TEMP_TYPES.COLD : temp > 24 ? TEMP_TYPES.HOT : TEMP_TYPES.NORMAL;

const getBeersQuantity = (guests: number, temp: number) => {
  const tempType = getTempType(temp);
  const beerPerGuestQty = beersPerGuestMapper[tempType];
  const beersQuantity = beerPerGuestQty * guests;
  const packsQuantity = beersQuantity / BEER_QUANTITY_BY_PACK;

  return { beers: Math.round(beersQuantity), packs: Math.round(packsQuantity) };
};

const getTempByDateFromForecasts = (date: string, forecasts: [Forecast]) => {
  const forecastInDate = forecasts.find(
    (forecast) => forecast.datetime === date
  );

  return forecastInDate?.temp ?? 0;
};

const isForecastAvailable = (date: string) => {
  const dateToday = new Date();
  console.log(dateToday);

  const eventDate = new Date(date);
  console.log(eventDate);

  const daysLeft =
    (eventDate.getTime() - dateToday.getTime()) / (1000 * 3600 * 24);

  return daysLeft < WEATHER_FORECAST_DAYS;
};
export const Utils = {
  getBeersQuantity,
  getTempByDateFromForecasts,
  isForecastAvailable,
};
