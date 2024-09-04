import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <div>
      <footer className="bg-teal-800 text-white pt-12  ">
        

        <div className="flex items-start">
            <img src="logo.png" alt="College Logo" className="h-16 mr-4" /> {/* Adjust the height as needed */}
            <div>
              <h2 className="text-xl font-bold">Dr. Raj Shekhar Shrivastava Para Medical College</h2>
              <p className="text-sm">Hiropatti, Jagban, Near Kamtaul, Madhubani, Bihar</p>
           
            </div>
          </div>

          <div className="w-screen-xl px-5 md:px-10 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
  {/* Online Courses */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Online Courses</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="text-white hover:text-teal-600">Swayam Central</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">UGC MOOCs: A Vertical of SWAYAM</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">e-PGPathshala</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Swayam Prabha | 32 DTH channels</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">CEC Youtube Channel</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">National Digital Library of India</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Shodhganga</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">E-ShodhSindhu</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Vidwan | Profile Page - Inflibnet</a></li>
    </ul>
  </div>

  {/* Administration Wing */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Administration Wing</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="text-white hover:text-teal-600">Academic Affairs College</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Development Council (CDC)</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Research & Development</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Computer Centre Students Affairs</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">UGC - HRD Centre</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Development Centre Media</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Relations Information Management Center</a></li>
    </ul>
  </div>

  {/* Central Facilities */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Central Facilities</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="text-white hover:text-teal-600">Para Medical Studies</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Library</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Computer Lab</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Press & Publications</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Training & Placement</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Employment & Guidance Bureau</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Horticulture & Gardening Unit</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Health Services</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">National Service Scheme (NSS)</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">National Cadet Corps (NCC)</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Transport</a></li>
    </ul>
  </div>

  {/* Contact Information */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
    <p className="text-sm">Phone No: +91-7004-890434</p>
    <p className="text-sm mt-2">Email: <a href="mailto:dr.rssparamedicalcollege@gmail.com" className="text-white hover:text-teal-600">dr.rssparamedicalcollege@gmail.com</a></p>

    <div className="mt-4 flex space-x-4">
      <a href="https://www.facebook.com" className="text-white hover:text-teal-600"><FaFacebookF /></a>
      <a href="https://www.twitter.com" className="text-white hover:text-teal-600"><FaTwitter /></a>
      <a href="https://www.google.com" className="text-white hover:text-teal-600"><FaGoogle /></a>
    </div>

    <h3 className="text-lg font-semibold mt-8 mb-4">Sports & Hostels</h3>
    <ul className="space-y-2 text-sm">
      <li><a href="#" className="text-white hover:text-teal-600">Anti Ragging Committee Cell for Differently Abled Persons</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Boys Hostel</a></li>
      <li><a href="#" className="text-white hover:text-teal-600">Girls Hostel</a></li>
    </ul> 
  </div>
</div>


        <div className="border-t border-teal-700 mt-8 pt-4 text-center text-sm">
          <p>Copyright © 2022 Dr. Raj Shekhar Shrivastava Para Medical College. All rights reserved.</p>
          <p>Developed and designed by: Arbazo</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
