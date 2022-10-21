import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const outsideRandom = Math.floor(Math.random() * quotes.length)

  const [quote, isQuote] = useState(outsideRandom)

  const changeQuote = () => {
    const random = Math.floor(Math.random() * quotes.length)
    isQuote(random)
  }

  //color

  const colors = [
    '#845AEC',
    '#5AC3EC',
    '#A3EC5A',
    '#EC5AB6',
    '#EC5A5C',
    '#C2EC5A',
    '#5A68EC',
    '#EC5AC0',
    '#5A6DEC',
    '#5AB9EC',
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
