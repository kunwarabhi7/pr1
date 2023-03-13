import React from "react";

const OpeningClosingTime = ({ day, openTime, closeTime }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between border-t border-gray-300 py-2">
      <div className="font-bold">{day}</div>
      <div className="md:ml-4 text-gray-300">
        <div className="hidden md:block">
          {openTime} - {closeTime}
        </div>
        <div className="block md:hidden">
          {openTime} - <br /> {closeTime}
        </div>
      </div>
    </div>
  );
};

export default OpeningClosingTime;