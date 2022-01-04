import {
  deletePrivateEndPointById,
  getPrivateById, patchPrivateById,
  postPrivateEndPoint,
} from './privateApiService';
import { getEndpoint } from '../Components/Services/publicApiServices';

const baseURL = 'http://ongapi.alkemy.org/api/activities';

export const getAllActivities = async () => {
  try {
    return await getEndpoint('/activities');
  } catch (error) {
    throw new Error(error);
  }
};

export const getActivityById = async (id) => {
  try {
    return await getPrivateById(baseURL, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const patchActivityById = async (id, updatedActivity) => {
  try {
    return await patchPrivateById(baseURL, id, updatedActivity);
  } catch (error) {
    throw new Error(error);
  }
};

export const addActivity = async (data) => {
  try {
    return await postPrivateEndPoint('activities', data);
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteActivity = async (id) => {
  try {
    return await deletePrivateEndPointById('activities', id);
  } catch (error) {
    throw new Error(error);
  }
};
