import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Home/>
      </div>

    </div>
  )
}

export default App