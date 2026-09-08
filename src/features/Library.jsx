import { 
   useState, 
   useEffect 
} from 'react';

import '../index.css';

import NoResults from '../components/NoResults.jsx';
import BookCard from '../components/BookCard.jsx';

import moods from '../data/moods.js';
import dialogues from '../ink/dialogues.js'
import books from '../data/books.js';
import { LIBRARY_SCROLL_KEY } from '../storage/localStorage.js';


function BackToTopBtn({ visible, onClick }) {
   if (!visible) return null;

   return (
      <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2">
         <button
            type="button"
            onClick={onClick}
            className="
               rounded-full
               bg-black text-white
               px-3 py-3
               shadow-lg
               hover:bg-stone-700
               transition
               text-sm
            "
         >
            ↑
         </button>
      </div>
   );
}

function Filters({ 
   handleFilterChange,
   filters
}) {
   return (
      <div className="filter-container">
         <ul 
            className=" 
               grid
               gap-2
               w-full
               grid-cols-2
               sm:grid-cols-2
               md:grid-cols-3
               lg:grid-cols-4
               xl:grid-cols-6
            "
         >
            {moods.map(mood => {
               const isActive = filters.mood === mood;
               
               return (
                  <li key={mood}>
                     <button
                        className={`
                           p-3 my-1
                           w-full
                           bg-white text-stone-600
                           rounded-xl
                           hover:bg-black/20
                           ${isActive ? "!bg-black text-white" : ""}
                        `}
                        aria-pressed={isActive}
                        onClick={() => {
                           handleFilterChange(
                              "mood",
                              isActive ? "" : mood
                           );
                        }}
                     >
                        {mood}
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export function DisplayBooks({ 
   bookResults,
   setCurrentBook
}) {
   return (
      <div 
         className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3 
            xl:grid-cols-4 
            gap-4 min-w-0
         "
      >
         {
            bookResults.sort((a, b) => {
               const slice = (title) => {
                  return title.toLowerCase().startsWith("The ") 
                     ? title.slice(4) 
                     : title.toLowerCase().startsWith("A ") 
                     ? title.slice(2) 
                     : title
               };
   
               const titleA = slice(a.title.toLowerCase());
               const titleB = slice(b.title.toLowerCase());

               titleA.localeCompare(titleB);
            })
            .map((book) => {
               return (
                  <BookCard
                     book={book}
                     key={book.id}
                     id={book.id}
                     title={book.title}
                     author={
                        book.author.length > 1
                           ? `${book.author[0]} et al.`
                           : book.author[0]
                     }
                     setCurrentBook={setCurrentBook}   
                     scrollKey={LIBRARY_SCROLL_KEY}  
                  />
               )
            })
         }
      </div>
   )
}

function Library({ 
   currentBook,
   setCurrentBook,
   filters,
   setFilters
}) {

   const [bookResults, setBookResults] = useState([]);

   function handleFilterChange(filterName, value) { 
      setFilters({
         ...filters,
         [filterName]: value
      });
   }

   useEffect(() => {
      const searchTerm = filters.search.trim().toLowerCase();

      const filteredBooks = books.filter((book) => {
         const moodMatches =
            !filters.mood ||
            book.mood.some((m) => m === filters.mood);

         const searchMatches =
            !searchTerm ||
            book.title.toLowerCase().includes(searchTerm) ||
            (book.author.some((a) => a.toLowerCase()
               .includes(searchTerm)
            ));
         return moodMatches && searchMatches;
      });
      setBookResults(filteredBooks);
   }, [filters.mood, filters.search]);

   // SAVE FILTERS
   useEffect(() => {
      sessionStorage.setItem("library-filters", JSON.stringify(filters));
   }, [filters]);

   // BACK TO TOP BTN
   const [showBackToTop, setShowBackToTop] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         setShowBackToTop(window.scrollY > 2500);
      };

      onScroll();
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   };

   return (
      <div 
         className="
            w-full
            px-30 pt-20 pb-60      
            bg-grey-gradient 
         "
      >
         <div className="flex items-center gap-4">
            <h3 
               className="
                  min-w-0 flex-1
                  py-10 pt-20
                  text-2xl font-bold
                  sm:text-3xl
               "
            >
               {dialogues.defaults.moodFilter}
            </h3>
            
            {/* SEARCH */}
            <div className="relative mt-10 shrink-0">
               <input
                  type="search"
                  placeholder="...or search"
                  value={filters.search}
                  onChange={(e) => {
                     handleFilterChange("search", e.target.value);
                  }}
                  className="
                     w-36 p-3
                     text-center
                     bg-black/10
                     rounded-2xl
                     focus:outline-none
                     sm:w-60
                  "
               />
               {filters.search && (
                  <button
                     type="button"
                     aria-label="Clear search"
                     onClick={() => handleFilterChange("search", "")}
                     className="
                        absolute right-3 top-1/2
                        -translate-y-1/2
                        text-xl 
                        text-stone-500
                        hover:text-black
                     "
                  >
                        ×
                  </button>
               )}
            </div>
         </div>
         
         {/* FILTERS */}
         <Filters 
            filters={filters}
            handleFilterChange={handleFilterChange}
         />

         {/* RESULTS */}
         {
            (bookResults.length === 0 && filters.search !== ``) 
            ? (
               <NoResults />
            ) : (
               <div className="pt-20">
                  <div className="text-center pb-5 text-stone-400">
                     {
                        bookResults.length === 1 ? (<i>Showing {bookResults.length} book</i>)
                        : (<i>Showing {bookResults.length} books</i>)
                     }
                  </div>
                  <DisplayBooks
                     filters={filters}
                     bookResults={bookResults}
                     currentBook={currentBook}
                     setCurrentBook={setCurrentBook}
                  />
               </div>
            )
         }
         {/* BACK TO TOP */}
         <BackToTopBtn 
            visible={showBackToTop}
            onClick={scrollToTop}
         />
      </div>  
   ); 
}


export default Library;