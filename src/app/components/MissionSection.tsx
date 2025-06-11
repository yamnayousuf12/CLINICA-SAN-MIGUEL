
'use client';

import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="relative bg-[#0C1B2A] text-white rounded-xl p-80 py-16 px-4 max-w-7xl mx-auto ">
      {/* Grid layout */}
      <div className="md:grid md:grid-cols-2 md:gap-10 z-10 relative">
        {/* Left side text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray2 mb-60">
            We believe everyone deserves quality care. Proudly serving Texas communities, especially the Hispanic population—we provide affordable, compassionate healthcare starting at just $11—no insurance needed. 
            Our mission is to make health a right, not a privilege, for every patient we welcome.
          </p>
        </div>

        {/* Right side features */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-1"> ✅ Inclusive Community Care</h4>
            <p className="text-gray2">We open our doors to everyone, creating a warm, welcoming space for all.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">💸 No Insurance, No Problem</h4>
            <p className="text-gray2">Affordable visits without insurance barriers, starting at just $11.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">🚶Walk-In Convenience</h4>
            <p className="text-gray2">Accessible care when you need it, with no appointments required.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">❤️You Are Our Priority</h4>
            <p className="text-gray2">Every patient is at the heart of our care, treated with respect and compassion.</p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-Red hover:bg-black text-white font-semibold py-2 px-5 rounded-lg shadow-md">
            Book Your Visit
          </button>
        </div>
      </div>

      {/* Floating image on bottom-left */}
      <div className="absolute bottom-0 left-10 translate-y-1/2 md:translate-y-1/4 rounded-lg overflow-hidden w-[380px] md:w-[550px] shadow-lg">
        <Image
          src="/Mission.jpg" // Replace with your image path in /public
          alt="Mission"
          width={450}
          height={350}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
