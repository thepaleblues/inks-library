import { useEffect } from 'react';

import '../index.css';

import Recommendations from '../ink/Recommendations.jsx';

import inksDesigns from '../ink/designs.js';


function Hero({ 
   firstLine, 
   secondLine
}) {
   return( 
      <div className="
            flex flex-col
            items-center
            w-full min-h-dvh
            pt-40 pb-60
            text-center
            bg-white
         "
      >
         <img
            className="block max-w-sm"
            src={inksDesigns.recommend.image}
         />
         <h1 className="pb-5">
            {firstLine}
         </h1>
         <p className="text-2xl">{secondLine}</p>
      </div>
   )
}

function Home({
   moodScorePoints,
   topMoods,
   setCurrentPage,
   setCurrentBook,
   isNewUser
}) {
   useEffect(() => {
      setCurrentPage("/");
      localStorage.setItem("current-page", "/");
   }, [setCurrentPage]);

   return (
      <div>
         {
            isNewUser ? (
               <Hero 
                  firstLine="Welcome to my library."
                  secondLine="Try not to mess with my shelves."
               />
            ) : (
               <>
                  <Hero
                     firstLine="Welcome back to my library."
                     secondLine="I trust you know your way around by now."
                  />
                  <Recommendations 
                     moodScorePoints={moodScorePoints}
                     topMoods={topMoods}
                     setCurrentBook={setCurrentBook}
                  />
               </>
            )
         }
      </div>
   );
}


export default Home