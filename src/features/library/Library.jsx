import { useState, useEffect } from 'react'
import moods from '../../data/moods.js'
import { books } from '../../data/books.js';
import { getCover } from '../../utils/createBook.js';
import './Library.css'
import { Link } from 'react-router-dom'


// ? Access these at Ink's dialogues instead
const inksDialogue = "So, what are we feeling today?";
const searchDialogue = "Got something in mind?"

function NoResult() {
   return (
      <div className='no-result-container'>
         <h3>No Results</h3>
         <em>Oh dear... this is awkward.</em>
      </div>
   )
}


function Filters({ 
   filters, 
   handleFilterChange 
}) {
   return (
      <div className='filter-container'>
         {
            moods.map((mood) => {
               return (
                  <button 
                     className={`${mood}-filter`} 
                     key={mood}
                     onClick={() => {
                        handleFilterChange("mood", mood);
                     }}
                  > 
                     {mood}
                  </button>
               )
            })
         }
         <h3>{searchDialogue}</h3>
         <input 
            type='search' 
            placeholder='Search for book'
            onChange={(e) => {
               handleFilterChange("search", e.target.value);
            }}
         />
      </div>
   )
}

export function DisplayBooks({ 
   filters, 
   bookResults, 
   viewedBook,
   setViewedBook 
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
                        <Link to='/book-details' // TODO: link to individual pages
                           onClick={() => {setViewedBook(book)}}
                        >
                           <img src={getCover(book.id)}></img>
                        </Link>
                     </div>
                     <em>{book.title}</em>
                     <p><b>Author/s:</b> {book.author.join(' | ')}</p>
                  </div>
               )
            })
         }
      </div>
   )
}


export function Library({ 
   viewedBook,
   setViewedBook 
}) {
   const [bookResults, setBookResults] = useState([]);
   const [filters, setFilters] = useState({
      search: ``,
      mood: ``
   });
   
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


   return (
      <div className='library-container'>
         <h3>{inksDialogue}</h3>
         <Filters 
            filters={filters}
            handleFilterChange={handleFilterChange}
         />
         {
            (bookResults.length === 0 && filters.search !== ``) 
            ? (
               <NoResult />
            ) : (
                <DisplayBooks 
                  filters={filters}
                  bookResults={bookResults}
                  viewedBook={viewedBook}
                  setViewedBook={setViewedBook}
               />
            )
         }
        
      </div>
   )
}