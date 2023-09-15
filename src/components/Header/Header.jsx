import SearchForm from '../SearchForm/SearchForm';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <SearchForm />
    </header>
  );
}

export default Header;
