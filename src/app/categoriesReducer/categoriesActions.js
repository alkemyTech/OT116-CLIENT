import { createAsyncThunk } from '@reduxjs/toolkit';
import * as categoriesServices from '../../Services/categoriesServices';

export const createCategory = createAsyncThunk('categories/createCategory', categoriesServices.newCategory);
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ id, data }) => {
    const req = await categoriesServices.updateCategory(id, data);
    return req;
  },
);
export const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async ({ search, limit }) => {
    const req = await categoriesServices.getAllCategories(limit, search);
    return req;
  },
);
export const getCategory = createAsyncThunk('categories/getCategory', categoriesServices.getCategory);
export const deleteCategory = createAsyncThunk('categories/deleteCategory', categoriesServices.deleteCategory);
