import Link from 'next/link'
import {BsFacebook , BsYoutube , BsInstagram , BsTwitter , BsWhatsapp} from 'react-icons/bs'
import {ImMobile} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'
const Foot = () => {
  return (
    <footer className="bg-[#012A4A]  text-gray-300 px-4 py-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:justify-evenly">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Penchant Pocket</p>
            <p>Opposite Bal Bhawan ,Bhiwani</p>
            <p>Phone: (+91) 80598 42233 </p>
            <p>Email: war.tan@yahoo.co.in</p>
            <p>WhatsApp: +91 9017842233</p>
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
                   
                   <a href="https://www.facebook.com/sssdh2233/">
                    <BsFacebook className=' text-white' size={30}/>
                  </a>
                </li>
                <li>
                  <a href="https://goo.gl/maps/aKZUFs4PFLdsnTMy6">
                  <BsInstagram className=' text-[#e95950]' size={30}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/drSSRajput6">
                  <BsTwitter className='text-blue-500' size={30}/>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
            <nav>
              <ul className='flex flex-col space-y-2'>
                <li >
                   
                   <a href="tel:9017842233">
                    <ImMobile size={30}/>
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=918059842233&text=Hello this is the starting message">
                  <BsWhatsapp className='text-green-500' size={30}/>
                  </a>
                </li>
                <li>
                  <a href="mailto:war.tan@yahoo.co.in">
                  <SiGmail className='text-red-500' size={30}/>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
           </div>
        <div className="mt-6 text-center">
          <p>&copy; 2023 Shivam Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Foot