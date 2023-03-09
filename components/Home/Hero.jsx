import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-center max-w-4xl">
          Welcome to my website
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white mt-8 text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor
          mauris euismod, hendrerit libero eu, pretium ex. Praesent ut
          condimentum mi, ut dictum orci.
        </p>
      </div>
    </div>
  );
};

export default Hero;