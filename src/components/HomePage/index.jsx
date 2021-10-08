import { useState, useEffect } from "react"
import axios from "axios"
import { fetchSearchQuery } from '../../api/axios'
import SingleBook from './SingleBook'

const HomePage = () => {
  const [search, setSearch] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const updateSearch = e => setSearch(e.target.value)

  useEffect(() => {
    fetchSearchQuery(search, setLoading, setBooks, setError)
  }, [search])

  return (
    <div className="page">
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={updateSearch}
      />
      <div className="books">
        {books && search && !loading && books.map((book, index) => (
            <SingleBook book={book} index={index} />
          ))}
        {loading && search && (
          <h3>Loading...</h3>
        )}
        {!search && !loading && (
          <h3>Please enter a search above</h3>
        )}
      </div>
    </div>
  )
}

export default HomePage
