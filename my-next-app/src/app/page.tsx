import HeroSection from '@/components/Home/Hero';
 import About from '@/components/Home/About';
 import HowWeDo from '@/components/Home/How-we-do';
 import Portfolio from '@/components/Home/Portfolio';
 import TestimonialCarousel from "@/components/Home/TestimonialCarousel";

export default function Home() {
  return(
     <div >
       <HeroSection/>
         <About/>  
          <Portfolio/> 
         <HowWeDo/>
         <TestimonialCarousel/>
    </div> 
  )
}
