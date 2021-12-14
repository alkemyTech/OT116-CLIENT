import axios from 'axios';
import { showErrorAlert } from "../Utils/alerts";
import { privateGet } from './privateApiService';

const registerURL = 'http://ongapi.alkemy.org/api/register';
const loginURL = 'http://ongapi.alkemy.org/api/login';
const getAuthUserDataURL = 'http://ongapi.alkemy.org/api/auth/me';

const handleCatch = (error) =>
  showErrorAlert(error.response.data.message || error.message);

const registerUser = async (userData) => {
    try{
        const response = await axios.post(`${registerURL}`,userData);
        return response
    }catch(error){
        handleCatch(error);
    }
};

const loginUser = async (loginData) => {
    try{
        const response = await axios.post(`${loginURL}`,loginData);
        return response
    }catch(error){
        handleCatch(error)
    }
};

const getAuthUserData = async () => {
    try{
        const data = await privateGet(getAuthUserDataURL)
        return data
    }catch(error){
        handleCatch(error)
    }
};

export {
    registerUser,
    loginUser,
    getAuthUserData
};

