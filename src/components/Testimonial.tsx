<<<<<<< HEAD
  import TestimonialImg01 from '../../public/testimonial-01.jpg'
  import TestimonialImg02 from '../../public/testimonial-02.jpg'
  import TestimonialImg03 from '../../public/testimonial-03.jpg'
  import FancyTestimonialsSlider from './FancyTestimonialsSlider'

  
  export default function Testimonial() {  
  
    const testimonials = [
      {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD'
      },
      {
        img: TestimonialImg02,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.'
      },
      {
        img: TestimonialImg03,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI'
      }
    ]
  
    return (
      <div className='bg-white py-24'>
        <div className="clientborderTile">
         <h3 className='text-5xl font-extrabold text-center mb-20'>Clients Feedbacks 😍</h3>
        </div>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    )
=======
  import TestimonialImg01 from '../../public/testimonial-01.jpg'
  import TestimonialImg02 from '../../public/testimonial-02.jpg'
  import TestimonialImg03 from '../../public/testimonial-03.jpg'
  import FancyTestimonialsSlider from './FancyTestimonialsSlider'

  
  export default function Testimonial() {  
  
    const testimonials = [
      {
        img: TestimonialImg01,
        quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
        name: 'Jessie J',
        role: 'Acme LTD'
      },
      {
        img: TestimonialImg02,
        quote: "Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.",
        name: 'Nick V',
        role: 'Malika Inc.'
      },
      {
        img: TestimonialImg03,
        quote: "The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.",
        name: 'Amelia W',
        role: 'Panda AI'
      }
    ]
  
    return (
      <div className='bg-white py-24'>
        <div className="clientborderTile">
         <h3 className='md:text-5xl text-4xl  font-extrabold text-center mb-20'>Clients Feedbacks 😍</h3>
        </div>
        <FancyTestimonialsSlider testimonials={testimonials} />
      </div>
    )
>>>>>>> cef224358a86edcdfd5076305035f8b75d4283a6
  }