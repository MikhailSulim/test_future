import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../utils/bookApi';
import { BOOKS_QUERY_QUANTITY } from '../utils/constants';

export const searchBooks = createAsyncThunk(
  'books/search',
  async ({ searchQuery, category, sort, startIndex }, { rejectWithValue }) => {
    try {
      const response = await fetchBooks(
        searchQuery,
        category,
        sort,
        startIndex
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    totalItems: 0,
    startIndex: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearState: (state) => {
      state.items = [];
      state.startIndex = 0;
      state.totalItems = 0;
    },
    loadMoreBooks: (state, action) => {
      state.startIndex += BOOKS_QUERY_QUANTITY;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.items)
          state.items = [...state.items, ...action.payload.items];
        if (state.totalItems === 0)
          state.totalItems = action.payload.totalItems;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loadMoreBooks, clearState } = bookSlice.actions;

export default bookSlice.reducer;
