import React from "react";
import refCards from "../../utils/refCards";
import RefCard from "../../components/Card/RefrencesCard";
import HorizontalLine from "../../components/Horizontal Line/Hr";
import LogoCard from "../../components/Card/LogoCard";
import investorsCards from "../../utils/investorsCards";

const AboutContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">
          {/* Responsive ImgText Card */}
          <div className="max-w-screen-xl mx-auto bg-black/70 rounded-3xl shadow-lg shadow-white/20 overflow-hidden flex flex-col md:flex-row">
            {/* Image Column */}
            <div className="lg:w-1/2">
              {/* Image (Top) */}
              <img
                className="w-full h-full object-cover"
                src="https://placekitten.com/800/400"
                alt="Card Image"
              />
            </div>

            {/* Text Column */}
            <div className="lg:text-left sm:text-center lg:w-1/2 lg:p-16 p-10">
              {/* Title */}
              <h2 className="text-6xl font-bold text-green-700">About us</h2>
              {/* Text Content */}
              <p className="lg:pr-20 mt-4 text-gray-300 text-lg">
                New group capital is van investment company that focusses on the
                SME business market with an EBITDA below 2M. In order to de-risk
                our positions and improve service to the SME businesses we
                invest in, we partner with experts in the field.
              </p>
            </div>
          </div>

          {/* Heading 1 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">Mission</h2>
          {/* Text Content */}
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            New Group Capital sees the importantse in the SME economy. A strong
            SME economy creates jobs and wealth in the society. The more wealth
            the SME economy creates, the more jobs will come, the more projects
            will be started. The more people won’t suffer from financial
            problems.
          </p>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Besides that does it closes the wealth cap between the ultra rich
            corporate world and the “normal” entrepreneurs. An important factor
            in keeping society stable. Especially in times we are in.
          </p>
          <HorizontalLine />

          {/* Heading 2 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">Vision</h2>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Giving SME businesses access to funding and strategies that are only
            accessable of the more senior businesses. By clearing the playing
            field, we try to impact the world in a positive way.
          </p>
          <HorizontalLine />

          {/* Heading 3 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            Our Partners
          </h2>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            New Group Capital wants to make a positive impact in the world.
            Therefore, we have partnered with:
          </p>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10 justify-evenly">
            {investorsCards.map((card, index) => (
              <div key={index}>
                <LogoCard {...card} />
              </div>
            ))}
          </div>
          <HorizontalLine />

          {/* Heading 4 */}
          <h2 className="mt-12 text-5xl font-bold text-green-700">
            References
          </h2>
          <p className="md:pr-20 mt-4 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor metus nec massa commodo, a vehicula nunc varius. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce auctor
          </p>
          <div className="container flex lg:flex-row flex-col p-2 my-4 -mr-10">
            {refCards.map((card, index) => (
              <div key={index}>
                <RefCard {...card} />
              </div>
            ))}
          </div>
          <HorizontalLine />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
