import '../index.css'

import inksDesigns from "../ink/designs"


function NotFound() {
   return (
      <div 
         className="
            min-h-dvh 
            py-60 px-20
            object-center
            text-center
         "
      >
         <h1>Not Found</h1>
         <img 
            src={inksDesigns.judge.image} 
            className="
               block mx-auto
               max-h-60
            "
         />
         <p className="text-xl">Maybe try finding a book in my library first.</p>
      </div>
   )
}


export default NotFound