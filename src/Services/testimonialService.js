import axios from 'axios';
const URL = process.env.REACT_APP_API_URL_TESTIMONIALS;
import { AlertError } from '../Components/common/alerts/Alerts';

export const getAllTestimonial = async () => {
    try {
        let  {data}= await axios.get(`${URL}`);
        return data.data;
    } catch (error) {
        AlertError(error.response.status,error.response.data.message);
        return {success:false};
    };
};

export const getTestimonial = async (id) => {
    try {
        let  {data}= await axios.get(`${URL}/${id}`);
        return data;
    } catch (error) {
        AlertError(error.response.status,error.response.data.message);
        return {success:false};
    };
};

export const modifyTestimonial = async (id,body) => {
    try {
        let  {data}= await axios.put(`${URL}/${id}`,body);
        return data;
    } catch (error) {
        AlertError(error.response.status,error.response.data.message);
        return {success:false};
    }
};

export const createTestimonial = async (body) => {
    try {
        let data= await axios.post(`${URL}`,body);
        return data;
    }catch(error){
        AlertError(error.response.status,error.response.data.message);
        return {success:false};
    };
};

export const createOrUpdateTestimonial = async (testimonialId,body)=>{
    if(testimonialId){
        let data= await getTestimonial(testimonialId);
        data.success && modifyTestimonial(testimonialId,body);
    }else createTestimonial(body);
};
