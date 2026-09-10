import { useEffect } from 'react';

import '../index.css';

import Recommendations from '../ink/Recommendations.jsx';

import inksDesigns from '../ink/designs.js';
import { MIN_SCORE_POINTS } from '../storage/localStorage.js';


function Hero({ 
   firstLine, 
   secondLine
}) {
   return( 
      <div 
         className="
            flex flex-col items-center w-full min-h-screen justify-center
            sm:pd-20
            text-center
            bg-white
            home-hero
            home-snap-section
         "
      >
         <img
            src={inksDesigns.recommend.image}
            className="
               block w-full max-w-60 sm:max-w-sm
            "
         />
         <h1 className="pb-5">
            {firstLine}
         </h1>
         <p className="text-xl sm:text-2xl">{secondLine}</p>
      </div>
   )
}

function Home({
   topMoods,
   setCurrentBook
}) {
   const hasBrowsed = topMoods[1].points >= MIN_SCORE_POINTS;

   useEffect(() => {
      document.documentElement.classList.add('home-scroll');

      return () => {
         document.documentElement.classList.remove('home-scroll');
      };
   }, []);

   return (      
      <div className="home-page">
         {
            hasBrowsed ? (
               <>
                  <Hero
                     firstLine="Welcome back."
                     secondLine="See what I picked for you today."
                  />
                  <Recommendations 
                     topMoods={topMoods}
                     setCurrentBook={setCurrentBook}
                  />
               </>
            ) : (
               <Hero 
                  firstLine="Welcome to my library."
                  secondLine="Browse a bit, then come back. You're welcome."
               />
            ) 
         }
      </div>
   );
}


export default Home