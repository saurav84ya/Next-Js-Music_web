import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import { title } from "process";
import WhyChooseUsII from "@/components/WhyChooseUsII";
import FourthPage from "@/components/FourthPage";
import Ab from "@/components/Ab";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";



// feature 

export default function Home() {
  return (
    <>
      <div>
        <HeroSection/>
        <FeaturedCourses/>
        {/* <WhyChooseUs/> */}
        {/* <WhyChooseUsII/> */}
        <FourthPage/>
        <Ab/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}
