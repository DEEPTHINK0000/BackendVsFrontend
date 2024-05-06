import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    axios.get('/api/quotes')
    .then((response) => {
      setQuotes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Quotes</h1>
      <p>Quotes: {quotes.length} </p>
      {
        quotes.map((quotes, index) => (
          <div key={quotes.id}>
            <h3> {quotes.title} </h3>
            <p> {quotes.content} </p>
          </div>
        ))
      }
    </>
  )
}

export default App
