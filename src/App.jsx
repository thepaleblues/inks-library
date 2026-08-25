import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

import Home from "./features/home/Home.jsx";
import { Library } from "./features/library/Library.jsx";
import BookDetails from "./features/library/BookDetails.jsx";
import Navbar from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";

import readProfile from "./data/readProfile.js";
import { checkFirstVisit, loadProfile } from "./storage/localStorage.js";


function App() {
  const [isNewUser, setIsNewUser] = useState(() => checkFirstVisit());
  
  useEffect(() => {
    localStorage.setItem("hasVisited", "true");
  }, []);
    
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
    if (currentPage === '/') {
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
      <Routes>
        <Route 
          path='/' 
          element={<Home 
            moodScorePoints={moodScorePoints}
            topMoods={topMoods}
            setCurrentPage={setCurrentPage}
            isNewUser={isNewUser}
          />} 
        />
        <Route 
          path='/library' 
          element={<Library 
            currentBook={currentBook}
            setCurrentBook={setCurrentBook}
            filters={filters}
            setFilters={setFilters}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />} 
        />
        <Route 
          path='/book-details/:bookTitle' 
          element={<BookDetails 
            currentBook={currentBook}
            viewedBooks={viewedBook}
            setViewedBook={setViewedBook}
            moodScorePoints={moodScorePoints}
            setMoodScorePoints={setMoodScorePoints}
            profile={profile}
            setProfile={setProfile}
          />} 
        />
        <Route 
          path='/about' 
          element={<About/>} 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
