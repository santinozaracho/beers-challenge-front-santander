//import { mainApi } from '@api'
import { mockedMainApi } from "./mock";

interface Payload {
  id: number;
}

export const getById = async ({ id }: Payload) => {
  //  Annotation: here simulate a call to our services to fetch meetups
  //  const response = await mainApi.get<Response>(`/meetups/${id}`)
  const response = await mockedMainApi.getOne(id);

  return response?.data;
};
