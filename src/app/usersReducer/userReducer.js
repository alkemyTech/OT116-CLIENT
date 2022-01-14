import { createSlice } from '@reduxjs/toolkit';
import {
  createUser, deleteUser, getAllUser, getUser, updateUser,
} from './usersActions';

const initialState = {
  status: null,
  users: [],
  user: {},
  error: null,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // get all users
      .addCase(getAllUser.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        users: action.payload,
      }))
      // get user by id
      .addCase(getUser.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        user: action.payload,
      }))
      // update user
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUsers = state.users.map((user) => (
          user.id === action.payload.id
            ? action.payload
            : user
        ));
        return {
          ...state,
          status: 'Success',
          users: updatedUsers,
        };
      })
      // create user
      .addCase(createUser.fulfilled, (state, action) => ({
        ...state,
        status: 'Success',
        users: state.users.concat(action.payload),
      }))
      // delete user
      .addCase(deleteUser.fulfilled, (state) => ({
        ...state,
        status: 'Success',
      }))
      // action rejected or pending:
      .addMatcher((action) => action.type.includes('/pending'), (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addMatcher((action) => action.type.includes('/rejected'), (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'Failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default userSlice.reducer;
