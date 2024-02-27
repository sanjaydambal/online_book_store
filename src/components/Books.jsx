import React from 'react'
import axios from 'axios'
import { useEffect } from'react'
import { Link } from 'react-router-dom'


const Books = () => {
    const [books, setBooks] = React.useState([])

    useEffect(()=>{
        const fetchbooks = async () => {
            try {
                const res= await axios.get('http://localhost:4000/books')
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
           
        }
        fetchbooks()
    },[])
  return (
    <div>
        <h1> Sanjay's Book Store</h1>
    <div className='books'>
      {
        books.map((book) => (
          <div >
            <div className='img-container'>
        {book.cover_image && <img src={book.cover_image} alt=""/> }
    </div>
            <h1>{book.title}</h1>
            <p>Description: {book.description}</p>
            <p>Price: {book.price}</p>
          </div>
        ))
      }
     
    </div>
    <button><Link to = "/add">Add Books</Link></button>
    </div>
  )
}

export default Books
