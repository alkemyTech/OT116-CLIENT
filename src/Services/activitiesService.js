import {
  deletePrivateEndPointById,
  getPrivateById,
  patchPrivateById,
  postPrivateEndPoint,
  putPrivateEndPoint,
} from './privateApiService';
import { getEndpoint } from '../Components/Services/publicApiServices';

const baseURL = 'http://ongapi.alkemy.org/api/activities';

export const getAllActivities = async () => {
  try {
    return await getEndpoint('activities');
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
    const req = await postPrivateEndPoint('activities', data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteActivityById = async (id) => {
  try {
    const req = await deletePrivateEndPointById('activities', id);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateActivityById = async (id, data) => {
  try {
    const req = await putPrivateEndPoint('activities', id, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};