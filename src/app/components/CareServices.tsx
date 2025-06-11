// components/CareServices.tsx
import Image from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    title: "Primary Care",
    description:
      "Discover our most popular treatments, starting at just $19, designed to keep you and your family healthy.",
    image: "./care2.jpg",
  },
  {
    title: "Children’s Healthcare",
    description:
      "Gentle, kid-friendly check-ups and vaccinations for your child’s bright, healthy future.",
    image: "./healthcare.jpg",
  },
  {
    title: "Diabetes Care",
    description:
      "Personalized plans to manage diabetes and live a healthier, more active life.",
    image: "./diabetes.jpg",
  },
  {
    title: "Pregnancy Services",
    description:
      "Compassionate prenatal care and guidance for a healthy, joyful pregnancy journey.",
    image: "./pregnancy.jpg",
  },
  {
    title: "Blood Tests",


    description:
      "Affordable screenings to detect issues early and keep you informed.",
    image: "./Blood.jpg",
  },
  {
    title: "Hypertension",
    description:
      "Expert care to manage blood pressure and protect your heart with confidence.",
    image: "./Hypertension.png",
  },
];

const CareServices = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Revitalize Your Well-being with <br />
          <span className="text-Blue">Affordable, Trusted Care</span>
        </h2>
        <p className="mt-4 text-gray">
          Discover our most popular treatments, starting at just $19, designed
          to keep you and your family healthy.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray mb-4">{service.description}</p>
              <button className="text-sm text-white bg-gray hover:bg-gray2 rounded-full px-4 py-2 transition">
                View Details →
              </button>
            </div>
          </div>
          
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4 object-center justify-center">
                    <button className="bg-Red text-white px-6 py-3 rounded-full hover:bg-black  transition">
        Explore All Services
      </button>
                   
                  </div>
    </section>
  );
};

export default CareServices;
