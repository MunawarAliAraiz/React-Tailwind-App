import React from "react";
import HorizontalLine from "../../components/Horizontal Line/Hr";
import LogoCard from "../../components/Card/LogoCard";
import reqCards from "../../utils/reqCards";
import investorsCards from "../../utils/investorsCards";

const InvestorsContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">

          {/* Sub-Title 1 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            Finding the right investment opportunity is hard
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
          <HorizontalLine />

          {/* Sub-Title 2 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
          Find your perfect partner that adds value to your investment strategy 
          </h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
          Based on your needs, we present the deals we can invest in together. We are actively looking for business owners, to help them exit, turnaround or grow their business. By knowing what suits best with your buying profile, we can invest together. In that way we can add the most value to the business, what helps us all. 
          </p>
          <HorizontalLine />

          {/* Sub-Title 3 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            Together we invest in
          </h2>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10 justify-evenly">
            {reqCards.map((card, index) => (
              <div key={index}>
                <LogoCard {...card} />
              </div>
            ))}
          </div>
          <HorizontalLine />

          {/* Sub-Title 4 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            We exit to:
          </h2>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce auctor
          </p>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce auctor
          </p>
          <HorizontalLine />

          {/* Sub-Title 5 */}
          <h2 className="mt-12 text-5xl font-bold text-green-700">We partner with</h2>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10 justify-evenly">
          {investorsCards.map((card, index) => (
              <div key={index}>
                <LogoCard {...card} />
              </div>
            ))}
          </div>
          <HorizontalLine />

        </div>
      </div>
    </div>
  );
};

export default InvestorsContent;
