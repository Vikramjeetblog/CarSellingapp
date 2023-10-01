

import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    searchValue: '',
    selectedRelevance: 'Relevance',
    selectedModel: 'Models',
    filteredCars: [], 
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSelectedRelevance: (state, action) => {
      state.selectedRelevance = action.payload;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    
    updateFilteredCars: (state, action) => {
      state.filteredCars = action.payload;
    },
  },
});

export const {
  setSearchValue,
  setSelectedRelevance,
  setSelectedModel,
  updateFilteredCars,
} = headerSlice.actions;

export default headerSlice.reducer;
