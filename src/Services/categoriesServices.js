import * as privateServices from './privateApiService';
import * as publicServices from '../Components/Services/publicApiServices';

const path = 'categories';
const url = 'http://ongapi.alkemy.org/api/categories';

export const newCategory = async (data) => {
  try {
    const response = await privateServices.postPrivateEndPoint(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateCategory = async (id, data) => {
  try {
    const response = await privateServices.putPrivateEndPoint(path, id, data);
    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteCategory = async (id) => {
  try {
    return await privateServices.deletePrivateEndPointById(path, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getAllCategories = async (limit = null, search = null) => {
  let pathGetAll = '';
  if (!limit && !search) {
    pathGetAll = path;
  }
  if (limit && search) {
    pathGetAll = `${path}?search=${search}&limit=${limit}`;
  }
  if (limit && !search) {
    pathGetAll = `${path}?limit=${limit}`;
  }
  if (!limit && search) {
    pathGetAll = `${path}?search=${search}`;
  }
  try {
    return await publicServices.getEndpoint(pathGetAll);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getCategory = async (id) => {
  try {
    return await publicServices.getEndpointById(path, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getPrivateCategory = async (id) => {
  try {
    return await privateServices.getPrivateById(url, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};
