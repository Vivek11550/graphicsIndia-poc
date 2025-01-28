
import Image from "next/image";
import Hero from "../../Assets/Group 1.png"

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center px-8 lg:px-16" 
      >
        
      <Image
        src={Hero} 
        alt="Descriptive text"
        layout="fill" 
          //width ={1440}
        // height = {510}
        objectFit="cover" 
        priority 
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
    
      <div className="relative z-10 max-w-lg text-white">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 mr-4 px-10">
          Innovative IT Services for Website Development
          
        </h1>
        <p className="text-lg lg:text-xl mb-6 mr-20 px-10">
          Expert MERN, MEAN and Wordpress Solutions for tailored website development and business growth.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition border border-black mr-7 ms-10">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;



