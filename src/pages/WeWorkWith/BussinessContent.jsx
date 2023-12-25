import React from "react";
import reqCards from "../../utils/reqCards";
import ReqCard from "../../components/Card/RequirementCard";
import HorizontalLine from "../../components/Horizontal Line/Hr";
import LogoCard from "../../components/Card/LogoCard";
import logoCards from "../../utils/logoCards";

const BussinessContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">

          {/* Sub-Title 1 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            We are Helping SME bussiness owners
          </h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
          So far is history, small and medium size business owners are left behind. Cool tech startups and mid/big size companies get funded, access to the best market strategies and improve their valuation. However, 50% of the economy consists out of the general small business owners. They don’t have access to these advantages because investors see 2 problems. 
          </p>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Not at New Group Capital. New Group Capital has partnered with more
            than +350 Angel investors, business investors, PE firms, M&A
            specialists and HNI’s. All with their unique skills. All with their
            ideal business that they are looking for.
          </p>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10 justify-evenly">
          {logoCards.map((card, index) => (
              <div key={index}>
                <LogoCard {...card} />
              </div>
            ))}
          </div>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
          Therefore, the fast part of our economy doesn’t have access to these business transforming gateways. We changing that for you today. We help business owners with:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li className="mt-4">Exciting their companies directly, when PE is not interested yet</li>
            <li className="mt-4">Planning and transforming your business for an exit, so that PE will be interested </li>
            <li className="mt-4">Growing your business exponentially if not wanting to sell yet</li>
            <li className="mt-4">Turning around your business to make it profitable again </li>
          </ul>
          <HorizontalLine />

          {/* Sub-Title 2 */}
          <h2 className="mt-12 text-5xl font-bold text-green-700">Requirement Criteria</h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
          What are our basic requirement criteria’s? 
          </p>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10 justify-evenly">
            {reqCards.map((card, index) => (
              <div key={index}>
                <LogoCard {...card} />
              </div>
            ))}
          </div>
          <HorizontalLine/>
        </div>
      </div>
    </div>
  );
};

export default BussinessContent;
