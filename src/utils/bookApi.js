import axios from 'axios';

const API_KEY = 'AIzaSyBmBFBz52Du9oMBq9Sahror7nII57IN-v0';

export const fetchBooks = async (searchQuery, sort) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes',
      {
        params: {
          q: searchQuery,
          orderBy: sort,
          maxResults: 30,
          key: API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};
