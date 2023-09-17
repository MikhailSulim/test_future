import './BookCard.scss';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/popupSlice.js';

function BookCard({ book }) {
  const dispatch = useDispatch();
  const { volumeInfo } = book;
  const { imageLinks, title, authors, categories } = volumeInfo;

  const handlePopup = () => {
    dispatch(openPopup({book}));
  };

  return (
    <div className="book" onClick={handlePopup}>
      <img className="book__img" src={imageLinks?.thumbnail} alt={title} />
      <p className="book__category">{categories?.[0] || 'N/A'}</p>
      <h3 className="book__title">{title}</h3>
      <p className="book__authors">{authors?.join(', ') || 'N/A'}</p>
    </div>
  );
}

export default BookCard;
