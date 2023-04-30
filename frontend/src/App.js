import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import About from './pages/About'
import Erorr from './pages/Erorr'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Erorr />} />
      </Routes>
    </div>
  )
}

export default App
