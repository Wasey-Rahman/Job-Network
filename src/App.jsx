import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import List from './components/List/List'
import Feature from './components/Feature/Feature'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <List></List>
      <Feature></Feature>
      
    
      </div>
      
  )
}

export default App
