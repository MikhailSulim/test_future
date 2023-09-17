import './Popup.scss';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from './../../redux/popupSlice.js';

function Popup() {
  const dispatch = useDispatch();

  const popup = useSelector(state => state.popup);
  const isOpen = popup.isOpen;
  const { volumeInfo } = popup.book;
  const { imageLinks, title, authors, categories, description } = volumeInfo;

  const handleClose = () => {
    dispatch(closePopup());
  }

  return (
    (<div className={`popup ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <button type='button ' className='popup__close-btn' onClick={handleClose}>&#10006;</button>
        <div className='popup__content'>
          <div className='popup__column'>
            <img className='popup__img' src={imageLinks?.thumbnail || ''} alt={title} />
            <p className='popup__authors'>{authors?.join(', ') || 'N/A'}</p>
            <p className='popup__categories'>{categories || 'N/A'}</p>
          </div>
          <div className='popup__column'>
            <h2 className='popup__title'>{title}</h2>
            <p className='popup__description'>{description}</p>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default Popup;
