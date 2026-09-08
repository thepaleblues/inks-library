import inksDesigns from '../ink/designs'


function How({ num, title, texts }) {
   return(
      <div 
         className="
            flex-1 basis-0 
            px-5 pt-10 pb-15
            bg-white
         "
      >
         <h3 className="pb-3">
            {num}
         </h3>
         <h4 className="pb-3">
            {title.toUpperCase()}
         </h4>
         <p>{texts}</p>
      </div>
   )
}

function About() {
   return (
      <div 
         className="
            flex flex-col items-center
            min-h-dvh
            px-5 pb-20 pt-15 sm:pt-30 sm:px-8 lg:px-20 xl:px-60
            text-center
            bg-grey-gradient
         "
      >
         {/* HERO */}
         <div className="pb-5">
            <h1 className="pb-5">
                  About Ink
            </h1>
            <img
               src={inksDesigns.question.image}
               className="max-h-40 pl-3"
            />
         </div>

         <div className="w-full pt-10">
            
            {/* INTRO */}
            <div className="pb-15">
               <h2 className="pb-3">
                  Not sure what classic to read next?
               </h2>

               <p className="mx-auto max-w-2xl">
                  Ink is a curated guide to Penguin Classics, made for readers who are exploring classic literature and don't know where to start.
               </p>
            </div>
            
            {/* HOW */}
            <h2 className="pb-2">How it works</h2>
            <div 
               className="
                  flex flex-col
                  w-full
                  gap-5
                  pt-5 pb-20
                  sm:flex-row
               "
            >
           <How 
               num="01"
               title="Explore"
               texts="Browse the library. See what catches your eye."
            />
            <How 
               num="02"
               title="Ink Takes Note"
               texts="The books you explore give Ink an idea of your taste."
            />
            <How 
               num="03"
               title="Find Your Read"
               texts="Come back to see what Ink thinks you should read."
            />
            </div>
         </div>
      </div>
   );
}


export default About