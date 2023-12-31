import React from "react";

const ReqCard = ({ requirement }) => {
  return (
    <div className="w-64 h-64 bg-white-gray-900 ring-2 ring-green-500 rounded-md overflow-hidden p-4 m-2 flex justify-center">
      <div className="w-full h-full p-4 flex flex-col text-center justify-evenly">
        <h2 className="text-gray-200 text-xl font-bold mb-1">{requirement}</h2>
      </div>
    </div>
  );
};

export default ReqCard;
