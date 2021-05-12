import { Meetup } from "@types";
import { Response, SingleResponse } from "./types";

const mockedMeetups: [Meetup] = [
  {
    id: 123,
    title: "Juntada Birrera",
    location: {
      city: "Buenos Aires",
      country: "Argentina",
      address: "Av. Libertador 5414",
    },
    invites: 4514,
    date: "2021-05-14",
    time: "19:00",
  },
];

export const mockedMainApi = {
  get: (): Promise<Response> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockedMeetups });
      }, 1000);
    }),
  getOne: (id: number): Promise<SingleResponse> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockedMeetups.find((meetup) => meetup.id === id) });
      }, 1000);
    }),
};
