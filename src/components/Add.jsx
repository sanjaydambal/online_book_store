import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Add = () => {
    const [book, setBook] = React.useState({
        title: '',
      description: '',
      price: '',
      image: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
      try {
        await axios.post('http://localhost:4000/books', book)
        console.log('New book added')
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add New Book</h1>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name='title' onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name='description' onChange={handleChange} />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name='price' onChange={handleChange} />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name='image' onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default Add
