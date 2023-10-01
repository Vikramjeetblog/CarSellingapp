
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';
import paginationReducer from './paginationSlice';
import headerReducer from './headerSlice';

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        pagination: paginationReducer,
        header: headerReducer,

    },
});

export default store;
