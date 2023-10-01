
import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    currentCars: [],
  },
  reducers: {
    setCurrentCars: (state, action) => {
      state.currentCars = action.payload;
    },
  },
});

export const { setCurrentCars } = cardsSlice.actions;
export default cardsSlice.reducer;
