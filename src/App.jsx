import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './features/home/Home.jsx'
import { Library } from './features/library/Library.jsx'
import BookDetails from './features/library/BookDetails.jsx'
import Navbar from './components/Navigation.jsx'
import './main.css'

function App() {
  const [viewedBook, setViewedBook] = useState({});

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/library' 
          element={<Library 
            viewedBook={viewedBook}
            setViewedBook={setViewedBook}
          />} 
        />
        <Route 
          path='/book-details' 
          element={<BookDetails 
            viewedBook={viewedBook}
          />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
