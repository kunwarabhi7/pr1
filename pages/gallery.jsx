import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CR1 from '../public/c1.jpeg'
import CR2 from '../public/c2.jpeg'
import CR3 from '../public/c3.jpeg'
import CR4 from '../public/c4.jpeg'

import PR1 from '../public/pr1.jpeg'
import PR3 from '../public/pr3.jpeg'
import PR4 from '../public/pr4.jpeg'
import PR6 from '../public/pr6.jpeg'
import Image from "next/image";
import Navbar from "@/components/Home/NavBar";
import Foot from "@/components/Home/Foot";


const Certi = () => {
  return (
    <div className="h-screen ">
    <Navbar />
    <div className="xl:m-32 xl:my-4  bg-[rgb(227,230,230)] relative  shadow-lg">
         <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
                <div>
                    <Image loading="lazy" className="h-80 md:h-screen" src={PR1} />
                </div>
                <div>
                    <Image loading="lazy" className="h-80 md:h-screen"  src={CR1} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen object-cover" src={PR3} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen" src={PR4} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen "src={CR2} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen" src={PR6} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen" src={CR3} />
                </div>
                <div>
                    <Image  loading="lazy" className="h-80 md:h-screen" src={CR4} />
                </div>
               
            </Carousel>
    </div>
    <Foot />
    </div>
  )
}

export default Certi
