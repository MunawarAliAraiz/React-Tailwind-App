import React from 'react';
import { Link } from "react-router-dom";

const ResponsiveFooter = () => {
  return (
    <footer className="bg-black/80 rounded-t-2xl text-white shadow-lg shadow-white">
      {/* Full-width container */}
      <div className="container mx-auto p-4">

        {/* Stacked Cards */}
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">

          {/* Top Card (Double Height) */}
          <div className="md:col-span-2 md:row-span-2 bg-cover p-2 bg-center md:h-48 relative">
            {/* Overlay for darkening the background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            {/* Content in the top card */}
            <div className="flex flex-col items-center justify-center h-44 relative z-10">
              {/* Form */}
              <form className="flex flex-col items-center">
                <label className="text-xl">Subscribe to Newsletter</label>
                <p className="text-center mt-4 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex flex-col md:flex-row m-1 items-center'>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 mx-2 my-2 rounded bg-gray-700 text-white" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Card (Half Height) */}
            <div className="bg-black opacity-70 md:col-span-2 rounded-md  overflow-hidden p-5 md:h-40">
          <Link to='/' key={'hom'}>
              {/* Logo */}
              <img src="/src/assets/logo.jpg" alt="Logo" className="w-36 md:w-48 md:h-30 mx-auto rounded-lg" />
          </Link>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
