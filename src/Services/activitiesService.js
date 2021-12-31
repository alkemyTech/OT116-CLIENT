import { getPrivateById, patchPrivateById } from './privateApiService';
import { getEndpoint } from '../Components/Services/publicApiServices';

const baseURL = 'http://ongapi.alkemy.org/api/activities';

export const getAllActivities = async () => {
  try {
    return await getEndpoint('activities');
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

export const updateActivityById = async (id, updatedActivty) => {
  try {
    return await patchPrivateById(baseURL, id, updatedActivty);
  } catch (error) {
    throw new Error(error);
  }
};
