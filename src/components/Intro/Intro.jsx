import React from "react";
import CardSlider from "../CardSlider/CardSlider";
import cards from "../../utils/homeCards";
import HorizontalLine from "../Horizontal Line/Hr";

const Intro = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto p-4 m-4 ">
        {/* Responsive Card */}
        <div className="max-w-screen-xl my-8 mx-auto bg-black/70 rounded-3xl shadow-lg shadow-white/20 overflow-hidden flex flex-col">
          <HorizontalLine/>
          {/* Text Column */}
          <div className="lg:text-left sm:text-center lg:p-16 p-10">
            {/* Intro Title */}
            <h2 className="text-6xl font-bold text-green-700">Intro</h2>

            {/* Text Content */}
            <p className="md:pr-20 mt-4 text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              auctor metus nec massa commodo, a vehicula nunc varius. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor
              metus nec massa commodo, a vehicula nunc varius.
            </p>
          </div>

          <div className="container mb-8 px-8">
            <CardSlider cards={cards} />
          </div>
          <HorizontalLine/>
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
