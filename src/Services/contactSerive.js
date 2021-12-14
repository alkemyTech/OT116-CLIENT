import axios from "axios";
import { showErrorAlert } from "../Utils/alerts";
const URL = process.env.REACT_APP_API_URL_CONTACT;

export const getContactId = async (contactId) => {
  try {
    let { data } = await axios.get(`${URL}/${contactId}`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const getContactsAll = async () => {
  try {
    let { data } = await axios.get(`${URL}`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const modifyContact = async (contactId, body) => {
  try {
    let { data } = await axios.put(`${URL}/${contactId}`, body);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const createContact = async (body) => {
  try {
    let { data } = await axios.post(`${URL}`, body);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const deleteContac = async (contactId) => {
  try {
    let { data } = await axios.delete(`${URL}/${contactId}`);
    return data;
  } catch (err) {
    showErrorAlert(err);
  }
};

export const createOrUpdateContact = async (contactId, body) => {
  try {
    if (contactId) {
      let { data } = await getContactId(contactId);
      data && modifyContact(contactId, body);
    } else createContact(body);
  } catch (err) {
    showErrorAlert(err);
  }
};
