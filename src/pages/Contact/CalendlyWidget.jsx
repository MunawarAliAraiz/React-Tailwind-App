import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto my-8 p-4 rounded-md shadow-md">
      <h2 className="text-green-700 text-3xl lg:text-5xl font-bold mb-4">Schedule a Meeting</h2>
      <div className="calendly-widget">
        <InlineWidget 
          url="https://calendly.com/mnrkokhar/30min" 
          styles={{ minWidth: '320px', height: '900px' }}
          />
      </div>
    </div>
  );
};

export default CalendlyWidget;
