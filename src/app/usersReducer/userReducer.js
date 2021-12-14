import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status:null,
   users:[],
   user:{}
};

const userSlice = createSlice({
    name:"userReducer",
    initialState
});


export default userSlice.reducer;
