import axios from 'axios';

const baseUrl = 'http://ongapi.alkemy.org/api/';

export const getEndpoint = async (path) => {
  try {
    const res = await axios.get(baseUrl + path);
    return res.data.data;
  } catch (error) {
    return error.data;
  }
};

export const getEndpointById = async (path, id) => {
  const res = await axios.get(`${baseUrl}${path}/${id}`);
  return res.data.data;
};
