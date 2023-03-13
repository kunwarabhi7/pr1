import Image from 'next/image'

export default function Galleryy() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="image1"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="image2"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="image3"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://content.jdmagicbox.com/comp/bhiwani/a7/9999p1664.1664.190629171546.s4a7/catalogue/shivam-super-speciality-dental-hospital-bhiwani-1qigdw70su-250.jpg"
          alt="image4"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://content3.jdmagicbox.com/comp/bhiwani/a7/9999p1664.1664.190629171546.s4a7/catalogue/shivam-super-speciality-dental-hospital-bhiwani-iuyz0kb0vv.jpg"
          alt="image5"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <Image
          src="https://content.jdmagicbox.com/comp/bhiwani/a7/9999p1664.1664.190629171546.s4a7/catalogue/shivam-super-speciality-dental-hospital-bhiwani-0xlhy5x0qz.jpg?clr=222d44"
          alt="image6"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}