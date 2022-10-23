import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const outsideRandom = Math.floor(Math.random() * quotes.length)

  const [quote, setQuote] = useState(outsideRandom)

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setQuote(random)
  }

  //color

  const colors = [
    '#845AEC',
    '#5AC3EC',
    '#EC5A5C',
    '#5A68EC',
    '#5AB9EC',
    '#ECAB5A',
    '#ECE95A',
    '#5AECEC',
    '#B75AEC',
    '#EC5ACA',
    '#933A4D',
    '#933A6C',
    '#923A93',
    '#633A93',
    '#4B3A93',
    '#3A5593',
    '#3A936E',
    '#3E933A',
    '#938E3A',
    '#936C3A',
  ]

  const randomColor = Math.floor(Math.random() * colors.length)

  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className='app' style={{ color: colors[randomColor] }}>
      <QuoteBox
        quote={quote}
        outsideRandom={outsideRandom}
        changeQuote={changeQuote}
        colors={colors}
        randomColor={randomColor}
      />
    </div>
  )
}

export default App
