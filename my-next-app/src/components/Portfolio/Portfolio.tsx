

import Image from "next/image";
import Link from "next/link";
import NikitaImage from "../../Assets/Nikita.png";
import ShredImage from "../../Assets/Shred.png";


const Portfolio = () => {
  
  const portfolioItems = [
    { id: 1, src: NikitaImage, alt: "Portfolio Image 1" },
    { id: 2, src: ShredImage, alt: "Portfolio Image 2" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-black"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Our Portfolio
        </h2>

    
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"> */}
        <div className="flex justify-center items-center mb-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden  m-4 p-4"
              style={{ width: "335px", height: "386px" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={335}
                height={386}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>

        <Link href="/portfolio" >
        <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
           View All   
        </button></Link>
      </div>
    </section>
  );
};

export default Portfolio;


