import axios from "axios";
import Swal from 'sweetalert2';
import { showErrorAlert } from "../Utils/alerts";

const baseURL = process.env.REACT_APP_BASE_URL_SLIDES;
const handleCatch = (error) => showErrorAlert(error.response.data.message || error.message);

const getSlides = async () => {
  const response = await axios.get(`${baseURL}`);
  return(response.data.data);
};

const getImagesSlides = async () => {
  try {
    const res = await getSlides();
    const dataImage = res.filter(
      (item) => item.image !== null && item.image !== ""
    );
    return dataImage;
  } catch (err) {
    handleCatch(err);
  }
};

const CreateSlide = async (data) => {
  try {
    const response = await axios.post(`${baseURL}`,data)
    Swal.fire('Slide Creado!')
    return response
  } catch (error) {
    handleCatch(error)
  }
}
const EditSlide = async (id,data) => {
  try{
    const response = await axios.put(`${baseURL}/${id}`,data)
    return response;
  }catch(error){
    handleCatch(error)
  }
}

const GetSlidesById = async (id) => {
  try {
    const data = await axios.get(`${baseURL}/${id}`)
    return data
  }catch (error) {
    handleCatch(error)
  }
}
const DeleteSlide = async (id) => {
  try{
    const slideToDelete = await axios.delete(`${baseURL}/${id}`)
    return slideToDelete
  }catch(error) {
    handleCatch(error)
  }
}

export {CreateSlide, EditSlide, GetSlidesById, DeleteSlide, getSlides, getImagesSlides };
