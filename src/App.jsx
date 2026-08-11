import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './features/home/Home.jsx'
import Library from './features/library/Library.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
