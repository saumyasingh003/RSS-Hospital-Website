import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { RiArrowDownSFill, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom"; 

const SecondNavbar = () => {
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 mt-0 fixed top-[3.5rem]  bg-white shadow-md z-50 w-screen">
      <div className="flex items-center gap-2 ">
        <img
          src={logo}
          alt="Ford Hospital Logo"
          className="h-16 w-16 object-cover my-2 "
        />
        <div className="flex flex-col font-bold text-xs ">
          <span>Dr. Raj Shekhar Shrivastava Para Medical College</span>
          <span>Hiropatti, Jagban, Near Kamtaul, Madhubani (Bihar), India</span>
        </div>
      </div>

      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RiCloseLine className="h-8 w-8 text-black" />
          ) : (
            <RiMenu3Line className="h-8 w-8 text-black" />
          )}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? " flex flex-col mt-4" : "hidden"
        } lg:flex lg:space-x-4 text-xs  font-normal text-gray-700 absolute lg:relative top-20 left-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md lg:flex-row flex-col lg:p-0 p-4 z-40 `}
      >
        <a
          href="#home"
          className="hover:text-green-700 text-black font-bold uppercase py-2 lg:py-0"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-green-700 text-black font-bold uppercase py-2  lg:py-0"
        >
          About Us
        </a>
        <a
          href="#faculty"
          className="hover:text-green-700 text-black font-bold uppercase py-2 lg:py-0"
        >
          Faculty
        </a>

        <div
          className="relative"
          onMouseEnter={() => setIsStudentDropdownOpen(true)}
          onMouseLeave={() => setIsStudentDropdownOpen(false)}
        >
          <a
            href="/#"
            className="hover:text-green-700 text-black font-bold uppercase flex items-center py-2 lg:py-0 w-32 lg:w-auto"
          >
            Student Corner
            <RiArrowDownSFill className="ml-2" />
          </a>
          <div
            className={`absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-10 transition-all duration-300 ease-in-out ${
              isStudentDropdownOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <Link
              to="/#"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Academic Calendar
            </Link>
            <Link
              to="/#"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Syllabus
            </Link>
            <Link
              to="/#"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Time-Table
            </Link>
            <Link
              to="/#"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Student Events
            </Link>
            <Link
              to="/#"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Results
            </Link>
          </div>
        </div>

        <Link
          to="/#"
          className="hover:text-green-700 text-black font-bold uppercase py-2 lg:py-0"
        >
          Admission
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setIsCoursesDropdownOpen(true)}
          onMouseLeave={() => setIsCoursesDropdownOpen(false)}
        >
          <a
            href="#courses"
            className="hover:text-green-700 text-black font-bold uppercase flex items-center py-2 lg:py-0"
          >
            Courses
            <RiArrowDownSFill className="ml-2" />
          </a>
          <div
            className={`absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-10 transition-all duration-300 ease-in-out ${
              isCoursesDropdownOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <a
              href="#courses"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Medical Laboratory Technician
            </a>
            <a
              href="#courses"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Operation Theatre Assistant
            </a>
            <a
              href="#courses"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Ophthalmic Assistant
            </a>
            <a
              href="#courses"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
            >
              Dresser
            </a>
          </div>
        </div>

        <a
          href="#gallery"
          className="hover:text-green-700 text-black font-bold uppercase py-2 lg:py-0"
        >
          Gallery
        </a>
        <Link
          to="/#"
          className="hover:text-green-700 text-black font-bold uppercase py-2 lg:py-0"
        >
          Scholarship
        </Link>
        <a
          href="#contact"
          className="hover:text-green-700 text-black lg:w-auto w-20 font-bold uppercase py-2 lg:py-0"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default SecondNavbar;
