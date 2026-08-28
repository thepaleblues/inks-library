import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import './index.css';

import Home from './features/Home.jsx';
import Library from './features/Library.jsx';
import BookDetails from './features/BookDetails.jsx';
import Navbar from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';

import readProfile from './data/readProfile.js';
import { checkFirstVisit, loadProfile } from './storage/localStorage.js';


function App() {
  const [isNewUser, setIsNewUser] = useState(() => checkFirstVisit());
  
  const [currentBook, setCurrentBook] = useState(null);
  
  const initialProfile = loadProfile(readProfile);
  const [profile, setProfile] = useState(initialProfile);
  const [viewedBook, setViewedBook] = useState(initialProfile.viewedBooks);
  const [moodScorePoints, setMoodScorePoints] = useState(initialProfile.moodScore);
  
  const topMoods = [...moodScorePoints]
    .sort((a, b) => b.points - a.points) 
    .slice(0, 2);
  
  const [filters, setFilters] = useState(() => {
    const saved = sessionStorage.getItem("library-filters");
    return saved ? JSON.parse(saved) : {
        search: ``,
        mood: ``
    }
  });
  
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("current-page") || "/";
  });

  useEffect(() => {
    localStorage.setItem("hasVisited", "true");
  }, []);

  useEffect(() => {
    if (currentPage === "/") {
      setFilters({
        search: ``,
        mood: ``
      })
    }
    sessionStorage.removeItem("library-filters");
  }, [currentPage])

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-white">
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              isNewUser={isNewUser}
              setCurrentPage={setCurrentPage}
              currentBook={currentBook}
              setCurrentBook={setCurrentBook}
              moodScorePoints={moodScorePoints}
              topMoods={topMoods}
            />} 
          />
          <Route 
            path="/library" 
            element={
            <Library 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filters={filters}
              setFilters={setFilters}
              currentBook={currentBook}
              setCurrentBook={setCurrentBook}
            />} 
          />
          <Route 
            path="/book-details/:bookTitle" 
            element={<BookDetails 
              profile={profile}
              setProfile={setProfile}
              viewedBooks={viewedBook}
              setViewedBook={setViewedBook}
              currentBook={currentBook}
              moodScorePoints={moodScorePoints}
              setMoodScorePoints={setMoodScorePoints}

            />} 
          />
          <Route 
            path="/about" 
            element={<About/>} 
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}


export default App
