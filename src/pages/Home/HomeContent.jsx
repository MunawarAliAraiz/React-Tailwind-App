import React from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import cards from "../../utils/homeCards";
import HorizontalLine from "../../components/Horizontal Line/Hr";

const HomeContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">
          {/* Sub-Title 1 */}
          <h2 className="my-3 text-4xl font-bold text-green-700">
            Helping SME enterpreneurs
          </h2>

          {/* Text Content */}
          <p className="mt-4 text-gray-300 text-lg">
            Where Private Equity firms focus on +3M EBITBA/+10M revenue
            enterprises that are ideally led my management teams , do we focus
            on -2M EBITBA/+7,5M SME businesses that our founder led. Due to the
            higher risk, capital doesn’t go to these companies. New Group
            Capital specializes in helping this niche with the best M&A
            strategies available.
          </p>
          <HorizontalLine />

          {/* Sub-Title 2 */}
          <h2 className="my-4 text-4xl font-bold text-green-700">
            Setting Up for Success
          </h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Every business is different. And that’s the same story for the
            desired outcomes that the entrepreneur has in mind. The
            businessspecifics and desired outcomes need to match with what
            investment parties have in mind in order to create a mutal benefit
            for both parties. Therefore, often possible collaborations between
            investors in entrepreneurs don’t start or end not in the desired
            way.
          </p>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Not at New Group Capital. New Group Capital has partnered with more
            than +350 Angel investors, business investors, PE firms, M&A
            specialists and HNI’s. All with their unique skills. All with their
            ideal business that they are looking for.
          </p>
          <p className="md:pr-20 mt-4 text-gray-400 text-lg">
            Based on your business and your ideal outcome, we partner with the
            right parties in the market, making sure we serve you best.
          </p>
          <HorizontalLine />

          {/* Sub-Title 3 */}
          <h2 className="mt-12 text-5xl font-bold text-green-700">Videos</h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce auctor
          </p>
          <div className="container p-2 my-4 -mr-10">
            <CardSlider cards={cards} />
          </div>
          <HorizontalLine />
          
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
