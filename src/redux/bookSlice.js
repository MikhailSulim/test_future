import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks } from '../utils/bookApi';

export const searchBooks = createAsyncThunk(
  'books/search',
  async ({ searchQuery, sort }, { rejectWithValue }) => {
    try {
      const response = await fetchBooks(searchQuery, sort);
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
    error: null
  },
  reducers: {
    loadMoreBooks: (state, action) => {
    //   state.startIndex = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { loadMoreBooks } = bookSlice.actions;

export default bookSlice.reducer;