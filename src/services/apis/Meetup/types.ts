import { Meetup } from "@types";

export interface Response {
  data: [Meetup];
}

export interface SingleResponse {
  data: Meetup | undefined;
}
