import '../index.css';


function Footer() {
   return (
         <footer className="
            site-footer
            p-20   
            bg-black text-white
         "
      >
         {/* MAILTO */}
         <ul className="flex justify-center">
            <li className="
               px-3 pb-10
               text-2xl
               hover:underline
            ">
               <a href="mailto:r.spectator272@passfwd.com">
                  <b>Say hello</b>
               </a>
            </li>
         </ul>

         {/* CREDITS */}
         <p className="py-5 text-center">
            Book editions featured on Ink's Library are from Penguin Classics.
         </p>
         <p className="text-center">
            © 2026 Ink's Library · @thepaleblues
         </p>
         <p className="text-center pt-24">
            P.S. Ink WILL judge you.
         </p>
      </footer>
   );
}


export default Footer