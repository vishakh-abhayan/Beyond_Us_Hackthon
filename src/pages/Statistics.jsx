import React from "react";

const Statistics = () => {
  return (
    <div className="flex justify-center bg-gray-200 p-8 rounded-lg mt-10 ">
      <div className="flex flex-col items-center mr-8">
        <div className="text-4xl font-bold mb-4 text-black shadow">2,000+</div>
        <div className="text-xl font-semibold text-gray-700">
          Happy Students
        </div>
      </div>
      <div className="border-r border-gray-400 h-10 my-auto"></div>
      <div className="flex flex-col items-center mr-8">
        <div className="text-4xl font-bold mb-4 text-black shadow">13,000+</div>
        <div className="text-xl font-semibold text-gray-700">
          Hours of Live Learning
        </div>
      </div>
      <div className="border-r border-gray-400 h-10 my-auto"></div>
      <div className="flex flex-col items-center mr-8">
        <div className="text-4xl font-bold mb-4 text-black shadow">30+</div>
        <div className="text-xl font-semibold text-gray-700">
          Cities Worldwide
        </div>
      </div>
      <div className="border-r border-gray-400 h-10 my-auto"></div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold mb-4 text-black shadow">4.8/5</div>
        <div className="text-xl font-semibold text-gray-700">
          Avg Teacher Rating
        </div>
      </div>
    </div>
  );
};

export default Statistics;
