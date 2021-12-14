import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as newsServices from "../../Services/newsServices";

const newsInitialState = {
  loading: false,
  data: [],
  error: "",
  currentNews: {
    name: "",
    content: "",
    category_id: "",
    image: "",
  },
};

export const getAll = createAsyncThunk("news/getAll", newsServices.getAll);

export const getById = createAsyncThunk("news/getById", newsServices.getById);

export const create = createAsyncThunk("news/create", newsServices.create);

export const update = createAsyncThunk("news/update", (news) =>
  newsServices.update(news.news, news.newsid)
);

export const createOrUpdate = createAsyncThunk("news/createOrUpdate", (news) =>
  newsServices.createOrUpdate(news.news, news.newsid)
);

export const deletebyId = createAsyncThunk(
  "news/delete",
  newsServices.deleteByid
);

const newsSlice = createSlice({
  name: "news",
  initialState: newsInitialState,
  reducers: {
    cleanCurrentState: (state) => {
      state.currentNews = { name: "", content: "", category_id: "", image: "" };
    },
  },
  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAll.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getById.pending]: (state) => {
      state.loading = true;
    },
    [getById.fulfilled]: (state, action) => {
      state.currentNews = action.payload;
      state.loading = false;
    },
    [getById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [create.pending]: (state) => {
      state.loading = true;
    },
    [create.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
      state.loading = false;
    },
    [create.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [update.pending]: (state) => {
      state.loading = true;
    },
    [update.fulfilled]: (state, action) => {
      const newsForUpdate = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      state.data[newsForUpdate] = action.payload;
    },
    [update.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createOrUpdate.pending]: (state) => {
      state.loading = true;
    },
    [createOrUpdate.fulfilled]: (state, action) => {
      const payloadNews = state.data.findIndex(
        (element) => element.id == action.payload.id
      );
      if (payloadNews >= 0) state.data[payloadNews] = action.payload;
      else state.data = [...state.data, action.payload];
    },
    [createOrUpdate.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deletebyId.pending]: (state) => {
      state.loading = true;
    },
    [deletebyId.fulfilled]: (state, action) => {
      state.data = state.data.filter((news) => news.id != action.meta.arg);
      state.loading = false;
    },
    [deletebyId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
export const { cleanCurrentState } = newsSlice.actions;
export default newsSlice.reducer;
