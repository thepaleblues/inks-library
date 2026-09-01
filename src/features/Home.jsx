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
            px-5 pt-24 pb-20
            sm:px-8 sm:pt-32 sm:pb-32
            text-center
            bg-white
         "
      >
         <img
            className="block w-full max-w-60 sm:max-w-sm 
            pt-30 sm:pt-8 md:pt-5"
            src={inksDesigns.recommend.image}
         />
         <h1 className="pb-5">
            {firstLine}
         </h1>
         <p className="text-xl sm:text-2xl">{secondLine}</p>
      </div>
   )
}

function Home({
   moodScorePoints,
   topMoods,
   setCurrentBook,
   isNewUser
}) {
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