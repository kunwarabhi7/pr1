import React from "react";

const Map = () => {
  return (
    <div className="bg-[#FBFAFF] h-[411px] flex items-center justify-center">
      <div className="h-[280px] lg:w-7/12 mx-auto lg:px-0 px-2 bg-white">
        <iframe
          className="w-full h-full"
          title="map"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13984.951009823171!2d76.1428214!3d28.801988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391267a34d774739%3A0xd2d1b8ac83a20848!2sShivam%20Dental%20Hospital!5e0!3m2!1sen!2sin!4v1678620283494!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

