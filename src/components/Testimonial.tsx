  import TestimonialImg01 from '../../public/sunil.jpg'
  import TestimonialImg02 from '../../public/Saurabh-Mishra.webp'
  import TestimonialImg03 from '../../public/Rajesh-Verma.jpg'
  import FancyTestimonialsSlider from './FancyTestimonialsSlider'

  
  export default function Testimonial() {  
  
    const testimonials = [
      {
        img: TestimonialImg01,
        quote: "The website you built has transformed our online presence beautifully.",
        name: 'Sunil Munshi -',
        role: 'JalebiDesign-Founder'
      },
      {
        img: TestimonialImg02,
        quote: "Your website development boosted our customer engagement significantly.",
        name: 'Mr. Saurabh Mishra -',
        role: 'Digitlay-COO'
      },
      {
        img: TestimonialImg03,
        quote: "The site you developed streamlined our operations and impressed clients.",
        name: 'Mr. Rajesh Verma -',
        role: 'Digitlay-CEO'
      }
    ];
    
    
  
    return (
      <div className='bg-white py-24'>
        <div className="clientborderTile">
         <h3 className='md:text-5xl text-4xl  font-extrabold text-center mb-20'>Clients Feedbacks 😍</h3>
        </div>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    )
  }