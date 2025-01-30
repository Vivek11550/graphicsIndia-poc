import React from "react";
import Image from "next/image";
 import NikitaImage from "../../Assets/Nikita.png";
 import ShredImage from "../../Assets/Shred.png";
 import Everwin from "../../Assets/Everwin.png"
import UrbanAxis from "../../Assets/UrbanAxis.png";
import Intignus from "../../Assets/Intignus.png"

const portfolioImages = [
  { id: 1, src: NikitaImage, alt: "Portfolio Image 1" },
  { id: 2, src: ShredImage, alt: "Portfolio Image 2" },
  { id: 3, src: Everwin, alt: "Portfolio Image 3" },
  { id: 4, src: UrbanAxis, alt: "Portfolio Image 4" },
  { id: 5, src: Intignus, alt: "Portfolio Image 5" },
];

const OurPortfolio = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Portfolio</h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 justify-self-center place-items-center ">
          
          {portfolioImages.slice(0, 2).map((image) => (
            <div key={image.id} className="overflow-hidden flex justify-self-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={335}
                height={386}
                //className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-self-center place-items-center">
          
          {portfolioImages.slice(2, 5).map((image) => (
            <div key={image.id} className="overflow-hidden flex justify-self-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={335}
                height={386}
                //className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
