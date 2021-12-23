import axios from 'axios';

const baseUrl = 'http://ongapi.alkemy.org/api/';

export const getEndpoint = async (path) => {
  const res = await axios.get(baseUrl + path);
  return res.data.data;
};

export const getEndpointById = async (path, id) => {
  const res = await axios.get(`${baseUrl}${path}/${id}`);
  return res.data.data;
};

export const postToEndpoint = async (path, data) => {
  await axios.post((baseUrl + path), data);
};
