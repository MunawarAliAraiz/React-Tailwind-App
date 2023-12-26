import React from 'react';
import { CarouselDefault } from '../Carousel/Carousel';
import cards from '../../utils/homeCards';
import HorizontalLine from '../Horizontal Line/Hr';

const Header = () => {
  return (
    <div className="h-2/4 h">
      {/* Full-width container */}
      <div className="my-4">

        {/* Responsive Card */}
        <div className="px-3 bg-black/70 rounded-xl shadow-lg shadow-white/20 flex flex-col md:flex-row">

          {/* Text Column */}
          <div className="lg:text-left sm:text-center lg:w-1/2 lg:p-16 p-10">
            {/* Title */}
            <h2 className="text-6xl font-bold text-green-700">Private Equity Excellence for SMEs</h2>

            {/* Text Content */}
            <p className="lg:pr-20 mt-4 text-gray-300 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor metus nec massa commodo, a vehicula nunc varius.</p>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2">
            <CarouselDefault/>
          </div>
          <HorizontalLine/>

        </div>

      </div>
    </div>
  );
};

export default Header;
