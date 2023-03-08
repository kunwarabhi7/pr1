import React from 'react';
import { FaFacebookF, FaInstagram, FaMailBulk, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div className='bg-[#012A4A]'>
                <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                   
                    <hr />

                    <div className='py-[61px] grid lg:grid-cols-12 lg:gap-0 gap-[30px] text-center lg:text-left'>
                        <div className='lg:col-span-3'>
                            <img className='mx-auto lg:mx-0' src="/img/logos/hospital-logo-2.png" alt="logo" />
                            <p className='text-base text-[#A8A8A8] my-[23px]'>Adipiscing elit, sed do eiusmod temporin ut labores et dolore magna aliqua. Ut eni minim veniam, quis nostrud exercitation
                            </p>
                          
                            <div className='flex items-center lg:justify-start justify-center gap-4 mt-[38px]'>
                                <span className='w-9 h-9 cursor-pointer text-xl duration-200 text-white hover:text-[#00acee] hover:border-[#00acee] bg-transparent rounded-full border border-white flex items-center justify-center'><FaTwitter /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#4267B2] hover:border-[#4267B2] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaFacebookF /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#F77737] hover:border-[#F77737] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaInstagram /></span>
                                <span className='w-9 h-9 cursor-pointer text-xl bg-transparent hover:text-[#FF0000] hover:border-[#FF0000] duration-200 text-white rounded-full border border-white flex items-center justify-center'><FaYoutube /></span>
                            </div>
                        </div>
                        <div className='lg:col-span-1 hidden  lg:flex items-center justify-center'>
                            <div className='h-[350px] w-[1px] bg-white'></div>
                        </div>
                        <div className='lg:col-span-4'>
                            <h2 className='text-2xl font-medium text-white'>Useful link</h2>
                            <div className='flex justify-between mt-4'>
                                <ul className='flex flex-col justify-center gap-y-5'>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Physical Medicine  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Gynecology  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Pulomonology  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Pediatrics  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Urology   </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Cardiology   </Link>
                                </ul>
                                <ul className='flex flex-col justify-center gap-y-5'>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Neurology  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/">-Ophthalmology  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/departments">-Departments  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/doctors">-Doctors  </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/contact">-Contact   </Link>
                                    <Link className='text-base hover:text-secondary duration-150 text-[#A8A8A8]' href="/blogs">-Blogs   </Link>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:col-span-1 hidden lg:flex items-center justify-center'>
                            <div className='h-[350px] w-[1px] bg-white'></div>
                        </div>
                        <div className='lg:col-span-3'>
                            <h2 className='text-2xl font-medium text-white'>Contact Us</h2>
                            <div className='mt-4 flex flex-col justify-center items-center lg:items-start lg:gap-y-[50px] gap-y-[30px]'>
                                <div className='lg:flex items-center'>
                                    <span className='lg:mx-0 mx-auto lg:mb-0 mb-3 w-9 h-9 text-xl text-white bg-transparent rounded-full border border-white flex items-center justify-center'><FaPhoneAlt /></span>
                                    <p className='ml-3 text-[#A8A8A8] text-base'>+455 336 12312</p>
                                </div>
                                <div className='lg:flex items-center'>
                                    <span className='lg:mx-0 mx-auto lg:mb-0 mb-3 w-9 h-9 text-xl text-white bg-transparent rounded-full border border-white flex items-center justify-center'><FaMailBulk /></span>
                                    <p className='ml-3 text-[#A8A8A8] text-base'>healthhospital@gmail.com</p>
                                </div>
                                <div className='lg:flex items-center'>
                                    <span className='lg:mx-0 mx-auto lg:mb-0 mb-3 w-9 h-9 text-xl text-white bg-transparent rounded-full border border-white flex items-center justify-center'><MdLocationOn /></span>
                                    <p className='ml-3 text-[#A8A8A8] text-base'>Sesame Street <br />
                                        London, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[53px] flex items-center justify-center'>
                <p className='text-secondary text-base text-center'>Copyright &copy; {new Date().getFullYear()} Health hospital. All Right Reserved.</p>
            </div>
        </>
    );
};

export default Footer;