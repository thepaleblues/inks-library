import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { LIBRARY_SCROLL_KEY, HOME_SCROLL_KEY } from '../storage/localStorage';


function ChangePagesLogic({ setFilters }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const onLibrary = path === "/library";
    const onHome = path === "/";
    const onBookDetails = path.startsWith("/book-details");
    
    const resetScroll = () => {
      document.documentElement.classList.remove("home-scroll");

      const scrollTop = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto"
        });
      };

      scrollTop();

      requestAnimationFrame(() => {
        scrollTop();

        requestAnimationFrame(() => {
          scrollTop();
        });
      });
    };

    const restoreScroll = (scrollKey) => {
      const returningFromDetails =
        sessionStorage.getItem("page-return") === "book-details";
      const savedScroll = sessionStorage.getItem(scrollKey);

      if (!returningFromDetails || savedScroll === null) {
        return false;
      }

      requestAnimationFrame(() => {
        window.scrollTo({
          top: Number(savedScroll),
          left: 0,
          behavior: "auto"
        });
      });

      sessionStorage.removeItem("page-return");
      sessionStorage.removeItem(scrollKey);

      return true;
    };

    if (onLibrary) {
      sessionStorage.removeItem(HOME_SCROLL_KEY);

      if (!restoreScroll(LIBRARY_SCROLL_KEY)) {
        resetScroll();
      }

      return;
    }

    if (onHome) {
      sessionStorage.removeItem(LIBRARY_SCROLL_KEY);

      setFilters({
        search: "",
        mood: ""
      });

      if (!restoreScroll(HOME_SCROLL_KEY)) {
        resetScroll();
      }

      return;
    }

    if (onBookDetails) {
      resetScroll();
      return;
    }

    sessionStorage.removeItem("page-return");
    sessionStorage.removeItem(LIBRARY_SCROLL_KEY);
    sessionStorage.removeItem(HOME_SCROLL_KEY);

    resetScroll();

    setFilters({
      search: "",
      mood: ""
    });
  }, [location.pathname, setFilters]);

  return null;
}


export default ChangePagesLogic