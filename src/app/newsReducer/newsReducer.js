import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import {
  getNews,
  getById,
  createNews,
  updateNewsById,
  deleteNewsById,
} from './newsActions';

const initialState = {
  status: null,
  news: [],
  newsItem: {},
  error: null,
};

const newsSlice = createSlice({
  name: 'newsReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        news: action.payload,
        error: null,
      }))
      .addCase(getById.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        newsItem: action.payload,
        error: null,
      }))
      .addCase(createNews.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        news: state.news.concat(action.payload),
        error: null,
      }))
      .addCase(updateNewsById.fulfilled, (state, action) => {
        const updatedNews = state.news.map((newsItem) => (
          newsItem.id === action.payload.id
            ? action.payload
            : newsItem
        ));
        return {
          ...state,
          status: 'Success',
          news: updatedNews,
          error: null,
        };
      })
      .addCase(deleteNewsById.fulfilled, (state, action) => ({
        ...state,
        status: 'success',
        news: action.payload,
        error: null,
      }))
      .addMatcher(isPending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addMatcher(isRejected, (state, action) => ({
        ...state,
        status: 'rejected',
        error: action?.error.message,
      }))
      .addDefaultCase((state) => state);
  },

});

export default newsSlice.reducer;
