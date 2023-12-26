import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../assets/ngc_logo.jpg'
 
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-green-700 text-xl font-semibold mb-4">Contact Details</h2>
          <div className='lg:text-left'>
            <p>Name: Capital Group</p>
            <p>Email: capitalgroup@example.com</p>
            <p>Contact: +123 456 7890</p>
            <p>Address: 123 Main St, New York</p>
          </div>
        </div>

        {/*Desktop Logo */}
        <div className="hidden lg:block text-center">
            <Link to='/' key={'home'}>
                <img src={logo} alt="Logo" className="w-36 md:w-48 md:h-30 mx-auto rounded-lg" />
            </Link>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-green-700 text-xl font-semibold mb-4">Social Media</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook fa-lg lg:fa-2x"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter fa-lg lg:fa-2x"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram fa-lg lg:fa-2x"></i>
            </a>
          </div>
        </div>

        {/*Mobile Logo */}
        <div className="lg:hidden text-center">
              <Link to='/' key={'home'}>
                  <img src={logo} alt="Logo" className="w-36 md:w-48 md:h-30 mx-auto rounded-lg" />
              </Link>
        </div>

      </div>

      {/* All Rights Reserved */}
      <div className="text-center mt-8">
        <p>&copy; {currentYear} Capital Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
