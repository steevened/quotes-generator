import React from 'react'

const Button = ({ changeQuote, colors, randomColor }) => {
  return (
    <button
      style={{ background: colors[randomColor] }}
      className='randomBtn'
      onClick={changeQuote}
    >
      <i className='fa-solid fa-shuffle'></i>
    </button>
  )
}

export default Button
