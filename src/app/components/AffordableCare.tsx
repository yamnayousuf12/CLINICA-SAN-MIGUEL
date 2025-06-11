'use client';

import { FC } from 'react';
import Image from 'next/image';
import { DollarSign, LogIn, Users, MapPin } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="text-Red w-5 h-5" />,
    title: 'Affordable Care',
    description: 'Office visits for only $19, with transparent pricing.',
  },
  {
    icon: <LogIn className="text-Red w-5 h-5" />,
    title: 'Welcoming to All',
    description: 'Walk-ins welcome, no insurance needed.',
  },
  {
    icon: <Users className="text-Red w-5 h-5" />,
    title: 'Community Focused',
    description: 'Proudly serving the Hispanic community with bilingual support.',
  },
  {
    icon: <MapPin className="text-Red w-5 h-5" />,
    title: 'Convenient Locations',
    description: '17 clinics across Texas, open for you.',
  },
];

const AffordableCare: FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#f4f5f6] w-full rounded-3xl p-8 md:p-16 text-white">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray mb-4">
            Your Trusted Partner in <br /> Affordable Care
          </h2>
          <p className="text-gray mb-8">
            We’re dedicated to making healthcare simple, welcoming, and affordable
            for everyone. Discover why families across Texas choose us.
          </p>
          <ul className="space-y-6">
            {features.map(({ icon, title, description }, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1">{icon}</div>
                <div>
                  <h3 className="font-semibold text-gray">{title}</h3>
                  <p className="text-gray text-sm">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-16 -mt-28  ">
          <div className="col-span-2 rounded-xl overflow-hidden shadow-md ">
            <Image
              src="/i.webp"
               width={300}
            height={150}
              alt="Family walking"
              className="rounded-xl w-full object-cover h-[250px]  "
            />
          </div>
          <Image
            src="/chronic.jpg"
             width={300}
            height={150}
            alt="Family hugging"
            className="rounded-xl w-full object-cover h-[150px] mt-28"
          />
          <Image
            src="/care2.jpg"
            alt="Elderly care"
            className="rounded-xl w-full object-cover "
            width={300}
            height={150}
            style={{ height: '150px', width: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AffordableCare;
