import React from 'react'
import quotes from '../quotes.json'

const Quote = ({ quote }) => {
  return (
    <>
      <h1>
        <i className='fa-solid fa-quote-left'></i>
        {quotes[quote].quote}
      </h1>
      <p>{quotes[quote].author}</p>
    </>
  )
}

export default Quote
