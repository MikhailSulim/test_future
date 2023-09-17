import './ResultSection.scss';
import BookCard from '../BookCard/BookCard';
import Preloader from '../Preloader/Preloader';
import { useSelector } from 'react-redux';

function ResultSection() {
  const books = useSelector(state => state.books);

  return (
    <section className="results">
      {books.isLoading
        ? <Preloader />
        : <>
          <h2 className="results__count">{`Found ${books.totalItems} books`}</h2>
          <div className="results__container">
            {books.items.map(book => (<BookCard book={book} key={book.id} />))}
          </div>
        </>
      }
    </section>
  );
}

export default ResultSection;
