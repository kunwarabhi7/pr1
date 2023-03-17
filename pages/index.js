import ChooseUs from "@/components/Home/ChooseUs";
import DisplayTime from "@/components/Home/DisplayTIme";
import Doctors from "@/components/Home/Doctors";
import Map from "@/components/Home/Map";
import Gallery from "@/components/Home/Gallery";
import Navbar from "@/components/Home/NavBar";
import  Test from "@/components/Home/Test";
import Foot from "@/components/Home/Foot";
import Ser from "@/components/Home/Ser";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="w-full" >
    <Navbar />
   <Hero />

   <Ser />
    <Doctors />
<ChooseUs />    
<h1 className='text-center text-5xl font-bold text-[#012A4A] pb-10 pt-20'>Gallery & Certificates</h1>
<Gallery />
<h1 className='text-center text-5xl font-bold text-[#012A4A] pb-14 pt-20'>Address of Our Main Branch</h1>
     <Map />
     <h1 className='text-center text-5xl font-bold text-[#012A4A] pb-14 pt-28'>Review of some of our clients:</h1>
   <Test />
     <DisplayTime />
   <Foot />
    </div>
  )
}
