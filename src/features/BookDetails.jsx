import { useEffect } from 'react';

import { 
   Link, 
   useParams 
} from 'react-router-dom';

import '../index.css';

import { getCover } from '../utils/createBook.js';
import { saveProfile } from '../storage/localStorage.js';


function BookInfo({ author, title, description, mood, cover }) {
   const { bookId } = useParams();
   
   return (
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
         
         {/* COVER */}
         <div 
            className="
               mt-2 w-full
               md:w-auto md:pr-20 md:pl-10
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
                  max-w-70
                  md:max-w-86
                  border border-gray-200
                  shadow-2xl
               "
            />
         </div>

         {/* BOOK INFO */}
         <div className="pt-10 md:pt-30">

            {/* TITLE */}
            <h1 className="pb-3 text-3xl font-bold sm:text-4xl">
               {title}
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
               <div className="flex flex-wrap gap-2">
                  {mood.map(m => 
                     <p
                        key={m}
                        className="
                           w-fit
                           whitespace-nowrap
                           bg-black
                           px-3 py-1
                           text-white
                        "
                     >
                        {m}
                     </p>
                  )}
               </div>

               {/* DESCRIPTION */}
               <p className="pb-20 pt-10 md:pr-10">
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
            px-5  w-full min-h-dvh
            sm:px-8 
            md:px-12 
            lg:px-34 
            xl:px-60 
            2xl:px-90
         "
      >
         <div className="pt-6 sm:pt-8 md:pt-30">
            <BookInfo
               id={currentBook.id}
               title={currentBook.title}
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