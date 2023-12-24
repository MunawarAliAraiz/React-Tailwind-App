import React from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import cards from "../../utils/homeCards";
import HorizontalLine from "../../components/Horizontal Line/Hr";

const NewsContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">

          {/* Sub-Title 1 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            News
          </h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Learn more about New Group Capital, Entrepreneurship and Investing in SME. Every business is different. And that’s the same story for the
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
            Blogs
          </h2>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Not at New Group Capital. New Group Capital has partnered with more
            than +350 Angel investors, business investors, PE firms, M&A
            specialists and HNI’s.
          </p>
          <div className="container p-2 my-4 -mr-10">
            <CardSlider cards={cards} cardsToShow={3} />
          </div>
          <div className="container p-2 my-4 -mr-10">
            <CardSlider cards={cards} cardsToShow={3} />
          </div>
          <div className="container p-2 my-4 -mr-10">
            <CardSlider cards={cards} cardsToShow={3} />
          </div>
          <div className="container p-2 my-4 -mr-10">
            <CardSlider cards={cards} cardsToShow={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
