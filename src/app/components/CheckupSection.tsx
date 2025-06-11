'use client';

import Image from 'next/image';

const CheckupSection = () => {
  return (
    <section className="py-36 px-6 md:px-20 bg-white text-black">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Block */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Care that fits your needs</h2>
          <p className="text-gray">
            From check-ups to screenings, our services are designed to keep you healthy at an affordable price. 
            Explore how we can support you and your family.
          </p>
          <div className="rounded-xl overflow-hidden shadow-md max-w-md">
            <Image
              src="/chronic.jpg" // Replace with your image
              alt="Elderly care"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Right Block */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden shadow-md max-w-md ml-auto">
            <Image
              src="/care2.jpg" // Replace with your image
              alt="Doctor check-up"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          <h2 className="text-xl font-semibold pt-2">General health check-ups</h2>
          <p className="text-gray">
            Stay on top of your health with routine visits for only $11. 
            Our caring team checks your vitals, answers your questions, and helps you feel your best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckupSection;
