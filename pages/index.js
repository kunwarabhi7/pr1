import ChooseUs from "@/components/Home/ChooseUs";
import DisplayTime from "@/components/Home/DisplayTIme";
import Doctors from "@/components/Home/Doctors";
import Footer from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import Galleryy from "@/components/Home/Galleryy";
import Map from "@/components/Home/Map";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
     <Hero />
    <Doctors />
<ChooseUs />    
     <Testimonial />
     <Gallery />
     <Map />
     <DisplayTime />
     <Footer />
     <Galleryy />
    </>
  )
}
