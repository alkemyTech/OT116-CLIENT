import { createSlice } from '@reduxjs/toolkit';
import {modifyElement, removeElement} from '../../Utils/functionsState';
import {createUser, updateUser, getAllUser, getUser, deleteUser} from './usersAccion';

const initialState = {
   status:null,
   users:[],
   user:{}
};

const userSlice = createSlice({
    name:"userReducer",
    initialState,
    extraReducers: {
        [getAllUser.pending]:(state) =>{
            state.status = 'loading'
        },
        [getAllUser.fulfilled] :(state, {payload}) =>{
            state.status = 'success',
            state.users= payload
        },
        [getAllUser.rejected] :(state) =>{
            state.status = 'failed'
        },
        [getUser.pending]:(state) =>{
            state.status = 'loading'
        },
        [getUser.fulfilled] :(state, {payload}) =>{
            state.status = 'success',
            state.user= payload
        },
        [getUser.rejected] :(state) =>{
            state.status = 'failed'
        },
        [createUser.pending]:(state) =>{
            state.status = 'loading'
        },
        [createUser.fulfilled] :(state, {payload}) =>{
            state.status = 'success',
            state.users= [...state.users, payload]
        },
        [createUser.rejected] :(state) =>{
            state.status = 'failed'
        },
        [updateUser.pending]:(state) =>{
            state.status = 'loading'
        },
        [updateUser.fulfilled] :(state, {payload}) =>{
            state.status = 'success',
            state.users= modifyElement([...state.users],payload)
        },
        [updateUser.rejected] :(state) =>{
            state.status = 'failed'
        },
        [deleteUser.pending]:(state) =>{
            state.status = 'loading'
        },
        [deleteUser.fulfilled] :(state, {payload}) =>{
            state.status = 'success',
            state.users= removeElement([...state.users],payload)
        },
        [deleteUser.rejected] :(state) =>{
            state.status = 'failed'
        },
    },
});


export default userSlice.reducer;
