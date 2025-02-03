import HeroSection from '@/components/Home/Hero';
 import About from '@/components/Home/About';
 import HowWeDo from '@/components/Home/How-we-do';
 import Portfolio from '@/components/Home/Portfolio';
 import SoftDev from '@/components/Home/SoftDev';
 import ContactUs from '@/components/Home/ContactUs';
 
 

export default function Home() {
  return(
     <div >
       <HeroSection/>
         <About/>  
         <HowWeDo/>
          <Portfolio/> 
          <SoftDev/> 
          <ContactUs/>
           
          
         
    </div> 
  )
}
