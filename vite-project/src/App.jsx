import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './assets/components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Content/>
    </>
  )
}

export default App
