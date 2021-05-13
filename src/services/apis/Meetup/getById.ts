//import { mainApi } from '@api'
import { mockedMainApi } from "./mock";

export const getById = async (id: number) => {
  console.log(id);

  //  Annotation: here simulate a call to our services to fetch meetups
  //  const response = await mainApi.get<Response>(`/meetups/${id}`)
  const response = await mockedMainApi.getOne(id);

  return response?.data;
};
