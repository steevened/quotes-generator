import React from 'react'
import quotes from '../quotes.json'
import Buttom from './Buttom'
import Quote from './Quote'

const QuoteBox = ({ quote, changeQuote, colors, randomColor }) => {
  return (
    <>
      <Quote quote={quote} />
      <Buttom
        changeQuote={changeQuote}
        colors={colors}
        randomColor={randomColor}
      />
    </>
  )
}

export default QuoteBox
