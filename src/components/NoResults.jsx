import inksDesigns from "../ink/designs";


function NoResults() {
   return (
      <div 
         className="
            flex justify-center
            py-30
            max-sm:flex-col max-sm:items-center
            max-sm:gap-4 max-sm:px-4 max-sm:py-16  
         "
      >
         {/* IMAGE */}
         <img
            src={inksDesigns.judge.image}
            className="max-h-60 max-sm:max-h-40 max-sm:max-w-40"
         />
         {/* DIALOGUE */}
         <div className="block max-sm:max-w-full max-sm:text-center">
            <h1 className="pt-19 pl-5 max-sm:pl-0">
                  No books found
            </h1>
            <p 
               className="
                  pl-5 text-xl
                  max-sm:pl-0
               "
            >
               This is awkward...
            </p>
         </div>
      </div>
   );
}


export default NoResults