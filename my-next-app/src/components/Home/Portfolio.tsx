


"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import NikitaImg from "../../Assets/Home-assets/HomePortfolio/NikitaImg.png";
import ShredImg from "../../Assets/Home-assets/HomePortfolio/ShredImg.png";
import UrbanAxisImg from "../../Assets/Home-assets/HomePortfolio/UrbanAxisImg.png"


const Portfolio = () => {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Nikita's Curry Corner",
      description:
        "Nikita's Curry Corner provides fast, responsive ordering with secure Stripe payments for an excellent user experience.",
      image: NikitaImg,
    },
    {
      id: 2,
      title: "Shred-n-Shape",
      description:
        "Shred n Shape offers tailored fitness plans, nutritional guidance, and seamless payments for optimal performance.",
      image: ShredImg,
    },
    {
      id: 3,
      title: "UrbanAxis",
      description:
        "UrbanAxis, built with Next.js, features a modern design, integrated blog, contact form, and SEO optimization.",
      image: UrbanAxisImg,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12" style={{ backgroundColor: "white" }}>
     
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Our Portfolio
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  place-items-center ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 w-[300px] h-[380px] flex flex-col justify-between"
          >
            
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-lg mb-4 w-full h-[180px] object-cover"
            />
           
            <h3 className="text-xl font-semibold text-black">{project.title}</h3>
            
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/portfolio")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View More
        </button>
      </div>
      
    
      
      {/* { Expert IT Services for web development and SEO } */}
        <div className="text-center  py-20 bg-[#132238] text-white">
        <h2
          className="text-3xl md:text-4xl  mb-6 font-bold  text-center"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Expert IT Services for web development and SEO
        </h2>
        <p
          className=" text-base  mb-6  text-center px-10 "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Innovative IT services, including custom website development, UI/UX design, ERP solutions, and SEO management, tailored to drive business growth and success.
        </p>
      </div> 
    
    </section>
    
      
    
  );
};

export default Portfolio;



