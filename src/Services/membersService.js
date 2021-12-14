import axios from "axios";
import { getAuthorizationHeader } from "./privateApiService";

const baseURL = process.env.REACT_APP_API_URL_MEMBERS;
const authorizationHeader = { headers: getAuthorizationHeader() };
const getMembers = async () => {
  const  response  = await axios.get(`${baseURL}`, authorizationHeader);
  return response.data.data
};

const createMember = (data) => {
  const response = axios.post(`${baseURL}`, data, authorizationHeader);
  return response;
};

const getMember = (id) => {
  const response = axios.get(`${baseURL}/${id}`, authorizationHeader);
  return response;
};

const updateMember = (id, data) => {
  const response = axios.put(`${baseURL}/${id}`, data, authorizationHeader);
  return response;
};

const removeMember = (id) => {
  const response = axios.delete(`${baseURL}/${id}`, authorizationHeader);
  return response;
};

const membersApiActions = {
  getMembers,
  createMember,
  getMember,
  updateMember,
  removeMember,
};

export default membersApiActions;

