import './ResultSection.scss';
import BookCard from '../BookCard/BookCard';
import Preloader from '../Preloader/Preloader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { useSelector } from 'react-redux';

function ResultSection() {
  const books = useSelector(state => state.books);

  return (
    <section className="results">
      {books.isLoading && <Preloader />}
      <h2 className="results__count">{`Found ${books.totalItems} books`}</h2>
      <div className="results__container">
        {books.items.map((book, idx) => (<BookCard book={book} key={idx} />))}
      </div>
      {books.totalItems !== books.items.length && <LoadMoreBtn />}
    </section>
  );
}

export default ResultSection;
