import { showErrorAlert } from "./alerts";

const CREATE_ERROR = (element) => {
  return showErrorAlert(`No hemos podido crear ${element}`);
};
const READ_ERROR = (element) => {
  return showErrorAlert(`No hemos podido leer ${element}`);
};
const UPDATE_ERROR = (element) => {
  return showErrorAlert(`No hemos podido actualizar ${element}`);
};
const DELETE_ERROR = (element) => {
  return showErrorAlert(`No hemos podido eliminar ${element}`);
};

export const alertCrudMessages = {
  CREATE_ERROR,
  READ_ERROR,
  UPDATE_ERROR,
  DELETE_ERROR,
};
