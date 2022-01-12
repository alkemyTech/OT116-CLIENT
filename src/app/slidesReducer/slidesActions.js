import { createAsyncThunk } from '@reduxjs/toolkit';
import * as slidesServices from '../../Services/slidesServices';

export const createSlide = createAsyncThunk('slides/createSlide', slidesServices.newSlide);
export const updateSlide = createAsyncThunk(
  'slides/updateSlide',
  async ({ id, data }) => {
    const req = await slidesServices.updateSlide(id, data);
    return req;
  },
);
export const getAllSlides = createAsyncThunk('slides/getAllSlides', slidesServices.getAllSlides);
export const getSlide = createAsyncThunk('slides/getSlide', slidesServices.getSlide);
export const deleteSlide = createAsyncThunk('slides/deleteSlide', slidesServices.deleteSlide);
