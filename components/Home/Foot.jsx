import Link from 'next/link'
import {BsFacebook , BsYoutube , BsInstagram} from 'react-icons/bs'
const Foot = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:justify-between">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>123 Main St.</p>
            <p>City, State ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@yourdentalclinic.com</p>
            <p>WhatsApp: +1 123-456-7890</p>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <nav>
              <ul className='flex flex-col space-y-1 md:space-y-4'>
                <li>
                  <Link href="/about">
                    <h1>About Us</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <h1>Our Services</h1>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <h1>Contact Us</h1>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <nav>
              <ul className='flex flex-col space-y-2'>
                <li >
                   
                   <a href="#">
                    <BsFacebook size={30}/>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <BsInstagram size={30}/>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <BsYoutube size={30}/>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2023 Your Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Foot