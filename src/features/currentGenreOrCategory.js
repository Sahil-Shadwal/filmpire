import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    genreOrCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      console.log(action.payload);
      // state.genreOrCategoryName = action.payload;
    },
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
