import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestiomonalCards from "@/components/TestiomonalCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";

import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
     
     <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <TestiomonalCards/>
     <UpcomingWebinar/>
     <Instructors/>
     <Footer/>
   </main>
  );
}
