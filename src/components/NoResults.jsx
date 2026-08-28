import inksDesigns from "../ink/designs";


function NoResults() {
   return (
      <div className="
            flex justify-center
            py-30   
         "
      >
         {/* IMAGE */}
         <img
            src={inksDesigns.judge.image}
            className="max-h-60"
         />
         {/* DIALOGUE */}
         <div className="block">
            <h1 className="pt-19 pl-5">
                  No books found
            </h1>
            <p className="pl-5">This is awkward...</p>
         </div>
      </div>
   );
}


export default NoResults