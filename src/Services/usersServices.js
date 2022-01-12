import * as privateServices from './privateApiService';
import * as publicServices from '../Components/Services/publicApiServices';

const path = 'users';

export const getAllUsers = async () => {
  try {
    return await publicServices.getEndpoint(path);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const postUser = async (data) => {
  try {
    const response = await privateServices.postPrivateEndPoint(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getUserById = async (id) => {
  try {
    return await publicServices.getEndpointById(path, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await privateServices.putPrivateEndPoint(path, id, data);
    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await privateServices.deletePrivateEndPointById(path, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};
