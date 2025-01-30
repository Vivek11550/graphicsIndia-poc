import Image from 'next/image'; 
import HeroImage from "../../Assets/Hero-portfolio.png"




const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      
      <div className="absolute inset-0">
        <Image
          src= {HeroImage} 
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <h1 className="text-2xl lg:text-4xl font-bold text-white">Portfolio</h1>
  </div> */}
  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 flex items-center justify-center">
    <h1 className="text-2xl lg:text-4xl font-bold text-white">Portfolio</h1>
  </div>
    </section>
  );
};


export default Hero;

  
      
    





 
    
      
    




