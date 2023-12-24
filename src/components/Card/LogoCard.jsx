import React from "react";

const LogoCard = ({ title, logoUrl }) => {
  return (
    <div className="w-64 h-64 bg-white-gray-900 ring-2 ring-green-500 rounded-md overflow-hidden p-4 m-2 flex justify-center">
      <div className="w-full h-full p-4 flex flex-col text-center items-center justify-center">
        <img src={logoUrl} alt="Logo" className="w-32 md:w-44 md:h-30 mx-auto rounded-lg" />
        <h2 className="text-gray-200 text-xl font-bold mb-1">{title}</h2>
      </div>
    </div>
  );
};

export default LogoCard;
