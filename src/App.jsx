import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import './index.css';

import Home from './features/Home.jsx';
import Library from './features/Library.jsx';
import BookDetails from './features/BookDetails.jsx';
import Navbar from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';

import readProfile from './data/readProfile.js';
import { 
  checkFirstVisit,  
  loadProfile, 
  LIBRARY_SCROLL_KEY, 
  HOME_SCROLL_KEY
} from './storage/localStorage.js';


function ChangePagesLogic({ setFilters }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const onLibrary = path === "/library";
    const onHome = path === "/";
    const onBookDetails = path.startsWith("/book-details");

    const restoreScroll = (scrollKey) => {
      const returningFromDetails =
        sessionStorage.getItem("page-return") === "book-details";
      const savedScroll = sessionStorage.getItem(scrollKey);

      if (!returningFromDetails || savedScroll === null) return false;

      requestAnimationFrame(() => {
        window.scrollTo(0, Number(savedScroll));
      });

      sessionStorage.removeItem("page-return");
      sessionStorage.removeItem(scrollKey);
      return true;
    };

    if (onLibrary) {
      sessionStorage.removeItem(HOME_SCROLL_KEY);

      if (!restoreScroll(LIBRARY_SCROLL_KEY)) {
        window.scrollTo(0, 0);
      }
      return;
    }

    if (onHome) {
      sessionStorage.removeItem(LIBRARY_SCROLL_KEY);

      if (!restoreScroll(HOME_SCROLL_KEY)) {
        window.scrollTo(0, 0);
      }
      return;
    }

    if (onBookDetails) {
      window.scrollTo(0, 0);
      return;
    }

    sessionStorage.removeItem("page-return");
    sessionStorage.removeItem(LIBRARY_SCROLL_KEY);
    sessionStorage.removeItem(HOME_SCROLL_KEY);

    window.scrollTo(0, 0);

    setFilters({
      search: "",
      mood: "",
    });
  }, [location.pathname, setFilters]);

  return null;
}

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
  
  useEffect(() => {
    localStorage.setItem("hasVisited", "true");
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <ChangePagesLogic 
        setFilters={setFilters} 
      />
      <div className="bg-white">
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              isNewUser={isNewUser}
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
              filters={filters}
              setFilters={setFilters}
              currentBook={currentBook}
              setCurrentBook={setCurrentBook}
            />} 
          />
          <Route 
            path="/book-details/:bookId" 
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
            element={<About />} 
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}


export default App
