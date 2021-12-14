import axios from "axios";
import { alertCrudMessages as alert } from "../Utils/alertCrudMessages";

const URL = process.env.REACT_APP_ACTIVITY_URL;

export const getById = async (id) => {
  return await axios
    .get(`${URL}/${id}`)
    .then((response) => response.data.data)
    .catch(() => alert.READ_ERROR("la actividad"));
};

export const getAll = async () => {
  return await axios
    .get(`${URL}`)
    .then((response) => response.data.data)
    .catch(() => alert.READ_ERROR("las actividades"));
};
export const create = async (body) => {
  return await axios
    .post(`${URL}`, body)
    .then((response) => response.data.data)
    .catch(() => alert.CREATE_ERROR("la actividad"));
};

export const update = async (id, body) => {
  return await axios
    .put(`${URL}/${id}`, body)
    .then((response) => response.data.data)
    .catch(() => alert.UPDATE_ERROR("la actividad"));
};

export const deleteById = async (activityId) => {
  return await axios
    .delete(`${URL}/${activityId}`)
    .then((response) => response.data)
    .catch(() => alert.DELETE_ERROR("la actividad"));
};

export const createOrUpdate = async (body, activityId) => {
  if (activityId) {
    await getById(activityId);
    const data = await update(activityId, body);
    return data;
  } else if (!activityId && body) {
    const data = await create(body);
    return data;
  }
};

export const isValidList = (list) => list && list.length > 0;
