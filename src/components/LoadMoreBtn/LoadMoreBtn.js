import { loadMoreBooks } from '../../redux/bookSlice';
import './LoadMoreBtn.scss';
import { useDispatch } from 'react-redux';

function LoadMoreBtn() {
  const dispatch = useDispatch();


  const handleLoadMoreBooks = () => {
    dispatch(loadMoreBooks());
  };

  return (
    <button type="button" className="button" onClick={handleLoadMoreBooks}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
