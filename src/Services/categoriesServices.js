import * as privateServices from './privateApiService';
import * as publicServices from '../Components/Services/publicApiServices';

const path = 'categories';
const url = 'http://ongapi.alkemy.org/api/categories';

export const newCategory = async (data) => {
  try {
    const response = await privateServices.postPrivateEndPoint(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateCategory = async (id, data) => {
  try {
    const response = await privateServices.putPrivateEndPoint(path, id, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    return await privateServices.deletePrivateEndPointById(path, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllCategories = async (limit = null, search = null) => {
  const pathGetAll = `${path}/${search ? `search=${search}` : ''}&${limit ? `limit=${limit}` : ''}`;
  try {
    return await publicServices.getEndpoint(pathGetAll);
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategory = async (id) => {
  try {
    return await publicServices.getEndpointById(path, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const getPrivateCategory = async (id) => {
  try {
    return await privateServices.getPrivateById(url, id);
  } catch (error) {
    throw new Error(error);
  }
};
