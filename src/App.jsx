import './App.scss';

function App() {
  return (
    <div className="app">
      <section className="search">
        <h1 className="search__title">Search for books</h1>
        <form className="search__form">
          <div className='search__field'>
            <input className="search__input" />
            <button type='submit' className="search__btn">&#128269;</button>
          </div>
          <div className='search__params'>
            <div className='search__categories'>
              <p className='search__categories-title'>Categories</p>
              <select name='categories' className='search__categories-list'>
                <option value='all'>all</option>
                <option value='art'>art</option>
                <option value='biography'>biography</option>
                <option value='computers'>computers</option>
                <option value='history'>history</option>
                <option value='medical'>medical</option>
                <option value='poetry'>poetry</option>
              </select>
            </div>
            <div className='search__categories'>
              <p className='search__categories-title'>Sorting&#160;by</p>
              <select name='sort' className='search__categories-list' >
                <option value='relevance' >relevance</option>
                <option value='newest' >newest</option>
              </select>
            </div>


          </div>
        </form>
      </section>
      <section className='results'>

      </section>
    </div>
  );
}

export default App;
