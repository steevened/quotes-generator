import React from 'react'

const Buttom = ({ changeQuote, colors, randomColor }) => {
  return (
    <>
      <button
        style={{ background: colors[randomColor] }}
        className='randomBtn'
        onClick={changeQuote}
      >
        <i class='fa-solid fa-shuffle'></i>
      </button>
    </>
  )
}

export default Buttom
