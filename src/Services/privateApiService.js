import axios from "axios";

const config = {
  headers: {
    Group: 91, //Aqui va el ID del equipo!!
  },
};
const getAuthorizationHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  return { Authorization: `Bearer: ${token}` };
};

const axiosInstance = axios.create({
  baseURL: "http://ongapi.alkemy.org/private/api",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = getAuthorizationHeader();
  config.headers.Group = 91;
  return config;
});

const privateGet = async (url, id, params = {}) => {
  const idPlaceholder = id ? `/${id}` : "";
  const { data } = axiosInstance.get(`${url}${idPlaceholder}`, { params });
  return data;
};

const privatePut = async (url, id, params) => {
  const { data } = await axiosInstance.put(`${url}${id}`, params);
  return data;
};

const privateDelete = async (url, id) => {
  const getAuthorization = getAuthorizationHeader();
  if (!getAuthorization.Authorization) return;
  else {
    return await axios
      .delete(url, id, {
        headers: getAuthorization,
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }
};

const privatePost = async (url, data) => {
  const authorizationHeader = getAuthorizationHeader();
  if (!authorizationHeader.Authorization) throw new Error("No token");
  return await axios
    .post(url, data, {
      headers: authorizationHeader,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export {
  privatePost,
  Get,
  getAuthorizationHeader,
  privateGet,
  privateDelete,
  privatePut,
};
