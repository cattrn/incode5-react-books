import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchBook} from '../../api/axios'

const IndividualBook = () => {
  const {id} = useParams()
  const [book, setBook] = useState({})

  useEffect(() => {
    fetchBook(id, setBook)
  }, [id])

  console.log(book)

  return (
    <h1>Book ID: {id}</h1>
  )
}

export default IndividualBook