import axios from 'axios';
import { BOOK_API_URL, BOOKS_QUERY_QUANTITY } from './constants';

export const fetchBooks = async (searchQuery, category, sort, startIndex) => {
  const query =
    category === 'all' ? searchQuery : `${searchQuery}+subject:${category}`;

  try {
    const response = await axios.get(BOOK_API_URL, {
      params: {
        q: query,
        orderBy: sort,
        startIndex,
        maxResults: BOOKS_QUERY_QUANTITY,
        key: process.env.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};
