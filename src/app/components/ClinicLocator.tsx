"use client";

import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const clinics = [
  {
    id: 1,
    name: "Clinica San Miguel Veterans Memorial",
    phone: "346-423-3740",
    address: "11243 Veterans Memorial Dr, Houston, TX 77067",
  },
  {
    id: 2,
    name: "Clinica San Miguel Veterans Memorial",
    phone: "346-423-3740",
    address: "11243 Veterans Memorial Dr, Houston, TX 77067",
  },
  {
    id: 3,
    name: "Clinica San Miguel Veterans Memorial",
    phone: "346-423-3740",
    address: "11243 Veterans Memorial Dr, Houston, TX 77067",
  },
];

export default function ClinicLocator() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Find Your Nearest Clinica San Miguel
        </h2>
        <p className="text-gray mb-10 max-w-2xl">
          With 17 locations across Texas, quality care is always close by. Use our map or filter by city to find the clinic that&apos;s right for you.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6 text-Blue">
          {["All", "Dallas", "Houston", "San Antonio"].map((city) => (
            <button
              key={city}
              className="px-4 py-2 text-sm font-medium rounded-full border border-gray hover:bg-Red hover:text-white transition"
            >
              {city}
            </button>
          ))}
        </div>

        {/* Main content layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-4 items-start shadow-lg rounded-lg p-6 bg-black/5">
          {/* Left: Clinic List */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search clinics near by you..."
              className="w-full px-4 py-2 rounded-lg border border-gray focus:outline-none focus:ring-2 focus:ring-Red"
            />

            <div className="space-y-4">
              {clinics.map((clinic) => (
                <div key={clinic.id} className="bg-white p-4 rounded-lg shadow border">
                  <h3 className="font-semibold text-lg text-gray">{clinic.name}</h3>
                  <div className="flex items-center mt-2 text-gray">
                    <FaPhoneAlt className="mr-2" />
                    <span>{clinic.phone}</span>
                  </div>
                  <div className="flex items-center mt-1 text-gray">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{clinic.address}</span>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <button className="bg-Red text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-Red">
                      View Details →
                    </button>
                    <button className="border border-gray text-gray px-4 py-2 rounded-full text-sm hover:bg-gray2">
                      Get Directions →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Embedded Google Map */}
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow">
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11061.227408695656!2d-95.40861643723242!3d29.76042612105742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3dbb0f517f%3A0x1f5d69be8b674c3f!2sClinica%20San%20Miguel!5e0!3m2!1sen!2sus!4v1717794291198"
  width="100%"
  height="100%"
  allowFullScreen
  title="Clinic San Miguel Locations Map"
  className="w-full h-full border-0 rounded-xl"
/>

          </div>
        </div>
      </div>
    </section>
  );
}
