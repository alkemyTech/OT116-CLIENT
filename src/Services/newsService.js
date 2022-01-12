import { getEndpoint } from '../Components/Services/publicApiServices';
import {
  deletePrivateEndPointById,
  getPrivateById,
  postPrivateEndPoint,
  putPrivateEndPoint,
} from './privateApiService';

const URL = 'http://ongapi.alkemy.org/api/news';
const path = 'news';

export const getAllNews = async () => {
  try {
    return await getEndpoint(path);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getNewsById = async (id) => {
  try {
    return await getPrivateById(URL, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const addNews = async (data) => {
  try {
    const req = await postPrivateEndPoint(path, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateNews = async (id, data) => {
  try {
    const req = await putPrivateEndPoint(path, id, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteNews = async (id) => {
  try {
    const req = await deletePrivateEndPointById(path, id);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};
