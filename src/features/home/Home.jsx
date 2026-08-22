import { useEffect } from 'react'

import './Home.css'

import Recommendations from '../../ink/Recommendations.jsx'

import dialogues from '../../ink/dialogues.js'


function Home({
   moodScorePoints,
   topMoods,
   currentPage,
   setCurrentPage
}) {
   useEffect(() => {
      setCurrentPage('/');
      localStorage.setItem('current-page', '/');
   }, [setCurrentPage]);

   return (
      <div className='home-container'>
         <h1>{dialogues.defaults.hero}</h1>
        <Recommendations
            moodScorePoints={moodScorePoints}
            topMoods={topMoods}
        />
      </div>
   )
}

export default Home