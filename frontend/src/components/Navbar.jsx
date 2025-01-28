import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold cursor-pointer"
        >
          TeamLite
        </motion.div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "Features", "About", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#ffcc00" }}
              className="cursor-pointer hover:text-yellow-400 transition-colors duration-200"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
