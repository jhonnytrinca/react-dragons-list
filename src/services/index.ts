import axios, { AxiosResponse } from 'axios';
import { IDragon } from 'pages/Form/validation';
import { IDragonList } from 'pages/List/validation';

const api = axios.create({
  baseURL:'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon',
  headers: {
    "Content-Type": 'application/json',
    Accept: 'application/json'
  }
})

const getAll = async (url: string) => {
  const {data}: AxiosResponse<IDragonList> = await api.get(url);
  return data;
}

const getById = async (url: string) => {
  const {data}: AxiosResponse<IDragon> = await api.get(url);
  return data;
}

const create = (data: any) => {
  return api.post<any>('/', data)
} 

const update = (data: any) => {
  return api.put<any>(`/${data.id}`, data)
} 

const remove = (id: string) => {
  return api.delete<any>(`/${id}`)
} 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  getById,
  create,
  update,
  remove
}