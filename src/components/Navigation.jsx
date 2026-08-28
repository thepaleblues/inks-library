import { NavLink } from 'react-router-dom';

import '../index.css';


function Nav({ address, text }) {
   return (
      <li className="px-4 text-xl">
         <NavLink
            to={address}
            className={({ isActive }) =>
               isActive
                  ? "underline text-black"
                  : "text-stone-500 hover:text-stone-400 hover:underline"
            }
         >
            {text}
         </NavLink>
      </li>
   )
}

function Navbar() {
   return (
      <div className="
            sticky top-0 z-10
            flex justify-center
            border-b
            border-transparent
            bg-white
            drop-shadow-sm
         "
      >
         <nav>
            <ul className="
                  flex 
                  gap-2 
                  p-4
                  text-black
               "
            >
               <Nav address="/" text="Home" />
               <Nav address="/library" text="Library" />
               <Nav address="/about" text="About" />
            </ul>
         </nav>
      </div>
   )
}


export default Navbar