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
        <div className="flex flex-col justify-center items-center">
          <div className='text-center lg:text-left'>
          <h2 className="text-green-700 text-xl font-semibold mb-4">Contact Details</h2>
            <p>Capital Group</p>
            <p>capitalgroup@example.com</p>
            <p>+123 456 7890</p>
            <p>123 Main St, New York</p>
          </div>
        </div>

        {/*Desktop Logo */}
        <div className="hidden lg:block justify-center items-center">
            <Link to='/' key={'home'}>
                <img src={logo} alt="Logo" className="w-36 md:w-48 md:h-30 mx-auto rounded-lg" />
            </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col justify-center items-center">
          <div>
          <h2 className="text-green-700 text-xl font-semibold mb-4">Social Media</h2>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <i className="fab fa-facebook fa-lg lg:fa-2x"></i>
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <i className="fab fa-twitter fa-lg lg:fa-2x"></i>
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
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
