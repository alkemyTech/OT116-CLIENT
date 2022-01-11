import { createSlice } from '@reduxjs/toolkit';
import * as slidesActions from './slidesActions';

const initialState = {
  status: null,
  slides: [],
  slide: {},
  error: null,
};

const isPending = (action) => action.type.startsWith('slides/') && action.type.endsWith('/pending');
const isRejected = (action) => action.type.startsWith('slides/') && action.type.endsWith('/rejected');

const slidesSlice = createSlice({
  name: 'slidesReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // get Slides case
      .addCase(slidesActions.getAllSlides.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        slides: action.payload,
        error: null,
      }))
      // get Slide case
      .addCase(slidesActions.getSlide.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        slide: action.payload,
        error: null,
      }))
      // update Slide Case
      .addCase(slidesActions.updateSlide.fulfilled, (state, action) => {
        const updatedSlides = state.slides.map((slide) => (
          slide.id === action.payload.id
            ? action.payload
            : slide
        ));
        return {
          ...state,
          status: 'succeeded',
          slides: updatedSlides,
          error: null,
        };
      })
      // create Slide Case
      .addCase(slidesActions.createSlide.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        slides: state.slides.concat(action.payload),
        error: null,
      }))
      // delete Slide Case
      .addCase(slidesActions.deleteSlide.fulfilled, (state) => ({
        ...state,
        status: 'succeeded',
        error: null,
      }))
      // when a action is rejected or pending:
      .addMatcher(isPending, (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addMatcher(isRejected, (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default slidesSlice.reducer;
