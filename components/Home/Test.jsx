import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
    {
      name: 'Pravishta Tomar',
      title: 'Bhiwani',
      image: 'https://profile.justdial.com/profileImg?i=htvMAqr%2FBBzT0iOnQdtu54Q%2FqZjqEuRUzPZn8TjsGA4%3D',
      quote: 'This is the very good dental hospital. The way of work in hospitality is amazing. Neat n clean well maintained hospital.'
    },
    {
      name: 'Sandeep',
      title: 'Bhiwani',
      image: 'https://profile.justdial.com/profileImg?i=%2BwuxqHRsA1bGxBEOpVIGBlDf2QqGhabVrfk8CUb1ozg%3D',
      quote: 'Dr. Sanjay Tanwar is highly talented dentist and his orthodontics skills are highly reliable, he is very good in his job.'
    }, {
        name: 'Pawan Kumar Rai',
        title: 'Tigrana',
        image: 'https://profile.justdial.com/profileImg?i=YY29d9%2FPNTcxqMM73WeUK97nWqMyFT4vKVRSPJh3tL8%3D',
        quote: 'Best dental Hospital in bhiwani.'
      }, {
        name: 'Kirti',
        title: 'Khrak',
        image: 'https://thumbs.dreamstime.com/b/face-detection-recognition-man-computer-vision-machine-learning-concept-95793217.jpg',
        quote: 'This is the best dental clinic.... Give it a try '
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
    <div key={testimonial.name} className="px-4  ">
      <div className="bg-white rounded-lg shadow-lg p-4 h-72">
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