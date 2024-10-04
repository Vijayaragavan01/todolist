import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroceryList from './GroceryList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GroceryList/>
    </>
  )
}

export default App
