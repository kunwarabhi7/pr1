import Image from "next/image";
import Dental from '../../public/dental.jpg'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2   lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font  text-center sm:text-4xl md:text-5xl  text-3xl mb-4 font-medium text-gray-900">
        Welcome to 
        <br className=" lg:inline-block" />
        Shivam Dental Hospital
      </h1>
      <p className="mb-8 text-3xl  md:text-6xl md:my-4 text-centre leading-relaxed">
      10 साल से आपकी सेवा में 
      </p>
      <div className="flex justify-center md:my-8 md:ml-16 ">
        <button className="inline-flex text-white bg-[#012A4A]  border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          Book an Appoinment 
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
        Direct Visit
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded-full"
        alt="hero"
        src={Dental}
      />
    </div>
  </div>
</section>


  );
};

export default Hero;
