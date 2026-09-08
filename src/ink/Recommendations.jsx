import moodAndGenre from "./moodAndGenre"
import dialogues from "./dialogues"
import books from "../data/books";
import inksDesigns from "./designs";

import BookCard from "../components/BookCard";
import { HOME_SCROLL_KEY } from "../storage/localStorage";


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
                  id={book.id}
                  title={book.title}
                  author={
                     book.author.length > 1
                        ? `${book.author[0]} et al.`
                        : book.author[0]
                  }
                  setCurrentBook={setCurrentBook}
                  scrollKey={HOME_SCROLL_KEY}
               />
            )
         )}
      </div>
   );
}

function Recommendations({ topMoods, setCurrentBook }) {
   const moodData = topMoods.slice(0, 2).map(mood => {
      const alter = moodAndGenre.find(
         group => group.mood === mood?.id
      )?.alter;

      const moodBooks = books.filter(book =>
         book.mood.includes(mood.id)
      );

      return {
         mood,
         alter,
         recoBooks: getDailyBooksReco(
            `books-${mood?.id}`,
            moodBooks
         ),
         dialogue: getDailyDialogue(
            `dialogue-${mood?.id}`,
            dialogues.moodDialogues[alter]
         ),
      };
   });

   const [first, second] = moodData;

   return (
      topMoods[1].points === 0 ? (
         null
      ) : (
          <div 
            className="
               px-5
               sm:px-8
               lg:px-20 xl:px-60
               bg-grey-gradient
            "
         >
            <div className="w-full">
               {/* FIRST RECO */}
               <div 
                  className="
                     home-snap-section
                     flex min-h-dvh flex-col justify-center
                  "
               > 
                     <div className="">
                        <h1 className="pt-20 sm:pt-10 text-center">
                           {dialogues.reco.firstBook}
                           {first.alter?.toLowerCase()}.
                        </h1>

                        <p className="pt-5 text-center">
                           {dialogues.reco.firstBookComment}
                           <b>{first.dialogue}</b>
                        </p>
                     </div>

                  <RecoBooks 
                     booksToReco={first.recoBooks} 
                     setCurrentBook={setCurrentBook}
                  />
               </div>

               {/* SECOND RECO */}
               <div 
                  className="
                     home-snap-section
                     flex min-h-dvh flex-col justify-center
                     pb-20
                  "
               >
                  <div 
                     className="
                        flex flex-col items-center justify-center
                        pt-20
                        sm:flex-row sm:pt-0 sm:pb-15
                     "
                  >
                     <img 
                        src={inksDesigns.neutral.image} 
                        className="max-h-20"
                     />
                     <h1 className="pt-3 text-center sm:pt-5 sm:pl-5">
                        {dialogues.reco.suggestionLine}
                        {second.alter?.toLowerCase()} ?
                     </h1>
                  </div>
                  
                  <RecoBooks 
                     booksToReco={second.recoBooks}
                     setCurrentBook={setCurrentBook}
                  />
               </div>
            </div>
         </div>
      )
     
   );
}


export default Recommendations
