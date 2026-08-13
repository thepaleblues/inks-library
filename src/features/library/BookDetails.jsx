import { Link } from 'react-router-dom'
import { books } from '../../data/books.js';
import { useState, useEffect } from 'react'
import { getCover } from '../../utils/createBook.js';
import './BookDetails.css'


function BookInfo({ title, author, description, mood, cover }) {
   return (
      <>
         <div className='main-info' id='info'>
            <h1>{title}</h1>
            <h2>{author}</h2>
         </div>
         <div className='other-info' id='info'>
            <p>{description}</p>
            <div className='book-mood' id='info'>
               <b>Mood/s: </b> {mood}
            </div>
         </div>
         <div className='cover-container' id='info'>
            <img src={getCover(cover)}></img>
         </div>

      </>
   )
}

function BookDetails ({    
   viewedBook
}) {
   return (
      <div className='book-details-container'>
         <BookInfo
            title={viewedBook.title}
            author={viewedBook.author}
            description={viewedBook.description}
            mood={viewedBook.mood.join(' | ')}
            cover={viewedBook.id}
         />
         <Link to='/library'>
            <button>
               Go back
            </button>
         </Link>
        
      </div>
   )
}

export default BookDetails