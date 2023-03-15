import Image from "next/image";
import Link from "next/link";
import Dental from '../../public/dp.jpeg'


const Her = () => {
  return (
    <section className="text-black body-font h-screen">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center xl:ml-48">
  <div className="lg:max-w-lg lg:w-full ml-24 md:ml-0 mx-auto md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center w-72 h-72 md:w-96 md:h-96   md:ml-0 rounded-full"
        alt="hero"
        src={Dental}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
      Welcome to         <br className="hidden lg:inline-block" />
      <span className="xl:text-6xl">

        Shivam Dental Hospital
      </span>
      </h1>
      <p className="mb-8 text-gray-700  leading-relaxed xl:text-4xl my-4">
      10 साल से आपकी सेवा में

      </p>
      <div className="flex justify-center">
      <Link href="tel:9017842233">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Book an Appoinment
        </button>
        </Link>
        <Link href="https://goo.gl/maps/CVbGHTm1nRSfs6eo8">

        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
          Visit US!
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Her
