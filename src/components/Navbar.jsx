import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 bg-blue-600 text-gray-200 w-full z-50 px-5  shadow-sm">
      <div className="mx-auto flex justify-between items-center max-w-[1300px] py-5">
        <a href="/" className=" text-2xl font-bold uppercase italic">
          Logo
        </a>
        <ul className="text-gray-200 gap-8 hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="md:hidden cursor-pointer" />
          ) : (
            <Menu className="md:hidden cursor-pointer" />
          )}
        </div>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 bg-gray-200 text-gray-800 w-full text-center py-6 space-y-2`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>Contact</li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
