import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/ngc_logo.jpg'

const ResponsiveFooter = () => {
  return (
    <footer className="bg-black/80 rounded-t-2xl text-white shadow-lg shadow-white">
      {/* Full-width container */}
      <div className="w-full">

        {/* Stacked Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Top Card (Double Height) */}
          <div className="md:col-span-2 md:row-span-2 bg-cover bg-center md:h-48 relative">
            
            {/* Content in the top card */}
            <div className=" bg-gray-100/40 flex flex-col items-center justify-center h-44 relative z-10">
              {/* Form */}
              <form className="flex flex-col items-center">
                <label className="text-xl">Subscribe to Newsletter</label>
                <p className="text-center mt-4 text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex flex-col md:flex-row m-1 items-center'>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 mx-2 my-2 rounded bg-black/60 text-white" />
                <button type="submit" className="bg-light-green-800 text-white px-4 py-2 rounded  hover:bg-green-900">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Card (Half Height) */}
            <div className="w-full bg-black opacity-70 md:col-span-2 rounded-md overflow-hidden p-5 md:h-40">
          <Link to='/' key={'home'}>
              {/* Logo */}
              <img src={logo} alt="Logo" className="w-36 md:w-48 md:h-30 mx-auto rounded-lg" />
          </Link>
            </div>

        </div>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
