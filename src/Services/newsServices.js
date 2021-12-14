import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";

const URL = process.env.REACT_APP_API_URL_NEWS;
const handleCatch = (error) =>
  showErrorAlert(error.response.data.message || error.message);

export const getAll = async () => {
  try {
    const response = await axios.get(URL);
    const data = response.data.data;
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

export const getById = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const update = async (news, newsid) => {
  try {
    const data = await axios.put(`${URL}/${newsid}`, news);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const create = async (news) => {
  try {
    const data = await axios.post(URL, news);
    return data.data.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const createOrUpdate = async (news, newsid) => {
  try {
    const idExist = (await newsid) && getById(newsid);
    if (idExist) {
      const data = await update(news, newsid);
      return data;
    } else if (!idExist && news) {
      const data = await create(news);
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteByid = async (id) => {
  try {
    const data = await axios.delete(`${URL}/${id}`);
    return data;
  } catch (error) {
    handleCatch(error);
  }
};

export const createNewsObject = (id, name, image, createdAt) => ({
  id,
  name,
  image,
  createdAt,
});
