import './SearchForm.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchBooks } from '../../redux/bookSlice';

function SearchForm() {

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchBooks({ searchQuery, sort }));
  }

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-form__field">
        <input
          className="search-form__input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit" className="search-form__btn">
          &#128269;
        </button>
      </div>
      <div className="search-form__params">
        <div className="search-form__categories">
          <p className="search-form__categories-title">Categories</p>
          <select
            name="category"
            className="search-form__categories-list"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className="search-form__categories">
          <p className="search-form__categories-title">Sorting&#160;by</p>
          <select
            name="sort"
            className="search-form__categories-list"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
