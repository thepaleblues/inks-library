import '../index.css';


function Footer() {
   return (
         <div className="
            site-footer
            p-20   
            bg-black text-white
         "
      >
         {/* MAILTO */}
         <ul className="flex justify-center">
            <li className="
               px-3 
               text-2xl
               hover:underline
            ">
               <a href="mailto:r.spectator272@passfwd.com">
                  <b>Say hello</b>
               </a>
            </li>
         </ul>

         {/* CREDITS */}
         <p className="py-10 text-center">
            Book editions featured on Ink's Library are from Penguin Classics.
         </p>
         <p className="text-center">
            © 2026 Ink's Library · @thepaleblues
         </p>
      </div>
   );
}


export default Footer