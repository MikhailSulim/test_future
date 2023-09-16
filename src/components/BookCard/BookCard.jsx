import './BookCard.scss';

function BookCard({ book }) {
  const { volumeInfo } = book;
  const { imageLinks, title, authors, categories } = volumeInfo;

  return (
    <div className="book">
      <img className="book__img" src={imageLinks?.thumbnail} alt={title} />
      <p className="book__category">{categories?.[0] || 'N/A'}</p>
      <h3 className="book__title">{title}</h3>
      <p className="book__authors">{authors?.join(', ') || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
