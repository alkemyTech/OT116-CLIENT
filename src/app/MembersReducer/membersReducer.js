import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import membersApiActions from '../../Services/membersService'

const membersInitialState = {
  loading: false,
  data: [],
  error: "",
  currentMember:{
   name: "",
  description: "",
  facebookUrl: ""
  },
};

export const getAll = createAsyncThunk("news/getAll", membersApiActions.getMembers);
export const getById = createAsyncThunk("news/getById", membersApiActions.getMember);
export const create = createAsyncThunk("news/create", membersApiActions.createMember);
export const update = createAsyncThunk("news/update", membersApiActions.updateMember);
export const deletebyId = createAsyncThunk("news/delete", membersApiActions.removeMember );

const membersSlice = createSlice({
  name: "members",
  initialState: membersInitialState,
  extraReducers: {
    [getAll.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getAll.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [getAll.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [getById.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getById.fulfilled]: (state, action) => {
      return {
        ...state,
        currentNew: action.payload,
        loading: false,
      };
    },
    [getById.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [create.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [create.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    },
    [create.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [update.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [update.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [
          state.data.map((element) =>
            element.id === action.payload.id ? action.payload : element
          ),
        ],
        loading: false,
      };
    },
    [update.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
    [deletebyId.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deletebyId.fulfilled]: (state, action) => {
      return {
        ...state,
        data: [...state.data.filter((id) => id !== action.payload)],
        loading: false,
      };
    },
    [deletebyId.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
  },
});
export default membersSlice.reducer;
