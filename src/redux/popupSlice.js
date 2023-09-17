import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false,
    book: {volumeInfo: {title: '', imageLinks:'', authors:[], categories:[], description:'' } },
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.book = action.payload.book;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.book = {volumeInfo: {title: '', imageLinks:'', authors:[], categories:[], description:'' } };
    },
  },
});

export default popupSlice.reducer;
export const { openPopup, closePopup } = popupSlice.actions;
