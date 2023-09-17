import './ResultSection.scss';
import BookCard from '../BookCard/BookCard';
import Preloader from '../Preloader/Preloader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { useSelector } from 'react-redux';
import { BOOKS_QUERY_QUANTITY } from '../../utils/constants';

function ResultSection() {
  const books = useSelector(state => state.books);

  return (
    <section className="results">
      {books.isLoading && <Preloader />}
      <h2 className="results__count">{`Found ${books.totalItems} books`}</h2>
      <div className="results__container">
        {books.items.map(book => (<BookCard book={book} key={book.id} />))}
      </div>
      {books.totalItems >= books.items.length + BOOKS_QUERY_QUANTITY && <LoadMoreBtn />}
    </section>
  );
}

export default ResultSection;
