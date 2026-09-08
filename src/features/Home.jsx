import { useEffect } from 'react';

import '../index.css';

import Recommendations from '../ink/Recommendations.jsx';

import inksDesigns from '../ink/designs.js';


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
   setCurrentBook,
   isNewUser
}) {
   useEffect(() => {
      document.documentElement.classList.add('home-scroll');

      return () => {
         document.documentElement.classList.remove('home-scroll');
      };
   }, []);

   return (      
      <div className="home-page">
         {
            isNewUser || topMoods[1].points === 0 ?  (
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