import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
    {
      name: 'John Smith',
      title: 'CEO',
      image: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1489278353717-f64c6ee8a4d2%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVudGlzdHxlbnwwfHwwfHw%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60&w=1080&q=75',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum hendrerit magna, vel interdum mauris convallis vitae.'
    },
    {
      name: 'Jane Doe',
      title: 'CTO',
      image: 'https://thumbs.dreamstime.com/b/face-detection-recognition-man-computer-vision-machine-learning-concept-95793217.jpg',
      quote: 'Praesent bibendum, mi a sagittis suscipit, elit enim consectetur mi, vel pharetra justo nunc sed velit.'
    }, {
        name: 'King',
        title: 'CTO',
        image: 'https://thumbs.dreamstime.com/b/face-detection-recognition-man-computer-vision-machine-learning-concept-95793217.jpg',
        quote: 'Praesent bibendum, mi a sagittis suscipit, elit enim consectetur mi, vel pharetra justo nunc sed velit.'
      }, {
        name: 'Queen',
        title: 'CTO',
        image: 'https://thumbs.dreamstime.com/b/face-detection-recognition-man-computer-vision-machine-learning-concept-95793217.jpg',
        quote: 'Praesent bibendum, mi a sagittis suscipit, elit enim consectetur mi, vel pharetra justo nunc sed velit.'
      } ]

     const Test = () =>{
        
        return(
            <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={3}
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]}
>
  {testimonials.map((testimonial) => (
    <div key={testimonial.name} className="px-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="text-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="mx-auto w-24 h-24 rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.title}</p>
        </div>
        <div className="mt-4 text-gray-700">{testimonial.quote}</div>
      </div>
    </div>
  ))}
</Slider>
        )
    }

    export default Test;