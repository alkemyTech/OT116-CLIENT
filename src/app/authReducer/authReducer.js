import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(window.localStorage.getItem('user')) || {},
  token: window.localStorage.getItem('token') || '',
  isAuthenticated: !!window.localStorage.getItem('token'),
  status: null,
  error: null,
};

const isRegisterOrLoginFulfilled = (action) => ['auth/register/fulfilled', 'auth/login/fulfilled'].includes(action.type);
const isPending = (action) => action.type.startsWith('auth/') && action.type.endsWith('/pending');
const isRejected = (action) => action.type.startsWith('auth/') && action.type.endsWith('/rejected');

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    logout(state) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
      return {
        ...state,
        status: 'Success',
        isAuthenticated: false,
        error: null,
        user: {},
        token: '',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isRegisterOrLoginFulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        error: null,
        isAuthenticated: true,
        user: action?.payload.user,
        token: action?.payload.token,
      }))
      .addMatcher(isPending, (state) => ({
        ...state,
        status: 'Loading',
        error: null,
      }))
      .addMatcher(isRejected, (state) => (({
        ...state,
        status: 'Failed',
        error: 'Los datos ingresados son incorrectos',
      })))
      .addDefaultCase((state) => state);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
