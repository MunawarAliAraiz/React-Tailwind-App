import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/ngc_logo.jpg'

const NewsLetter = () => {
  return (
    
      <div className="w-full py-5 bg-gray-700/40 text-white shadow-sm shadow-white">
            {/* Content in the top card */}
            <div className="flex flex-col items-center justify-center h-44 relative z-10">
              {/* Form */}
              <form className="flex flex-col items-center">
                <label className="text-xl">Subscribe to Newsletter</label>
                <p className="text-center mt-4 text-slate-400">Subscribe to this news letter to get daily update</p>
                <div className='flex flex-col md:flex-row m-1 items-center'>
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 mx-2 my-2 rounded bg-black/60 text-white" />
                <button type="submit" className="bg-light-green-800 text-white px-4 py-2 rounded  hover:bg-green-900">Subscribe</button>
                </div>
              </form>
            </div>
      </div>
  );
};

export default NewsLetter;
