import { 
   useState, 
   useEffect 
} from 'react'

import { Link } from 'react-router-dom'

import './Library.css'

import moods from '../../data/moods.js';
import dialogues from '../../ink/dialogues.js'
import books from '../../data/books.js';
import { getCover } from '../../utils/createBook.js';


function NoResult() {
   return (
      <div className='no-result-container'>
         <h3>No Results</h3>
         <em>Oh dear... this is awkward.</em>
      </div>
   )
}

function Filters({ 
   handleFilterChange,
   filters
}) {
   return (
      <div className='filter-container'>
         <ul className='filter-buttons'>
            {moods.map(mood => {
               const isActive = filters.mood === mood;
               return (
                  <li key={mood}>
                     <button
                        className={isActive ? 'active' : ''}
                        aria-pressed={isActive}
                        onClick={() => {
                           handleFilterChange(
                              'mood',
                              isActive ? '' : mood
                           );
                        }}
                     >
                        {mood}
                     </button>
                  </li>
               );
            })}
         </ul>

         <h3>{dialogues.defaults.search}</h3>

         <input 
            type='search' 
            placeholder='Search for book'
            value={filters.search}
            onChange={(e) => {
               handleFilterChange('search', e.target.value);
            }}
         />
      </div>
   );
}

export function DisplayBooks({ 
   bookResults,
   setCurrentBook
}) {
   return (
      <div className='books-container'>
         {
            bookResults.sort((a, b) => {
               const slice = (title) => {
                  return title.toLowerCase().startsWith('The ') ? title.slice(4) : 
                           title.toLowerCase().startsWith('A ') ? title.slice(2) : 
                           title
               }
   
               const titleA = slice(a.title.toLowerCase());
               const titleB = slice(b.title.toLowerCase());

               titleA.localeCompare(titleB);
            })
            .map((book) => {
               return (
                  <div className='book-container' key={book.id}>
                     <div className='book-cover'>
                        <Link to={`/book-details/${book.title}`} // TODO: link to individual pages
                           onClick={() => {
                              setCurrentBook(book)
                           }}
                        >
                           <img src={getCover(book.id)}></img>
                        </Link>
                     </div>
                     <em>{book.title}</em>
                     <p><b>Author/s:</b> {book.author.join(', ')}</p>
                  </div>
               )
            })
         }
      </div>
   )
}

export function Library({ 
   currentBook,
   setCurrentBook,
   filters,
   setFilters,
   setCurrentPage
}) {
   useEffect(() => {
      setCurrentPage('/library');
      localStorage.setItem('current-page', '/library');
   }, [setCurrentPage]);

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

   useEffect(() => {
      sessionStorage.setItem("library-filters", JSON.stringify(filters));
   }, [filters]);

   return (
      <div className='library-container'>
         <h3>{dialogues.defaults.moodFilter}</h3>
         <Filters 
            filters={filters}
            handleFilterChange={handleFilterChange}
         />
         {
            (bookResults.length === 0 && filters.search !== ``) 
            ? (
               <NoResult />
            ) : (
               <>
                  <div className='book-count-container'>
                     {
                        bookResults.length === 1 ? (<i>Showing {bookResults.length} book.</i>)
                        : (<i>Showing {bookResults.length} books.</i>)
                     }
                  </div>
                  <DisplayBooks 
                     filters={filters}
                     bookResults={bookResults}
                     currentBook={currentBook}
                     setCurrentBook={setCurrentBook}
                  />
               </>
            )
         }
      </div>  
   ) 
}