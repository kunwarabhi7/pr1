import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#012A4A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#section1">
              <h1 className="text-white font-bold text-xl uppercase" >Shivam Dental </h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</h1>
              </Link>
              <Link href="#services">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</h1>
              </Link>
              <Link href="#doctor">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Doctor</h1>
              </Link>
              <Link href="#time">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Timing</h1>
              </Link>
              <Link href="#gallery">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</h1>
              </Link>
              <Link href="https://goo.gl/maps/CVbGHTm1nRSfs6eo8">
                <h1 className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Direction</h1>
              </Link>
              <Link href="tel:9017842233">
                <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book an Appoinment</button>
              </Link>

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link href="/">
            <h1 onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</h1>
          </Link>
          <Link href="#services">
            <h1 onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</h1>
          </Link>
          <Link href="#doctor">
            <h1 onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Doctor</h1>
          </Link>
          <Link href="#gallery">
            <h1 onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</h1>
          </Link>
          <Link href="https://goo.gl/maps/CVbGHTm1nRSfs6eo8">
            <h1  onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Direction</h1>
          </Link>
          <a href="tel:9017842233">
            <h1 onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Book an Appoinment</h1>
          </a>
         
       </div>
       </div>
       </nav>
  )
}

export default Navbar;