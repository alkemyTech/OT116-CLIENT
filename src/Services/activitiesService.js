import {
  deletePrivateEndPointById,
  getPrivateById,
  patchPrivateById,
  postPrivateEndPoint,
  putPrivateEndPoint,
} from './privateApiService';
import { getEndpoint } from '../Components/Services/publicApiServices';

const path = 'activities';
const baseURL = `http://ongapi.alkemy.org/api/${path}`;

export const getAllActivities = async () => {
  try {
    return await getEndpoint(path);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getActivityById = async (id) => {
  try {
    return await getPrivateById(baseURL, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const patchActivityById = async (id, data) => {
  try {
    return await patchPrivateById(baseURL, id, data);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const addActivity = async (data) => {
  try {
    const req = await postPrivateEndPoint(path, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteActivityById = async (id) => {
  try {
    const req = await deletePrivateEndPointById(path, id);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateActivityById = async (id, data) => {
  try {
    const req = await putPrivateEndPoint(path, id, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const searchActivityByTitle = async (name) => {
  try {
    const searchPath = `${path}?search=${name}`;
    const req = await getEndpoint(searchPath);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};
