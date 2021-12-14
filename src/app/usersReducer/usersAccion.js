import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit';

const URL ='http://ongapi.alkemy.org/api/users';

export const createUser = createAsyncThunk(
  "users/createUser",
  async (user) => {
    const { data } =await axios.post(`${URL}`,user);
    return data.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({id,user}) => {
    const { data } = await axios.put( `${URL}/${id}`, user);
    return data.data;
  }
);

export const getAllUser =  createAsyncThunk(
  "users/getAllUser",
  async () => {
    const { data } = await axios.get(`${URL}`);
    return data.data;
  }
);

export const getUser =  createAsyncThunk(
  "users/getUser",
  async (id) => {
    const { data } = await axios.get(`${URL}/${id}`);
    return data.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    const { data } = await axios.delete(`${URL}/${id}`);
    return id
  }
);
