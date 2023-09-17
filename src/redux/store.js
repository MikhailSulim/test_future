import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import popupReducer from './popupSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    popup: popupReducer,
  },
});

export default store;