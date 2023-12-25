import React from "react";
import HorizontalLine from "../../components/Horizontal Line/Hr";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactContent = () => {
  return (
    <div className="bg-transparent h-3/4">
      {/* Full-width container */}
      <div className="container mx-auto px-4 pb-4">
        {/* Responsive Card */}
        <div className="mx-8 lg:px-10 lg:py-5 lg:text-left sm:text-center">

          {/* Sub-Title 1 */}
          <h2 className="my-4 text-5xl font-bold text-green-700">
            Contact us
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

          <div className="flex justify-center max-w-screen-xl my-8 mx-auto bg-black/70 rounded-3xl shadow-lg shadow-white/20 overflow-hidden">
            <ContactForm />
          </div>
          <HorizontalLine />

          <div className="flex justify-center max-w-screen-xl my-8 mx-auto bg-black/70 rounded-3xl shadow-lg shadow-white/20 overflow-hidden">
            <ContactDetails />
          </div>
          <HorizontalLine />

        </div>
      </div>
    </div>
  );
};

export default ContactContent;
