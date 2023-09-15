import BookCard from '../BookCard/BookCard';
import './ResultSection.scss';

function ResultSection() {
  return (
    <section className="results">
      <h2 className="results__count">Found 555 books</h2>
      <div className="results__container">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>
      </div>
    </section>
  );
}

export default ResultSection;
