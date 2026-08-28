import moodAndGenre from "./moodAndGenre"
import dialogues from "./dialogues"
import books from "../data/books";
import inksDesigns from "./designs";

import BookCard from "../components/BookCard";


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
      return "";
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


function RecoBooks({ booksToReco, setCurrentBook}) {
   return (
      <div className="
            grid 
            gap-4
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
         "
      >
         {booksToReco.map(book => 
            (
               <BookCard
                  book={book}
                  key={book.id}
                  title={book.title}
                  author={
                     book.author.length > 1
                        ? `${book.author[0]} et al.`
                        : book.author[0]
                  }
                  setCurrentBook={setCurrentBook}
               />
            )
         )}
      </div>
   );
}


function Recommendations({ topMoods, setCurrentBook, booksToReco }) {
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
      <div className="
            pt-10 pb-30 px-60 
            bg-grey-gradient 
         "
      >
         <div className="w-full">
            
            {/* FIRST RECO */}
            <div className="pb-45"> 
                  <div className="pb-15">
                     <h1 className="pt-40 text-center">
                        {dialogues.reco.firstBook}
                        {firstAlter.toLowerCase()}.
                     </h1>

                     <p className="pt-5 text-center">
                        {dialogues.reco.firstBookComment}
                        <b>{firstDialogue}</b>
                     </p>
                  </div>

               <RecoBooks 
                  booksToReco={firstRecoBooks} 
                  setCurrentBook={setCurrentBook}
               />
            </div>

            {/* SECOND RECO */}
            <div className="pb-40">
               <div className="
                     flex justify-center
                     pt-20 pb-15 
                  "
               >
                  <img 
                     src={inksDesigns.neutral.image} 
                     className="max-h-20"
                  />
                  <h1 className="pt-5 pl-5 font-bold">
                     {dialogues.reco.suggestionLine}
                     {secondAlter.toLowerCase()} ?
                  </h1>
               </div>
               
               <RecoBooks 
                  booksToReco={secondRecoBooks}
                  setCurrentBook={setCurrentBook}
               />
            </div>
         </div>
      </div>
   );
}


export default Recommendations