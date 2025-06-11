import { useState } from "react";
import { links } from "../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-emerald-100 shadow-md">
      <div className="align-element py-4 flex justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 relative">
        <h2 className="text-3xl font-bold tracking-wide">
          Esmat
          <span className="text-emerald-600"> Portfolio</span>
        </h2>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-x-6 ">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-3xl text-emerald-700 hover:text-emerald-600 duration-300"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out bg-emerald-100 absolute  right-0 top-full mt-2 w-full shadow-lg rounded-md transform ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
          role="menu"
          aria-activedescendant="mobile-menu"
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col items-center px-8 pb-4 gap-y-4">
            {links.map(({ id, href, text }) => (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className="bg-emerald-100 ">
//   <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
//     <h2 className="text-3xl font-bold">
//       Esmat
//       <span className="text-emerald-600"> Portfolio</span>
//     </h2>
//     <div className="flex gap-x-3">
//       {links.map((link) => {
//         const { id, href, text } = link;
//         return (
//           <a
//             key={id}
//             href={href}
//             className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
//           >
//             {text}
//           </a>
//         );
//       })}
//     </div>
//   </div>
// </nav>
