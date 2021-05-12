export type SVGIcon = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;

export type Meetup = {
  id: number;
  title: string;
  location: {
    city: string;
    country: string;
    address: string;
  };
  invites: number;
  date: string;
  time: string;
};
