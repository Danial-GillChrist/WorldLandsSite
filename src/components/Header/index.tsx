import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const navLinkClass = ({ isActive }) =>
    `relative text-white transition-colors ${
      isActive
        ? "font-semibold after:content-[''] after:absolute after:-top-1 after:left-0 after:w-1 after:h-1 after:bg-green-400 after:rounded-full"
        : "hover:text-gray-300"
    }`;

  return (
    <header className="h-16 flex items-center bg-gray-900">
      <div className="container mx-auto px-4 w-full">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="siteLogo">
            <NavLink to="/" className="text-white font-bold text-2xl">
              WorldLands
            </NavLink>
          </div>

          {/* Menu */}
          <ul
            className={`flex flex-col md:flex-row gap-6 absolute md:static top-5 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-1 md:p-0 transition-all duration-300 ${
              show ? "block" : "hidden md:flex"
            }`}
          >
            <li>
              <NavLink to="/" end className={navLinkClass} onClick={() => setShow(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass} onClick={() => setShow(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className={navLinkClass} onClick={() => setShow(false)}>
                Country
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setShow(false)}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Hamburger */}
          <button className="md:hidden" onClick={handleToggle}>
            <LuMenu className="text-white text-2xl" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
