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
import Ser from "@/components/Home/Ser";

export default function Home() {
  return (
    <>
    <Navbar />
     <Hero />
   <Ser />
    <Doctors />

<ChooseUs />    


     <Map />
     <h1 className='text-center text-5xl font-bold text-[#012A4A] pb-14 pt-28'>Review of some of our clients:</h1>
   <Test />
     <DisplayTime />
   <Foot />
    </>
  )
}
