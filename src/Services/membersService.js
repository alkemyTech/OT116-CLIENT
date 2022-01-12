import {
  deletePrivateEndPointById,
  getPrivateById,
  postPrivateEndPoint,
  putPrivateEndPoint,
} from './privateApiService';
import { getEndpoint } from '../Components/Services/publicApiServices';

const baseURL = 'http://ongapi.alkemy.org/api/members';
const path = 'members';

export const getAllMembers = async () => {
  try {
    return await getEndpoint(path);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getMemberById = async (id) => {
  try {
    return await getPrivateById(baseURL, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const addMember = async (data) => {
  try {
    const req = await postPrivateEndPoint(path, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateMemberById = async (id, data) => {
  try {
    const req = await putPrivateEndPoint(path, id, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteMemberById = async (id) => {
  try {
    const req = await deletePrivateEndPointById(path, id);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};
