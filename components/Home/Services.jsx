import React from "react";
import Image from "next/image";

const Services = ({ imageUrl, title }) => {
  return (
    <div className="max-w-sm mx-auto   overflow-hidden shadow-lg rounded-lg cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 duration-200">
    <div className="relative h-48 w-60 md:w-96">
      <Image className="object-fit rounded-xl object-center w-full h-full" src={imageUrl} fill alt={title} />
    </div>
    <div className="px-6 py-4 md:p-6">
      <div className="font-bold text-xl  mb-2">{title}</div>
    </div>
  </div>
  );
};

export default Services;