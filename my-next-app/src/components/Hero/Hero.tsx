
import Image from "next/image";
import Hero from "../../Assets/Hero-Home.png"

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center px-8 lg:px-16" 
      >
        
      <Image
        src={Hero} 
        alt="Descriptive text"
        layout="fill" 
        //   width ={1920}
        //  height = {546}
         objectFit="cover" 
        // priority 
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      <div className="flex items-center justify-center h-screen text-center flex-col">

      <div className="relative z-10 max-w-lg text-white">
        <h1 className="text-3xl lg:text-3xl font-bold mb-4  px-8 ml-10">
          Innovative IT Services for Website Development
          
        </h1>
        <p className="text-lg lg:text-xl mb-6  px-10">
          Expert MERN, MEAN and Wordpress Solutions for tailored website development and business growth.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition border border-black ">
          Contact Us
        </a>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;



