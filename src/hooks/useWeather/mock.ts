const weather = {
  city_name: "Adrogué",
  country_code: "AR",
  data: [
    {
      app_max_temp: 17.9,
      app_min_temp: 8.4,
      clouds: 48,
      clouds_hi: 48,
      clouds_low: 0,
      clouds_mid: 0,
      datetime: "2021-05-14",
      dewpt: 2.8,
      high_temp: 17.9,
      low_temp: 8.4,
      max_dhi: null,
      max_temp: 18,
      min_temp: 8.4,
      moon_phase: 0.0880011,
      moon_phase_lunation: 0.07,
      moonrise_ts: 1620907851,
      moonset_ts: 1620946563,
      ozone: 254.88,
      pop: 0,
      precip: 0,
      pres: 1018.92,
      rh: 52,
      slp: 1021.06,
      snow: 0,
      snow_depth: 0,
      sunrise_ts: 1620902152,
      sunset_ts: 1620939344,
      temp: 22.7,
      ts: 1620874860,
      uv: 1.49873,
      valid_date: "2021-05-14",
      vis: 24.128,
      weather: { icon: "c03d", code: 803, description: "Broken clouds" },
      wind_cdir: "NW",
      wind_cdir_full: "northwest",
      wind_dir: 306,
      wind_gust_spd: 8.5,
      wind_spd: 1.77576,
    },
  ],
  lat: -34.86,
  lon: -58.51,
  state_code: "01",
  timezone: "America/Argentina/Buenos_Aires",
};

export const weatherMockApi = {
  get: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: weather });
      }, 1000);
    }),
};
