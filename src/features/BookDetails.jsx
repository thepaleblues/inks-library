import { useEffect } from 'react';

import { 
   Link, 
   useParams 
} from 'react-router-dom';

import '../index.css';

import { getCover } from '../utils/createBook.js';
import { saveProfile } from '../storage/localStorage.js';


function BookInfo({ author, description, mood, cover }) {
   const { bookTitle } = useParams();
   
   return (
      <div className="flex">
         
         {/* COVER */}
         <div className="
               mt-2 
               pr-20 pl-10
            "
         >
            <Link
               to="/library"
               className="
                  inline-block
                  mb-10 px-3 py-2
                  rounded-xl
                  border border-transparent
                  bg-grey
                  hover:bg-black/20
               "
            >
               ← Back
            </Link>

            <img 
               src={getCover(cover)} 
               className="
                  max-w-80 
                  border border-gray-200
                  shadow-2xl
               "
            />
         </div>

         {/* BOOK INFO */}
         <div className="pt-30">

            {/* TITLE */}
            <h1 className="pb-3 text-4xl font-bold">
               {bookTitle}
            </h1>

            {/* AUTHOR */}
            <div className="main-info">
               <h2 className="text-2xl pb-10">
                  by{" "}
                  {author.map((name, index) => (
                     <span key={name}>
                        {index > 0 && (index === author.length - 1 ? ", and " : ", ")}
                        {name}
                     </span>
                  ))}
               </h2>
            </div>

            <div className="other-info">
               {/* MOOD */}
               <div className="flex">
                  {mood.map(m => 
                     <p
                        key={m}
                        className="
                              w-fit
                              whitespace-nowrap
                              bg-black
                              px-3 py-1 mr-2
                              text-white
                           "
                     >
                        {m}
                     </p>
                  )}
               </div>

               {/* DESCRIPTION */}
               <p className="pb-20 pt-10 pr-10">
                  {description}
               </p>
            </div>
         </div>
      </div>   
   );
}

function BookDetails ({    
   currentBook,
   setViewedBook,
   setMoodScorePoints,
   profile,
   setProfile
}) {
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
      <div className="
            bg-white
            px-5 pt-30 pb-70 
            sm:px-8 
            md:px-12 
            lg:px-34 
            xl:px-60 
            2xl:px-90
         "
      >
         <div className="pt-10">
            <BookInfo
               id={currentBook.id}
               author={currentBook.author}
               description={currentBook.description}
               mood={currentBook.mood}
               cover={currentBook.id}
            />
         </div>
      </div>
   );
}


export default BookDetails