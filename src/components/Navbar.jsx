import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Domains", "Work Flow", "Contact"];

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const handleClick = (link) => {
    if (link === "Home") {
      handleScroll("Hero");
    } else if (link === "About") {
      handleScroll("why-foxkrit");
    } else if (link === "Domains") {
      handleScroll("specialized-domains");
    } else if (link === "Work Flow") {
      handleScroll("how-we-work");
    } else if (link === "Contact") {
      handleScroll("footer");
    }
    else {
      console.log("Navigating to:", link);
    }
  };

  return (
    <nav className="fixed top-3 sm:top-4 left-0 right-0 z-50 mx-3 sm:mx-4">
      <div className="container mx-auto flex items-center justify-between py-2.5 sm:py-3 md:py-3.5 px-3 sm:px-4 md:px-8 lg:px-10 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20">

        {/* Logo */}
        <div
          className="text-lg sm:text-xl md:text-xl font-bold cursor-pointer text-white hover:text-gray-300 transition"
          onClick={() => handleScroll("Hero")}
        >
          FOXKRIT
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-x-4 lg:gap-x-6 uppercase font-medium text-sm">
          {links.map((link) => (
            <li
              key={link}
              className="relative cursor-pointer group px-2 py-1 overflow-hidden"
              onClick={() => handleClick(link)}
            >
              <span className="relative z-10 text-white">{link}</span>
              <span className="absolute left-0 bottom-0 w-full h-full bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-md"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
          <ul className="flex flex-col gap-y-2 p-4 uppercase font-medium">
            {links.map((link) => (
              <li
                key={link}
                className="relative cursor-pointer group py-2 px-2 overflow-hidden rounded-md"
                onClick={() => handleClick(link)}
              >
                <span className="relative z-10 text-white">{link}</span>
                <span className="absolute left-0 bottom-0 w-full h-full bg-white/20 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-md"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;