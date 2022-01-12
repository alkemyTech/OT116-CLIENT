import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllNews,
  getNewsById,
  addNews,
  updateNews,
  deleteNews,
} from '../../Services/newsService';

export const getNews = createAsyncThunk('news/getNews', getAllNews);
export const getById = createAsyncThunk('news/getById', getNewsById);
export const createNews = createAsyncThunk('news/createNews', addNews);
export const updateNewsById = createAsyncThunk('news/updateNewsById', async ({ id, data }) => {
  const req = await updateNews(id, data);
  return req;
});
export const deleteNewsById = createAsyncThunk('news/deleteNewsById', deleteNews);
