import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: false,
    token: localStorage.getItem('token')??"",
    userData: {}
};

const simpleState = key => (state, { payload }) => {
    state[key] = payload;
};

const localState = key => (state, { payload }) => {
    localStorage.setItem([key], payload);
    state[key] = payload;
};

const authSlice = createSlice({
    name:"authReducer",
    initialState,
    reducers: {
        logout: () => {
            state.isLogged = false;
            state.token = "";
            localStorage.removeItem('token');
            state.userData = {};
        },
        setUserData: simpleState('userData'),
        setToken: localState('token'),
        setIsLogged: simpleState('isLogged')
    }
});

export const {
    logout,
    setToken,
    setUserData,
    setIsLogged
} = authSlice.actions;

export default authSlice.reducer;
