import './BookCard.scss';

function BookCard({ book }) {


  return (
    <div className="book">
      <img className="book__img" src={'http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'} alt={''} />
      <h3 className="book__title">dsdgsdgd</h3>
      <p className="book__category">Category: sfsfsdfdsf</p>
      <p className="book__authors">Authors: sfsgsdsdg</p>


    </div>
  );
}

export default BookCard;
