import React from "react";

const WhyUs = ({ text, image }) => {
  return (
    <div className="flex items-center bg-white text-black rounded-3xl p-4 m-2">
      <span className="text-xl font-bold mr-4">{text}</span>
      <img src={image} alt="img" className="h-30 w-40" />
    </div>
  );
};

export default WhyUs;
