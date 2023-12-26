import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/ngc_logo.jpg'

const NewsLetter = () => {
  return (
    <footer className="bg-black/80 rounded-t-2xl text-white shadow-sm shadow-white">
      {/* Full-width container */}
      <div className="w-full">
            {/* Content in the top card */}
            <div className=" bg-gray-700/40 flex flex-col items-center justify-center h-44 relative z-10">
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
    </footer>
  );
};

export default NewsLetter;
