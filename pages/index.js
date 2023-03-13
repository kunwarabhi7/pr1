import ChooseUs from "@/components/Home/ChooseUs";
import DisplayTime from "@/components/Home/DisplayTIme";
import Doctors from "@/components/Home/Doctors";
import Galleryy from "@/components/Home/Galleryy";
import Map from "@/components/Home/Map";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/NavBar";
import  Test from "@/components/Home/Test";
import Foot from "@/components/Home/Foot";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <>
    <Navbar />
     <Hero />
   <Services />
    <Doctors />

<ChooseUs />    
     <Map />
   <Test />
     <DisplayTime />
   <Foot />
    </>
  )
}
