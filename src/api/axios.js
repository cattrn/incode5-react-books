import axios from 'axios'

export const fetchSearchQuery = async (search, setLoading, setBooks, setError) => {
  // TODO: cancel previous request if currently loading: https://www.npmjs.com/package/axios#cancellation
  try {
    if (search) {
      setLoading(true)
      const { data } = await axios.get(
        `https://openlibrary.org/search.json?title=${search
          .trim()
          .toLowerCase()
          .replace(/ /g, "+")}`
      )
      setBooks(data.docs)
      setLoading(false)
    }
  } catch (error) {
    setError(error)
  }
}

export const fetchBook = async (id, setBook) => {
  try {
    const { data } = await axios.get(`https://openlibrary.org/works/${id}.json`)
    setBook(data)
  } catch (error) {
    console.log(error)
    return error.message
  }
}