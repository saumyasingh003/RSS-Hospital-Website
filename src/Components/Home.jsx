import React from "react";
import Carousel from "./slider/Carousal.jsx";
import GalleryCarousal  from "./slider/GalleryCarousal.jsx";
import { FaUserGraduate, FaHandsHelping, FaDollarSign } from "react-icons/fa";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { FaRocket, FaLightbulb } from "react-icons/fa";
import principal from "../assets/principal.jpg";
import college_picture2 from "../assets/college_picture2.jpg";
import faculty1 from "../assets/faculty1.jpg";
import faculty2 from "../assets/faculty2.jpg";
import faculty3 from "../assets/faculty3.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import ImportantNoticeCard from "./ImportantNotice.jsx";
const Home = () => {
  return (
    <div className="w-screen" id="home">
      <div className="flex md:flex-row flex-col-reverse  items-center justify-between relative top-16 mt-24 gap-2  mb-20 w-full">
      <div className="md:w-1/4 w-96">
        <ImportantNoticeCard/>
      </div>
      <div className="lg:w-3/4  md:w-2/3 w-screen ">
        <Carousel />

      </div>
      </div>
      {/* extra info */}
      <div className="relative mt-16 mb-10">
        <div className="flex justify-around items-center bg-gray-100 py-8">
          <div className="flex flex-col items-center text-center mx-4">
            <div className="text-teal-800 mb-2">
              <FaUserGraduate className="text-4xl" />
            </div>
            <h3 className="md:text-xl font-semibold">Comprehensive Training</h3>
            <p className="text-gray-600 md:text-normal text-sm">Diverse program offerings</p>
          </div>

          <div className="h-24 border-l-2 border-gray-300"></div>

          <div className="flex flex-col items-center text-center mx-4">
            <div className="text-teal-800 mb-2">
              <FaHandsHelping className="text-4xl" />
            </div>
            <h3 className="md:text-xl text-sm font-semibold">Hands-On Experience</h3>
            <p className="text-gray-600 md:text-normal text-sm">Clinical and lab practice</p>
          </div>

          <div className="h-24 border-l-2 border-gray-300"></div>

          <div className="flex flex-col items-center text-center mx-4">
            <div className="text-teal-800 mb-2">
              <FaDollarSign className="text-4xl" />
            </div>
            <h3 className="md:text-xl text-sm font-semibold">Affordable Education</h3>
            <p className="text-gray-600 md:text-normal text-sm">Quality education, low cost</p>
          </div>
        </div>
      </div>

      {/* about the college  */}
      <div className="flex flex-col md:flex-row md:items-start items-center justify-between md:px-28 px-2  md:py-8" id="about">
        <div className="flex-1 md:mr-8">
          <h1 className="md:text-4xl text-3xl font-bold text-[#345E9E] mb-4 text-center">
            Welcome To RSS
          </h1>
          <p className="text-gray-600 mb-6 text-center">
            Dr. Raj Shekhar Shrivastava Para Medical College, situated in
            Hiropatti, Jagban, near Kamtaul in Madhubani, Bihar, India, is
            committed to delivering exceptional education in the field of
            para-medical sciences. The college is focused on equipping students
            with the necessary knowledge and skills to excel in various
            healthcare roles. By offering a comprehensive curriculum and
            hands-on training, the institution aims to address the increasing
            need for proficient healthcare professionals in the industry. The
            college's mission is to produce graduates who are not only
            well-versed in medical practices but also capable of adapting to the
            dynamic challenges of the healthcare sector. With a strong emphasis
            on practical experience and academic excellence, Dr. Raj Shekhar
            Shrivastava Para Medical College strives to contribute significantly
            to the healthcare workforce, ensuring that its graduates are
            prepared to deliver high-quality care and support within their
            communities and beyond.
          </p>
        </div>
      </div>

      <div className="relative mt-2 md:px-28 px-4">
        <div className="flex md:flex-row flex-col justify-between md:space-x-8 max-[768px]:space-y-4">
          <div className="flex-1 bg-gradient-to-r from-teal-600 to-teal-800 text-white p-6 rounded-lg shadow-md cursor-pointer">
            <div className="flex flex-col items-center">
              <FaRocket className="text-5xl mb-4" />
              <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
              <p className="text-sm text-center">
                To impact comprehensive education and training in paramedical
                sciences, fostering a new generation of healthcare professionals
                equipped with knowledge, skills, and compassion to serve
                society. We are committed to advancing the field through
                innovative practices and a supportive learning environment that
                empowers our students to excel and make a meaningful difference
                in the healthcare industry.
              </p>
            </div>
          </div>


          <div className="flex-1 bg-gradient-to-r from-teal-600 to-teal-800 text-white p-6 rounded-lg shadow-md cursor-pointer">
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-5xl mb-4" />
              <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
              <p className="text-sm text-center">
                To be a leading paramedical institution recognized for
                excellence in education, training, and research, contributing
                significantly to the healthcare sector. We aim to set new
                standards through innovative programs and cutting-edge research,
                positioning ourselves as a pivotal contributor to advancements
                in healthcare and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start items-center justify-between  mt-8 md:px-28 px-2 text-center md:py-8 py-4">
        <div className="md:flex-1 md:mr-8   ">
          <h1 className=" md:text-4xl text-3xl font-bold text-[#345E9E] mb-16">
            From the Principal's Desk
          </h1>
          <div className="flex md:flex-row  flex-col items-center border-2 border-blue-500 hover:shadow-blue-300 shadow-lg px-4 py-12 transition-all ease-in-out duration-200   hover:cursor-pointer rounded-md">
            <div className="md:w-1/4 md:mr-8">
              <img
                src={principal}
                alt="Principal's Image"
                className="rounded-full  w-40 h-40 object-fit border-2 border-white  hover:shadow-lg hover:shadow-cyan-600"
              />
            </div>
            <div className="flex-1  space-y-3">
              <p className="text-gray-700 font-bold text-4xl">Dr. Ashish Shekhar</p>
              <p className="text-green-700 font-bold ">MBBS</p>
              <p>
                It is a great privilege and honor to be a part of the mission to
                make “DR. RAJ SHEKHAR SHRIVASTAVA PARA MEDICAL COLLEGE” a name
                to reckon within the academic fraternity by giving a strong
                impetus to creating an environment of knowledge, application and
                holistically inspiring youth to become leaders of tomorrow. I
                believe that the rigours of the contemporary world will require
                knowledgeable professionals who could withstand the dynamics of
                the fast-changing world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our Courses */}
      <div className="bg-[#F3F3F3] items-start justify-between mb-10 mt-8" id="courses">
        <h1 className="md:text-4xl text-3xl text-center font-bold text-[#345E9E] relative pt-16 mb-4 mt-4">
          Courses Offered
        </h1>
        <div className="h-1 w-24 bg-teal-500 mx-auto mt-2"></div>
        <div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="flex flex-wrap justify-center md:px-8 py-8">
              <div className="w-full md:w-1/2 p-4 ">
                <div className="px-8 py-6 bg-white shadow-md rounded border-2 border-blue-500 cursor-pointer hover:shadow-blue-400 hover:shadow-lg">
                  <div className="font-bold text-xl text-teal-900 mb-4">
                    Diploma in Medical Laboratory Technician (DMLT)
                  </div>
                  <p className="text-gray-700 text-base">
                    Diploma in Medical Laboratory Technician program at RSS Para
                    Medical College is designed to provide students with the
                    knowledge and practical skills necessary to perform a
                    variety of laboratory tests and procedures. DMLTs play a
                    crucial role in the healthcare system by providing vital
                    information that helps in the diagnosis, treatment, and
                    prevention of diseases.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="px-8 py-6 bg-white shadow-md rounded border-2 border-blue-500 cursor-pointer hover:shadow-blue-400 hover:shadow-lg">
                  <div className="font-bold text-xl text-teal-900 mb-4">
                    Diploma in Operation Theater Assistant (DOTA)
                  </div>
                  <p className="text-gray-700 text-base">
                    The Diploma in Operation Theater Assistant program is
                    meticulously designed to train students in the essential
                    skills required to assist surgeons and other medical
                    professionals during complex surgeries. DOTAs are crucial
                    members of the surgical team, ensuring the smooth and
                    efficient operation of the theater and providing critical
                    support during various surgical procedures
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="px-8 py-6 bg-white shadow-md rounded border-2 border-blue-500 cursor-pointer hover:shadow-blue-400 hover:shadow-lg">
                  <div className="font-bold text-xl text-teal-900 mb-4">
                    Diploma in Ophthalmic Assistant (DOA)
                  </div>
                  <p className="text-gray-700 text-base">
                    This program is designed to prepare students for careers in
                    eye care. Ophthalmic Assistants work alongside
                    ophthalmologists and optometrists, performing a range of
                    tasks including patient preparation, conducting basic eye
                    tests, and assisting during eye surgeries.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="px-8 py-6 bg-white shadow-md rounded border-2 border-blue-500 cursor-pointer hover:shadow-blue-400 hover:shadow-lg">
                  <div className="font-bold text-xl text-teal-900 mb-4">
                    Certificate in Medical Dresser (CMD)
                  </div>
                  <p className="text-gray-700 text-base">
                    The Dresser program is designed to train students in the
                    fundamental skills needed to assist medical professionals in
                    the care and dressing of wounds. Dressers play an essential
                    role in hospitals, clinics, and community health settings by
                    providing essential support in wound management and patient
                    care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className=" items-start justify-between mb-10 mt-8" id="faculty">
        <h1 className="md:text-4xl text-3xl text-center font-bold text-[#345E9E] relative pt-16 mb-4 mt-4 uppercase">
          Our Faculty
        </h1>
        <div className="h-1 w-24 bg-teal-500 mx-auto mt-2 mb-10"></div>
        <div className="flex justify-between md:flex-row items-center flex-col max-[768px]:gap-8 md:space-x-12 md:px-48 py-10">
       
          <div className="md:w-1/3 bg-white border-2 border-blue-500 cursor-pointer hover:shadow-blue-200  rounded-lg shadow-lg p-4 text-center transition-transform transform md:hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <img
                src={faculty1}
                alt="Dr. Dipali Shekhar Shrivastava"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold">
              Dr. Dipali Shekhar Shrivastava
            </h2>
            <p className="text-teal-600 font-bold">MBBS</p>
          </div>

        
          <div className="md:w-1/3 bg-white rounded-lg shadow-lg border-2 border-blue-500 cursor-pointer hover:shadow-blue-200 p-4 text-center transition-transform transform md:hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <img
                src={faculty2}
                alt="Dr. Amit Shekhar Shrivastava"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold">Dr. Amit Shekhar Shrivastava</h2>
            <p className="text-teal-600 font-bold">MBBS</p>
          </div>

        
          <div className="md:w-1/3 bg-white rounded-lg shadow-lg border-2 border-blue-500 cursor-pointer hover:shadow-blue-200 p-2.5 text-center transition-transform transform md:hover:scale-105 hover:shadow-xl">
            <div className="mb-4">
              <img
                src={faculty3}
                alt="Dr. Aakanksha Shekhar Shrivastava"
                className="w-32 h-32 mx-auto rounded-full"
              />
            </div>
            <h2 className="text-xl font-bold">
              Dr. Aakanksha Shekhar Shrivastava
            </h2>
            <p className="text-teal-600 font-bold">MBBS</p>
          </div>
        </div>
      </div>

     
      <div className="bg-[#F3F3F3] items-start justify-between mb-10 mt-8">
        <h1 className="text-4xl text-center font-bold text-[#345E9E] relative pt-16 mb-4 mt-4">
          Blogs
        </h1>
        <div className="h-1 w-24 bg-teal-500 mx-auto mt-2"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
            <img
              src={blog1}
              alt="Madhubani, Bihar"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Madhubani, Bihar
              </h2>
              <p className="text-sm text-gray-600">Published on: 21-02-2022</p>
              <p className="mt-2 text-gray-700">
                Madhubani is a City Municipal Corporation and headquarter of
                Madhubani district. Madhubani is situated in the Indian state of
                Bihar. It comes under Darbhanga Division.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
              >
                Read More...
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
            <img
              src={blog2}
              alt="Madhubani Painting"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Madhubani Painting
              </h2>
              <p className="text-sm text-gray-600">Published on: 21-02-2022</p>
              <p className="mt-2 text-gray-700">
                Madhubani art, also known as Mithila art, originates from the
                Madhubani district in Bihar, India. It is a traditional painting
                style practiced in the Mithila region of India and Nepal.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
              >
                Read More...
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
            <img
              src={blog3}
              alt="About Paramedical"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                About Paramedical
              </h2>
              <p className="text-sm text-gray-600">Published on: 21-02-2022</p>
              <p className="mt-2 text-gray-700">
                Paramedical science, also known as paramedicine, has served as a
                lateral aid to the medical science. Their primary role is to
                provide pre-hospital medical care to the patients.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
              >
                Read More...
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
            <img
              src={blog4}
              alt="Job Opportunities"
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Job Opportunities
              </h2>
              <p className="text-sm text-gray-600">Published on: 21-02-2022</p>
              <p className="mt-2 text-gray-700">
                With the advent of technological development, several invasive
                and non-invasive tools were designed, that reported a sudden
                upsurge of trained paramedical manpower.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700"
              >
                Read More...
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" items-start justify-between mb-10 mt-8" id="gallery">
        <h1 className="text-4xl text-center font-bold text-[#345E9E] relative pt-16 mb-4 mt-4 uppercase">
          gallery
        </h1>
        <div className="h-1 w-24 bg-teal-500 mx-auto mt-2"/>
        
        <div className=" relative mt-10 px-16"> 
        <GalleryCarousal/>
        </div>
        
      </div>

      
      <div className="bg-[#F3F3F3]  mt-4" id="contact">
        <div className="w-full mx-auto px-8 py-16">
          <h1 className="text-4xl text-center font-bold text-[#345E9E] relative  mb-4">
            Location & Contact Us
          </h1>
          <div className="h-1 w-24 bg-teal-500 mx-auto mt-2 mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  place-items-center">
         
            <div>
              <div >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.2543594020367!2d85.83086114244826!3d26.35063378737012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb34900844251%3A0xc2395ec94939c199!2sDR%20RAJSHEKHAR%20SHRIVASASTAVA%20MEMORIAL%20HOSPITAL!5e0!3m2!1sen!2sin!4v1724947462974!5m2!1sen!2sin"
                
                  style={{border:"2px solid blue", borderRadius:"15px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="md:w-[680px] md:h-[480px] h-72"
                ></iframe>
              </div>
            </div>

     
            <div className="bg-white w-full md:w-2/3 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="2"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#345E9E] text-white py-2 px-4 rounded-md shadow-lg hover:bg-teal-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
