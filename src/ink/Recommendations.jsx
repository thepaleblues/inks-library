import '../features/home/Home.css'

import moodAndGenre from "./moodAndGenre"
import dialogues from "./dialogues"
import books from "../data/books";
import { getCover } from "../utils/createBook";


const getTodaysDate = () => new Date().toDateString();


function getDailyBooksReco(key, moodBooks) {
   const today = getTodaysDate();
   const savedReco = JSON.parse(localStorage.getItem(key));

   if (savedReco?.date === today) {
      return savedReco.books;
   } 
   
   const recoBooks = [...moodBooks]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

   localStorage.setItem(
      key,
      JSON.stringify({
         date: today,
         books: recoBooks
      })
   );

   return recoBooks;  
}


function getDailyDialogue(key, recoDialogues) {
   if (!recoDialogues || recoDialogues.length === 0) {
      return '';
   }

   const today = getTodaysDate();
   const savedReco = JSON.parse(localStorage.getItem(key));

   if (savedReco?.date === today) {
      return savedReco.dialogue;
   }

   const randomizedDialogue =
      recoDialogues[Math.floor(Math.random() * recoDialogues.length)];

   localStorage.setItem(
      key,
      JSON.stringify({
         date: today,
         dialogue: randomizedDialogue
      })
   );

   return randomizedDialogue;
}


function RecoBooks({ booksToReco }) {
   return (
      <div className='book-reco-container'>
         {booksToReco.map(book => (
            <div className='book-container' key={book.id}>
               <img src={getCover(book.id)} alt={book.title} />
               <em>{book.title}</em>
               <p>{book.author}</p>
            </div>
         ))}
      </div>
   );
}


function Recommendations({ topMoods }) {
   const [firstMood, secondMood] = topMoods;

   const firstGroup = moodAndGenre.find(group => group.mood === firstMood?.id);
   const secondGroup = moodAndGenre.find(group => group.mood === secondMood?.id);

   const firstAlter = firstGroup.alter;
   const secondAlter = secondGroup.alter;

   const firstMoodBooks = books.filter(book => book.mood.includes(firstMood.id));
   const secondMoodBooks = books.filter(book => book.mood.includes(secondMood.id));

   const firstRecoBooks = getDailyBooksReco(
      `first-books-${firstMood?.id}`, firstMoodBooks
   );
   const secondRecoBooks = getDailyBooksReco(
      `second-books-${secondMood?.id}`, secondMoodBooks
   );

   const firstDialogue = getDailyDialogue(
      `first-dialogue-${firstMood?.id}`,
      dialogues.moodDialogues[firstAlter]
   );

   return (
      <div className="reco-container">
         <div className='first-reco-container' id='reco-container'>
            <h2>
               {dialogues.reco.firstBook}
               {firstAlter.toLowerCase()}.
            </h2>

            <em>
               {dialogues.reco.firstBookComment}
               <b>{firstDialogue}</b>
            </em>

            <RecoBooks booksToReco={firstRecoBooks} />
         </div>

         <div className='second-reco-container'>
            <h3>
               {dialogues.reco.suggestionLine1}
               {secondAlter.toLowerCase()}
               {dialogues.reco.suggestionLine2}
            </h3>

            <RecoBooks booksToReco={secondRecoBooks} />
         </div>
      </div>
   );
}


export default Recommendations