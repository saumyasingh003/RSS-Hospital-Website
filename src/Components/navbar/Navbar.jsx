import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUserAlt
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-teal-700 text-white text-sm fixed top-0 left-0 right-0 z-50 p-2">
      <div className="container mx-auto flex md:justify-between items-center p-2">
        <div className="flex md:flex-row flex-col  md:space-x-4">
          <div className="flex  items-center space-x-1">
            <FaPhoneAlt />
            <span>Call : +91 7004890434 , +91 9534229900</span>
          </div>
          <div className="flex items-center space-x-1 md:border-l border-white md:pl-4">
            <FaMapMarkerAlt />
            <span>Madhubani, Bihar</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 pl-4 pr-10">
 
  <button className="flex items-center space-x-1 bg-teal-700  text-white font-bold py-1 px-3 rounded">
    <FaUserAlt />
    <span>Login</span>
  </button>

  {/* Vertical Line */}
  <div className="border-l border-white h-6 mx-4"></div>

<div className="hidden md:flex gap-2 ">

  <FaFacebookF className="hover:text-gray-300 cursor-pointer text-xl" />
  <FaTwitter className="hover:text-gray-300 cursor-pointer text-xl" />
  <FaLinkedinIn className="hover:text-gray-300 cursor-pointer text-xl" />
  <FaInstagram className="hover:text-gray-300 cursor-pointer text-xl" />
</div>
</div>

  </div>
</div>

      
      
    
  );
};

export default Navbar;
