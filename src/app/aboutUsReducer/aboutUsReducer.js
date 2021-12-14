import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import membersApiActions from "../../Services/membersService";

const aboutUsInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getAll = createAsyncThunk(
  "aboutUs/getAll",
  membersApiActions.getMembers
);

const aboutUsSlice = createSlice({
  name: "aboutUs",
  initialState: aboutUsInitialState,
  extraReducers: {
    [getAll.pending]: (state) => {
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
  },
});
export default aboutUsSlice.reducer;
