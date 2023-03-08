import ChooseUs from "@/components/Home/ChooseUs";
import Doctors from "@/components/Home/Doctors";
import Footer from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import Map from "@/components/Home/Map";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <>
    <Doctors />
<ChooseUs />    
     <Testimonial />
     <Gallery />
     <Map />
     <Footer />
    </>
  )
}
