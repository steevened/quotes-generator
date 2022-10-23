import React from 'react'
import Button from './Button'
import Quote from './Quote'

const QuoteBox = ({ quote, changeQuote, colors, randomColor }) => {
  return (
    <>
      <Quote quote={quote} />
      <Button
        changeQuote={changeQuote}
        colors={colors}
        randomColor={randomColor}
      />
    </>
  )
}

export default QuoteBox
