

import React from "react";
import Image from "next/image";

import heroImage from "../../Assets/ContactUs.png"; 

const HeroContact = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
    
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Contact Us Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      
      
      <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-4 flex items-center justify-center">
    <h1 className="text-2xl lg:text-4xl font-bold text-white">Portfolio</h1>
  </div>


    </section>
  );
};

export default HeroContact;
