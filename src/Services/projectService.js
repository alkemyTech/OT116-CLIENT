import axios from 'axios';

const URL = 'http://ongapi.alkemy.org/public/api';

export const getProject = async (id) => {
    let {data}= await axios.get(`${URL}/projects/${id}`);
    return data;
};

export const modifyProject = async (id,body) => {
    let {data}= await axios.put(`${URL}/projects/${id}`,body);
    return data;
};

export const createProject = async (body) => {
    let {data}= await axios.post(`${URL}/projects`,body);
    return data;
};

export const createOrUpdateProject = (projectId,body)=>{
    projectId ? modifyProject(projectId,body) : createProject(body)
};
