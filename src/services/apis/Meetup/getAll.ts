//import { mainApi } from '@api'
import { mockedMainApi } from "./mock";

export const getAll = async () => {
  //  Annotation: here simulate a call to our services to fetch meetups
  //  const response = await mainApi.get<Response>('/meetups')
  const response = await mockedMainApi.get();

  return response.data;
};
