import React from 'react';

const Header = () => {
  return (
    <div className="h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto p-4 m-4">

        {/* Responsive Card */}
        <div className="max-w-screen-xl mx-auto bg-black/70 rounded-3xl shadow-lg shadow-white/20 overflow-hidden flex flex-col md:flex-row">

          {/* Text Column */}
          <div className="lg:text-left sm:text-center lg:w-1/2 lg:p-16 p-10">
            {/* Title */}
            <h2 className="text-6xl font-bold text-green-700">Private Equity Excellence for SMEs</h2>

            {/* Text Content */}
            <p className="lg:pr-20 mt-4 text-gray-300 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor metus nec massa commodo, a vehicula nunc varius.</p>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2">
            {/* Image (Top) */}
            <img className="w-full h-full object-cover" src="https://placekitten.com/800/600" alt="Card Image" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
