import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import logo from "../../assets/logo.png";
import ProfilePopup from "./ProfilePopup";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Agencies", path: "/agencies" },
    { name: "Packages", path: "/packages" },
    { name: "Blog", path: "/blogs" },
    { name: "About us", path: "/about-us" },
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

  // Logout Handler
  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/login";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-11 h-11 mr-3" />
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
          <div className="w-full h-1 bg-black mt-2"></div>
        </div>

        {/* Conditional Button - Login/Profile Popup */}
        {isAuthenticated ? (
  <div className="hidden md:flex items-center space-x-4 relative">
    <span className="text-lg font-medium text-black">Hey, {user?.name}</span>
    <button
      className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center overflow-hidden"
      onClick={() => setShowProfilePopup((prev) => !prev)}
    >
      {user?.profilePhoto ? (
        <img
          src={user?.profilePhoto}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span className="text-xl">{user?.name?.charAt(0).toUpperCase()}</span>
      )}
    </button>
    {showProfilePopup && (
      <ProfilePopup user={user} onClose={() => setShowProfilePopup(false)} />
    )}
  </div>
) : (
  <button
    className="hidden md:block px-5 py-2 bg-purple-600 text-white rounded-lg"
    onClick={() => (window.location.href = "/login")}
  >
    Sign Up
  </button>
)}

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
            {isAuthenticated ? (
              <button
                className="px-5 py-2 bg-red-600 text-white rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="px-5 py-2 bg-purple-600 text-white rounded-lg"
                onClick={() => (window.location.href = "/login")}
              >
                Sign Up
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
