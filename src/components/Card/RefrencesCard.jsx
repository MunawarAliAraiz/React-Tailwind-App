import React from "react";

const RefCard = ({ author, address, reference }) => {
  return (
    <div className="bg-blue-gray-900 ring-2 ring-green-500 rounded-md overflow-hidden p-4 m-2 flex justify-center">
      <div className="w-full h-full p-4 flex flex-col text-left justify-evenly">
        <div className="text-white font-sans italic">
          <p className="text-md mb-2 ml-5">
          <span className="text-9xl font-bold mb-0">"</span>
            {reference}
          </p>
        </div>
        <h2 className="text-gray-200 text-xl font-bold mb-1">{author}</h2>
        <p className="text-gray-200 text-lg">{address}</p>
      </div>
    </div>
  );
};

export default RefCard;
