import * as privateServices from './privateApiService';
import * as publicServices from '../Components/Services/publicApiServices';

const path = 'slides';
const url = 'http://ongapi.alkemy.org/api/slides';

export const newSlide = async (data) => {
  try {
    const response = await privateServices.postPrivateEndPoint(path, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateSlide = async (id, data) => {
  try {
    const response = await privateServices.putPrivateEndPoint(path, id, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteSlide = async (id) => {
  try {
    return await privateServices.deletePrivateEndPointById(path, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllSlides = async () => {
  try {
    return await publicServices.getEndpoint(path);
  } catch (error) {
    throw new Error(error);
  }
};

export const getSlide = async (id) => {
  try {
    return await publicServices.getEndpointById(path, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const getPrivateSlide = async (id) => {
  try {
    return await privateServices.getPrivateById(url, id);
  } catch (error) {
    throw new Error(error);
  }
};

export const patchSlide = async (id, data) => {
  try {
    return await privateServices.patchPrivateById(url, id, data);
  } catch (error) {
    throw new Error(error);
  }
};
