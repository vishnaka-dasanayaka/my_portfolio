import React from "react";
import name from "../assets/img/name.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const navItems = [
    { label: "Services", link: "#services" },
    { label: "Works", link: "#works" },
    { label: "Experience", link: "#experience" },
    { label: "Blogs", link: "./blogs" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0D1117] text-white shadow-md">
      <div className="flex items-center justify-between h-16 px-6 lg:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center h-full">
          <img
            src={name}
            alt="Logo"
            className="h-10 object-contain cursor-pointer hover:scale-105 transition"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-sm uppercase tracking-wide text-gray-300 hover:text-orange-400 transition border-b-2 border-transparent hover:border-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+94713704691"
            className="hidden lg:block text-sm text-gray-300 hover:text-white transition"
          >
            (+94) 71 370 4691
          </a>
          <div className="lg:hidden cursor-pointer text-gray-300">
            <MenuIcon fontSize="medium" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
