import { useState } from 'react'
import './App.css'

function App() {

const [ count, setCount ] = useState(0);

function plus() {
  setCount(count + 1);
}

function minus() {
  setCount(count - 1);
}

function clear() {
  setCount(0);
}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default App
