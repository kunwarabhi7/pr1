import Image from "next/image";
import Link from "next/link";
import {IoCall} from 'react-icons/io5'
import {RiMapPinLine} from 'react-icons/ri'
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import Dental from '../../public/dp.jpeg'

const Hero = () => {
const [text,count] =  useTypewriter({
  words:[
    "भिवानी का नंबर 1 अस्पताल " ,
    " 10 साल से आपकी सेवा में" , 
    "25000 से ज़्यादा लोगो की पसंद "
  ] , loop:true, delaySpeed:2000,
})
  return (
    <div className="flex  px-6 md:px-20 h-screen items-center justify-center bg-hero  overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
      <div className="w-full md:w-full lg:pr-32">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-center md:text-left text-blue-400 leading-tight font-medium">
          Welcome To
          <br />
          <span className="text-red-600 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">

          Shivam Dental Hospital
          </span>
        </h2>
        
        <h3 className="mt-6  md:mt-10 text-md lg:text-4xl text-center  text-blue-700 font-bold my-7 tracking-wider leading-relaxed">
        {text}
        <Cursor cursorColor='red'/>
        </h3>
        <div className="bg-white p-4 flex flex-row space-x-4 items-center justify-center">
        <Link href="tel:9017842233">
  <button className="inline-flex items-center   px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-md">
    <IoCall size={25}/>
<span className="ml-2">
  
  Book an Appoinment
  </span>  

  </button>
  </Link>
  <Link href="https://goo.gl/maps/CVbGHTm1nRSfs6eo8">
  <button className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-md">
    <RiMapPinLine size={25} />
    <span className="ml-2">

    Visit US!
</span>
  </button>
  </Link>
</div>

      </div>
      <div className="w-full md:w-1/2 flex justify-center  md:justify-end">
        <Image src={Dental} className='rounded-full w-48 h-48  lg:w-96 lg:h-96  md:w-60 md:h-60 xl:w-[36rem] xl:h-[36rem]'/>
      </div>
    </div>
  </div>
  


  );
};

export default Hero;
