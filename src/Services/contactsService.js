import { getEndpoint } from '../Components/Services/publicApiServices';
import {
  deletePrivateEndPointById,
  getPrivateById,
  postPrivateEndPoint,
  putPrivateEndPoint,
} from './privateApiService';

const path = 'contacts';
const baseURL = `http://ongapi.alkemy.org/api/${path}`;

export const getAllContacts = async () => {
  try {
    return await getEndpoint(path);
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const getContactById = async (id) => {
  try {
    return await getPrivateById(baseURL, id);
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const updateContactById = async (id, data) => {
  try {
    const req = await putPrivateEndPoint(path, id, data);
    return req.data;
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const addContact = async (data) => {
  try {
    const req = await postPrivateEndPoint(path, data);
    return req.data;
  } catch (err) {
    throw new Error(err?.message);
  }
};

export const deleteContactById = async (id) => {
  try {
    return await deletePrivateEndPointById(path, id);
  } catch (err) {
    throw new Error(err?.message);
  }
};
