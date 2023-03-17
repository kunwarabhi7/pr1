import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Dental from "../../public/dp.jpeg";
import GS from "../../public/gs.jpeg";
import Link from "next/link";
const Doctors = () => {
  return (
    <div className="lg:w-7/12 mx-auto lg:px-0 px-2">
      <h1 className="text-center text-5xl font-bold text-[#012A4A] pb-14 pt-28">
        Doctors
      </h1>

      <div
        id="doctor"
        className="carousel-item w-full grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-x-[30px] lg:gap-y-[65px]"
      >
        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <Image
              className="-rotate-[45deg] w-full h-full scale-125"
              src={Dental}
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Sanjay Singh
          </h3>

          <p className="text-[#A8A8A8] text-[12px] mt-1 mx-2 text-center">
            MDS(ORTHODONTIC & DENTOFACIAL ORTHOPEDICS){" "}
          </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:9017842233">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <img
              className="-rotate-[45deg] w-full h-full scale-125"
              src="/img/doctors/asian-female-doctor-physician-medical-uniform-with-stethoscope-cross-arms-chest-smiling-looking-like-professional-white-background 1.png"
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Pooja Singh
          </h3>

          <p className="text-[#A8A8A8] text-[15px] mt-1">BAMS , MD </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:9017842233">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <img
              className="-rotate-[45deg] w-full h-full scale-125"
              src="/img/doctors/happy-young-male-doctor-using-tablet-computer 1.png"
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Karamvir Singh{" "}
          </h3>

          <p className="text-[#A8A8A8] text-[15px] mt-1">BDS , MIDA</p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:9017842233">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>{" "}
          </div>
        </div>

        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <Image
              className="-rotate-[45deg] w-full h-full scale-125"
              src={GS}
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Garima Sangwan
          </h3>

          <p className="text-[#A8A8A8] text-[15px] mt-1">
            RCT Expert & Cosmetics Surgeon
          </p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:9017842233">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>{" "}
          </div>
        </div>

        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <img
              className="-rotate-[45deg] w-full h-full scale-125"
              src="/img/doctors/portrait-smiling-handsome-male-doctor-man 1.png"
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Jitender Phogat
          </h3>

          <p className="text-[#A8A8A8] text-[15px] mt-1">MDS(Oral Surgery)</p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:9017842233">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>{" "}
          </div>
        </div>

        <div className="flex flex-col items-center shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)] h-[352px]">
          <div className="bg-white w-[111px] h-[111px] rotate-[45deg] rounded-[25px] flex items-center justify-center border-[2px] border-primary mt-[65px] overflow-hidden">
            <img
              className="-rotate-[45deg] w-full h-full scale-125"
              src="/img/doctors/female-doctor-holding-out-hand-isolated-white 1.png"
              alt="corona"
            />
          </div>
          <h3 className="text-center text-[24px] mt-5 font-bold">
            Dr. Varnit Aggarwal
          </h3>

          <p className="text-[#A8A8A8] text-[15px] mt-1">MDS</p>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-9 h-9 cursor-pointer text-lg duration-200 hover:text-[#00acee] hover:border-[#00acee] bg-white rounded-full border border-black flex items-center justify-center">
              <FaTwitter />
            </span>
            <a href="https://www.facebook.com/sssdh2233/">
            <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#4267B2] hover:border-[#4267B2] duration-200 rounded-full border border-black flex items-center justify-center">
              <FaFacebookF />
            </span>
            </a>
            <a href="https://www.instagram.com/shivam_dental_hospital/">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#F77737] hover:border-[#F77737] duration-200 rounded-full border border-black flex items-center justify-center">
                <FaInstagram />
              </span>
            </a>
            <Link href="tel:7082932230">
              <span className="w-9 h-9 cursor-pointer text-lg bg-white hover:text-[#57cf71] hover:border-[#57cf71] duration-200 rounded-full border border-black flex items-center justify-center">
                <BsTelephoneFill />
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className="hidden py-14 md:flex items-center justify-center gap-3">
        <a
          className="w-[16px] h-[16px] bg-primary rounded-full cursor-pointer"
          href="#doctor1"
        >
          <span></span>
        </a>
        <a
          className="w-[16px] h-[16px] border border-primary rounded-full cursor-pointer"
          href="#doctor2"
        >
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default Doctors;
