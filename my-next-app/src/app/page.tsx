import HeroSection from '@/components/Home/Hero';
 import About from '@/components/Home/About';
 import HowWeDo from '@/components/Home/How-we-do';
 import Portfolio from '@/components/Home/Portfolio';
import SoftDev from '@/components/Home/SoftDev';
import Form from '@/components/contact/form';
import TestimonialCarousel from '@/components/Home/TestimonialCarousel';

export default function Home() {
  return(
     <div className='bg-white w-full flex-col  items-center justify-center' >
       <HeroSection/>
         <About/>  
         <HowWeDo/>
          <Portfolio/> 
          <SoftDev/>
          <TestimonialCarousel/>
          <Form/>
    </div> 
  )
}
