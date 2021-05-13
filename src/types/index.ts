export type SVGIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

export type Coords = {
  lat: number;
  lon: number;
};

export type Meetup = {
  id: number;
  title: string;
  location: {
    city: string;
    country: string;
    address: string;
    coords: Coords;
  };
  guests: number;
  date: string;
  time: string;
};

export type Forecast = {
  temp: number;
  datetime: string;
};
