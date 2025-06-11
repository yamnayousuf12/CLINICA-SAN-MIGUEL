import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const floatingImages = [
  './Mission.jpg',
  './i.webp',
  './ima.webp',
  './care2.jpg',
  './Hypertension.png',
  './healthcare.jpg',
  './diabetes.jpg',
];

const CtaFloatingImages = () => {
  return (
    
    <section className="relative bg-white w-full px-6 py-8 ">
      <div className="relative bg-[#0f1d2e] text-white rounded-3xl px-52  py-16 overflow-hidden w-full flex flex-col ">
      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-left"> 
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Don’t let healthcare worries hold you back</h2>
        <p className="text-white mb-6">
          High costs, no insurance, or long waits? Get $19 visits, no insurance needed, and walk-in care.
          Our bilingual team welcomes you like family. Act now.
        </p>

        <div className="flex flex-wrap gap-4 mb-4">
          <button className="bg-Red hover:bg-Red px-6 py-2 rounded-full text-white font-medium">
            Book Your Visit
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Find a Clinic Near You
          </button>
        </div>

        {/* Star Ratings */}
        <div className="flex items-center text-sm text-white mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow mr-1" />
          ))}
          <span className="ml-2">4.8 / 5 | 40+ Reviews</span>
        </div>
      </div>
      </div>

      {/* Floating Images */}
      
      <div className="absolute inset-0 z-0 pointer-events-none flex flex-wrap justify-center items-center ">
        {/* Top-left */}
      <div className="absolute rounded-lg  right-64 top-3"> 
        <Image
          src={floatingImages[0]}
          alt="Floating 1"
          width={80}
          height={80}
          className="rounded-xl object-cover shadow-lg h-16 w-18  "
        />
      </div>
        {/* Top-right */}
      <div className="absolute top-3 right-10">
        <Image
          src={floatingImages[1]}
          alt="Floating 2"
          width={80}
          height={80}
          className="rounded-xl object-cover shadow-lg h-16 w-18"
        />
      </div>

      {/* Middle-left */}
      <div className="absolute top-1/2 right-60 transform -translate-y-1/2">
        <Image
          src={floatingImages[2]}
          alt="Floating 3"
          width={60}
          height={60}
          className="rounded-xl object-cover shadow-lg w-10 h-10"
        />
      </div>

      {/* Middle-right */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
        <Image
          src={floatingImages[3]}
          alt="Floating 4"
          width={80}
          height={80}
          className="rounded-xl object-cover shadow-lg h-20 w-20"
        />
      </div>

      {/* Bottom-left */}
      <div className="absolute bottom-6 right-84">
        <Image
          src={floatingImages[4]}
          alt="Floating 5"
          width={90}
          height={90}
          className="rounded-xl object-cover shadow-lg w-20 h-20"
        />
      </div>

      {/* Bottom-right */}
      <div className="absolute bottom-6 right-20">
        <Image
          src={floatingImages[5]}
          alt="Floating 6"
          width={70}
          height={70}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
      
      </div>
    </section>
  );
};

export default CtaFloatingImages;



