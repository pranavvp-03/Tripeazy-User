import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact us", path: "/contact" },
    { name: "Agencies", path: "/agencies" },
    { name: "About us", path: "/about" },
  ];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-11 h-11 mr-3 " />
          <h1 className="text-3xl font-bold text-black">Tripeazy</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-center">
          <ul className="flex space-x-10 relative">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-lg font-medium transition ${
                    location.pathname === item.path
                      ? "text-pink-600 font-bold"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Underline spanning all menu items */}
          <div className="w-full h-1 bg-black mt-2"></div>
        </div>

        {/* Sign Up Button */}
        <button
          className="hidden md:block px-5 py-2 bg-purple-600 text-white rounded-lg"
          onClick={() => (window.location.href = "/login")}
        >
          Sign Up
        </button>
        

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-lg font-medium transition ${
                    location.pathname === item.path
                      ? "text-pink-600 font-bold"
                      : "text-black"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
