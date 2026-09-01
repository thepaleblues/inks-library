import { Link } from 'react-router-dom'

import { getCover } from '../utils/createBook'
import { LIBRARY_SCROLL_KEY } from '../storage/localStorage';


function BookCard({
   book,
   id,
   title,
   author,
   setCurrentBook
}) {
   return (
      <Link
         to={`/book-details/${id}`}
         onClick={() => {
            sessionStorage.setItem(
               LIBRARY_SCROLL_KEY,
               window.scrollY.toString()
            );

            sessionStorage.setItem(
               "library-return",
               "book-details"
            );

            setCurrentBook(book);
         }}

         className="
            group 
            block 
            w-full max-w-[320px] 
            mx-auto my-5
         "
      >
         <div 
            className="
               border-2 border-transparent
               bg-white
               group-hover:shadow-2xl group-hover:-translate-y-1
               transition duration-200
               
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