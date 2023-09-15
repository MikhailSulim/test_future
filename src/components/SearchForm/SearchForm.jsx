import './SearchForm.scss';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__field">
        <input className="search-form__input" />
        <button type="submit" className="search-form__btn">
          &#128269;
        </button>
      </div>
      <div className="search-form__params">
        <div className="search-form__categories">
          <p className="search-form__categories-title">Categories</p>
          <select name="categories" className="search-form__categories-list">
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
          <select name="sort" className="search-form__categories-list">
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
