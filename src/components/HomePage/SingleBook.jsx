import {Link} from 'react-router-dom'

const SingleBook = ({ book, index }) => {
  return (
    <div key={index}>
      <Link to={`/book/${book.key.replace("/works/", "")}`}>
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
        <h2>{book.title}</h2>
      </Link>
    </div>
  )
}

export default SingleBook
