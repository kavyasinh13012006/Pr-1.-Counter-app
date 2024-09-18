import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const Reset = () => {
    setCount(0)
    setIsActive(false)
  }


  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    },1100)
  },[count])


  return (
    <div align="center">
      <h2>Count:-{count}</h2>
      <button onClick={increment}> + </button> ||
      <button  onClick={Reset}>Reset</button>
       ||

      <button onClick={decrement}> - </button>
    </div>
  )
}

export default App
