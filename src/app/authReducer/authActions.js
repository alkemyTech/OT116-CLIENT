import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../Services/authService';

export const register = createAsyncThunk('auth/register', registerUser);

export const login = createAsyncThunk('auth/login', loginUser);
