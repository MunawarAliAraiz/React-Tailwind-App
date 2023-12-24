import React from 'react';

const GenericCard = ({ type, title, description, imageUrl, videoUrl }) => {
  return (
    <div className="ring-2 ring-green-500 rounded-md overflow-hidden p-4 h-72 m-2 flex justify-center">
      {/* Conditional Rendering based on Card Type */}
      {type === 'video' && (
        <div className="w-full aspect-video">
          <iframe
            title={title}
            src={videoUrl}
            className="w-full h-full object-cover"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {type === 'image' && (
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      )}

      {type === 'text' && (
        <div className="w-full h-full p-4 flex flex-col text-center justify-evenly">
          <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      )}

      {type === 'logo' && (
        <div className="flex items-center justify-center p-4">
          <img src={imageUrl} alt={title} className="w-36 object-contain" />
        </div>
      )}
    </div>
  );
};

export default GenericCard;
