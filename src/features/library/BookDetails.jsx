import {useEffect } from 'react'

import { 
   Link, 
   useParams 
} from 'react-router-dom'

import './BookDetails.css'

import { getCover } from '../../utils/createBook.js';
import { saveProfile } from '../../storage/localStorage.js';


function BookInfo({ author, description, mood, cover }) {
   return (
      <>
         <div className='main-info'>
            <h2>{author}</h2>
         </div>
         <div className='other-info'>
            <p>{description}</p>
            <div className='book-mood'>
               <b>Mood/s: </b> {mood}
            </div>
         </div>
         <div className='cover-container'>
            <img src={getCover(cover)}></img>
         </div>

      </>
   )
}

function BookDetails ({    
   currentBook,
   setViewedBook,
   setMoodScorePoints,
   profile,
   setProfile
}) {

   const { bookTitle } = useParams();

   useEffect(() => {
      if (!currentBook) return;

      if (profile.viewedBooks.includes(currentBook.id)) {
         return;
      }

      const updatedProfile = {
         viewedBooks: [...profile.viewedBooks, currentBook.id],
         moodScore: profile.moodScore.map((mood) => {
            if (currentBook.mood.includes(mood.id)) {
               return { ...mood, points: mood.points + 1 };
            }
            return { ...mood };
         }),
      };

      saveProfile(updatedProfile);
      setViewedBook(updatedProfile.viewedBooks);
      setMoodScorePoints(updatedProfile.moodScore);
      setProfile(updatedProfile);

   }, [currentBook, 
      profile, 
      setViewedBook, 
      setMoodScorePoints, 
      setProfile]
   );

   return (
      <div className='book-details-container'>
         <h1>{bookTitle}</h1>
         <BookInfo
            id={currentBook.id}
            author={currentBook.author}
            description={currentBook.description}
            mood={currentBook.mood.join(', ')}
            cover={currentBook.id}
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