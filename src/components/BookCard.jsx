import { Link } from 'react-router-dom'

import { getCover } from '../utils/createBook'


function BookCard({
  book,
  title,
  author,
  setCurrentBook
}) {
   return (
      <Link
         to={`/book-details/${book.title}`}
         onClick={() => setCurrentBook(book)}
         className="
            group 
            block 
            w-full max-w-[320px] 
            mx-auto my-5
         "
      >
         <div className="
               border-2 border-transparent
               bg-white
               group-hover:shadow-2xl
               transition-shadow duration-300
            "
         >
         <div
            className="
               w-full h-[360px]
               px-5 py-10
            "
         >
            {/* AUTHOR */}
            <p className="text-right text-stone-500">
               {author}
            </p>

            {/* BOOK COVER */}
            <div className="
                  w-full max-w-70 h-40
                  py-2 
                  overflow-hidden
               "
            >
               <img
                  src={getCover(book.id)}
                  className="
                     w-full h-full 
                     object-cover object-top
                  "
               />
            </div>

            {/* TITLE */}
            <p className='font-bold'>
               {title.toUpperCase()}
            </p>
         </div>
         </div>
      </Link>
  );
}


export default BookCard