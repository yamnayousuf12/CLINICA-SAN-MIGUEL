// app/components/Hero.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-lg">
  <Image
    src="./i.webp" // Replace with your image
    alt="Clinica San Miguel"
    fill
    priority
    quality={100}
     className="object-cover object-top  w-full h-full " // Adjust styles as needed
  />

  <div className="absolute inset-0 bg-black/40" /> {/* Optional dark overlay */}

  <div className="relative z-10 text-white max-w-3xl px-20 py-20 md:py-32 ">
    
     <div className="flex items-center justify-center space-x-2 text-yellow text-sm mb-2">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-white">4.8/5 | 40+ Reviews</span>
          </div>
    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-left mb-4">
      Quality Care for Just $19 at Clinica San Miguel
    </h1>
    <p className="text-md md:text-lg mt-4 text-white text-center">
      Affordable, compassionate care starts at just $19. No appointment needed, no insurance required.
    </p>
    <div className="mt-6 flex flex-wrap gap-4 object-center justify-center">
      <button className="bg-Red text-white px-6 py-3 rounded-full hover:bg-black  transition">
        Book Your Visit
      </button>
      <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
        Find a Clinic Near You
      </button>
    </div>
  </div>
</div>


  );
};

export default Hero;
