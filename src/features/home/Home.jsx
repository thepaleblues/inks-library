import { useEffect } from 'react'

import './Home.css'

import Recommendations from '../../ink/Recommendations.jsx'

import dialogues from '../../ink/dialogues.js'


function FirstTimer() {
   return (
      <div className='first-timer'>
         <h1>{dialogues.defaults.firstTime1}</h1>
         <p>{dialogues.defaults.firstTime2}</p>
      </div>
   )
}


function Home({
   moodScorePoints,
   topMoods,
   setCurrentPage,
   isNewUser
}) {
   useEffect(() => {
      setCurrentPage('/');
      localStorage.setItem('current-page', '/');
   }, [setCurrentPage]);

   return (
      <div className='home-container'>
         <h1>{dialogues.defaults.hero}</h1>
         {
            isNewUser ? (
               <FirstTimer />
            ) : (
               <Recommendations 
                  moodScorePoints={moodScorePoints}
                  topMoods={topMoods}
               />
            )
         }
      </div>
   )
}


export default Home