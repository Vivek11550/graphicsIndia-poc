


import Image from "next/image";
import aboutImage from "../../assets/About.png"; 

export default function AboutCompany() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        
        <div className="md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-4 mr-16 px-28"
            style={{ fontFamily: "PT Serif, serif" }}
          >
            ABOUT COMPANY
          </h2>
          <p
            className="text-black text-base  mb-6 mr-16 px-28 "
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
           
           At India Graphic Online, we provide innovative IT solutions to drive business growth and efficiency. 
           Our expertise spans Software Development, UI/UX & Web Design, ERP Solutions, and SEO Management. 
           Specializing in MERN, MEAN, and WordPress platforms, our team crafts tailored digital experiences
           designed to meet your unique needs and deliver exceptional results.

          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition mt-4 mr-14 ms-28 ">
            Learn More
          </button>
        </div>

        
        <div className="md:w-1/2 flex justify-center mr-auto pr-48" >
          <Image
            src={aboutImage}
            alt="About Company"
            width={468}
            height={355}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

 
