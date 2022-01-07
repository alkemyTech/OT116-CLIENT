import { createSlice } from '@reduxjs/toolkit';
import * as categoriesActions from './categoriesActions';

const initialState = {
  status: null,
  categories: [],
  category: {},
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categoriesReducer',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      // get Categories case
      .addCase(categoriesActions.getAllCategories.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        categories: action.payload,
        error: null,
      }))
      // get Category case
      .addCase(categoriesActions.getCategory.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        category: action.payload,
        error: null,
      }))
      // update Category Case
      .addCase(categoriesActions.updateCategory.fulfilled, (state, action) => {
        const updatedCategories = state.categories.map((category) => (
          category.id === action.payload.id
            ? action.payload
            : category
        ));
        return {
          ...state,
          status: 'succeeded',
          categories: updatedCategories,
          error: null,
        };
      })
      // create Category Case
      .addCase(categoriesActions.createCategory.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        categories: state.categories.concat(action.payload),
        error: null,
      }))
      // delete Category Case
      .addCase(categoriesActions.deleteCategory.fulfilled, (state) => ({
        ...state,
        status: 'succeeded',
        error: null,
      }))
      // when a action is rejected or pending:
      .addMatcher((action) => action.type.includes('/pending'), (state) => ({
        ...state,
        status: 'loading',
        error: null,
      }))
      .addMatcher((action) => action.type.includes('/rejected'), (state, action) => ({
        ...state,
        error: action?.error.message,
        status: 'failed',
      }))
      .addDefaultCase((state) => state);
  },
});

export default categoriesSlice.reducer;
