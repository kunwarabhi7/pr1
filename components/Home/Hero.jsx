import Image from "next/image";
import Link from "next/link";
import Dental from '../../public/dp.jpeg'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font h-screen">
  <div className="container mx-auto flex px-5 md:py-24 py-12 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2   lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font  text-center sm:text-4xl md:text-4xl md:pl-8  text-3xl mb-4 font-medium text-gray-900">
        Welcome to 
        <br className=" lg:inline-block" />
 <span className="md:text-6xl md:ml-24">

        Shivam Dental Hospital
 </span>
      </h1>
      <p className="mb-16 text-4xl md:ml-16 font-semibold md:text-7xl tracking-normal md:my-4 text-centre leading-relaxed">
      10 साल से आपकी सेवा में 
      </p>
      <div className="flex justify-center md:mt-16  md:ml-64  ">
      <Link href="tel:9017842233">
        <button className="inline-flex text-white bg-[#012A4A]  border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
          Book an Appoinment 
        </button>
        </Link>
        <Link href="https://goo.gl/maps/CVbGHTm1nRSfs6eo8">
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
        Visit US!
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full mx-auto md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center w-72 h-72 md:w-96 md:h-96 ml-16 md:ml-0 rounded-full"
        alt="hero"
        src={Dental}
      />
    </div>
  </div>
</section>


  );
};

export default Hero;
