import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CR1 from "../../public/c1.jpeg";
import CR2 from "../../public/c2.jpeg";
import CR3 from "../../public/c3.jpeg";
import CR4 from "../../public/c4.jpeg";

import PR1 from "../../public/pr1.jpeg";
import PR3 from "../../public/pr3.jpeg";
import PR4 from "../../public/pr4.jpeg";
import PR6 from "../../public/pr6.jpeg";
import Image from "next/image";

import Insta1 from "../../public/insta/1.jpg";
import Insta2 from "../../public/insta/2.jpg";
import Insta3 from "../../public/insta/3.jpg";
import Insta4 from "../../public/insta/4.jpg";
import Insta5 from "../../public/insta/5.jpg";
import Insta6 from "../../public/insta/6.jpg";
import Insta7 from "../../public/insta/7.jpg";
import Insta8 from "../../public/insta/8.jpg";
import Insta9 from "../../public/insta/9.jpg";
import Insta10 from "../../public/insta/10.jpg";
import Insta11 from "../../public/insta/11.jpg";
import Insta12 from "../../public/insta/12.jpg";
import Insta13 from "../../public/insta/13.jpg";
import Insta14 from "../../public/insta/14.jpg";
import Insta15 from "../../public/insta/15.jpg";
import Insta16 from "../../public/insta/16.jpg";
import Insta17 from "../../public/insta/17.jpg";

const Certi = () => {
  return (
    <div id="gallery" className="md:h-[37rem] h-80  ">
      <div className=" xl:my-4  bg-[rgb(227,230,230)] relative max-w-7xl  shadow-lg mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={PR1}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={CR1}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={PR3}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={PR4}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={CR2}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={PR6}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={CR3}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={CR4}
            />
          </div>
          {/* Insta */}
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta1}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta2}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta3}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta4}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta5}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta6}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta7}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta8}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta9}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta10}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta11}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta12}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta13}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta14}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta15}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta16}
            />
          </div>
          <div>
            <Image
              loading="lazy"
              className="h-80 md:h-[40rem] object-contain "
              src={Insta17}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Certi;
