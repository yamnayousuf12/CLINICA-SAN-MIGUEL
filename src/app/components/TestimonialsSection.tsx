'use client';

import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: "I was nervous about my first visit, but the team made me feel like family. For just $18, I got the care I needed without stress. Thank you, Clinica San Miguel!",
    author: "Maria D., Houston"
  },
  {
    text: "I was nervous about my first visit, but the team made me feel like family. For just $18, I got the care I needed without stress. Thank you, Clinica San Miguel!",
    author: "Maria D., Houston"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 text-gray">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 ">
        <div>
          <h2 className="text-2xl text-black font-bold ">Real Stories from Our Patients</h2>
          <p className="text-gray mt-2">
            At Clinica San Miguel, your health is our priority. Hear from others who’ve found care and comfort with us.
          </p>
        </div>
        {/* Arrows */}
        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            className="p-2 bg-white rounded-full hover:bg-gray2"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            className="p-2 bg-gray2 rounded-full hover:bg-Red"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#f4f5f6] rounded-lg p-6 shadow-md flex flex-col justify-between"
          >
            {/* Rating */}
            <div className="flex items-center mb-3 text-Red">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="mr-1" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray mb-4 ">&quot;{testimonial.text}&quot;</p>

          
            <div className="text-sm text-gray">{testimonial.author}</div>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
