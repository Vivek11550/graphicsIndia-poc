import HeroSection from '@/components/Hero/Hero';
 import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
export default function Home() {
  return(
    
     <div >
       <HeroSection/>
         <About/>  
         <Portfolio/>
        <Services/>
        
    </div> 
    
  )
}
