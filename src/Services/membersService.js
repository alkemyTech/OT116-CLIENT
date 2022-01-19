import * as privateServices from './privateApiService';
import * as publicServices from '../Components/Services/publicApiServices';

const path = 'members';

export const getAllMembers = async () => {
  try {
    return await publicServices.getEndpoint(path);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const getMemberById = async (id) => {
  try {
    return await publicServices.getEndpointById(path, id);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateMemberById = async (id, data) => {
  try {
    const req = await privateServices.putPrivateEndPoint(path, id, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteMemberById = async (id) => {
  try {
    const req = await privateServices.deletePrivateEndPointById(path, id);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const addMember = async (data) => {
  try {
    const req = await privateServices.postPrivateEndPoint(path, data);
    return req.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const createMember = async (body) => {
  try {
    const req = await privateServices.patchPrivateById(path, body);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const modifyMember = async (id, body) => {
  try {
    const req = await privateServices.patchPrivateById(path, id, body);
    return req;
  } catch (error) {
    throw new Error(error?.message);
  }
};
