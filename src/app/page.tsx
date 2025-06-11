// import Image from "next/image";

import Hero from "./components/Hero";
import ClinicLocator from "./components/ClinicLocator";
import CareServices from "./components/CareServices";
import MissionSection from "./components/MissionSection";
import CheckupSection from "./components/CheckupSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqCtaSection from "./components/FaqAndCtaSection";
import CtaFloatingImages from "./components/CtaFloatingImages";
import AffordableCare from "./components/AffordableCare";

// export default function Home() {
//   return (
//     <div>

//     </div>
//   );
// }

export default function Home() {
  return (
    
       <main className="flex flex-col items-center justify-center w-full px-4 md:px-12  min-h-screen bg-white">
      <Hero/>
      <ClinicLocator />
      <CareServices/>
      <MissionSection/>
      <CheckupSection/>
      <TestimonialsSection/>
      <FaqCtaSection/>
       <AffordableCare/>
      <CtaFloatingImages/>
     
      </main>
  
  );
}
