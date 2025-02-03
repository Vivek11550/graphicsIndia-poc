import React from "react";
import Image from "next/image";
import PortfolioImg from "../../Assets/Portfolio-assets/PortfolioImg.png";
import Herocomponent from "../ui/herocomponent";
//import { useRouter } from "next/navigation";
//import Link from "next/link";
import NikitaImage from "../../Assets/Portfolio-assets/NikitaImage.png";
import ShredImage from "../../Assets/Portfolio-assets/ShredImage.png";
import UrbanAxisImage from "../../Assets/Portfolio-assets/UrbanAxisImage.png";
import GalaxyImage from "../../Assets/Portfolio-assets/GalaxyImage.png";
import IntignusImage from "../../Assets/Portfolio-assets/IntignusImage.png";
import Train2GainImage from "../../Assets/Portfolio-assets/Train2GainImage.png";

const projects = [
  {
    id: 1,
    title: "Nikita's Curry Corner",
    description:
      "Nikita's Curry Corner provides fast, responsive ordering with secure Stripe payments for an excellent user experience.",
    image: NikitaImage,
    //link: "http://localhost:3000/portfolio",
  },
  {
    id: 2,
    title: "Shred-n-Shape",
    description:
      "Shred n Shape offers tailored fitness plans, nutritional guidance, and seamless payments for optimal performance.",
    image: ShredImage,
    //link: "http://localhost:3000/portfolio",
  },
  {
    id: 3,
    title: "UrbanAxis",
    description:
      "UrbanAxis, built with Next.js, features a modern design, integrated blog, contact form, and SEO optimization.",
    image: UrbanAxisImage,
    //link: "http://localhost:3000/portfolio",
  },
  {
    id: 4,
    title: "Galaxy Agro Equipments ",
    description:
      "Sachniti provides fast, responsive WordPress solutions with excellent performance for a seamless user experience.",
    image: GalaxyImage,
    //link: "http://localhost:3000/portfolio",
  },
  {
    id: 5,
    title: "Intignus Biotech Pvt.Ltd",
    description:
      "Intignus Biotech delivers innovative WordPress solutions for women's healthcare, enhancing access, literacy, and empowerment.",
    image: IntignusImage,
    //link: "http://localhost:3000/portfolio",
  },
  {
    id: 6,
    title: "Train2Gain",
    description:
      "Train2Gain provides responsive WordPress solutions for educational resources, enhancing learning experiences and user engagement.",
    image: Train2GainImage,
    //link: "http://localhost:3000/portfolio",
  },
];

const PortfolioPage = () => {
  return (
    <section className="w-full">
      {/* Portfolio image section */}
      <Herocomponent imageurl={PortfolioImg} title="Portfolio" />

      {/* Portfolio Content */}
      <div className="container mx-auto px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Portfolio
        </h2>

         {/* Subtitle for First Section */}
       <p className="text-lg font-bold text-center text-black mb-8">
       Innovative Dynamic Projects
       </p>

        {/* First Row - First 3 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3  mb-8 gap-5 place-items-center px-16">
          {projects.slice(0, 3).map((project) => (
            //<Link key={project.id} href={project.link} >
              <div
                key={project.id}
                className="bg-white shadow-lg rounded-lg p-6 "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-[180px] object-cover"
                />
                <h3 className="text-xl font-semibold text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>
           // </Link>
          ))}
        </div>

        <p className="text-lg text-center font-bold text-black mb-8">
        WordPress Projects
        </p>

        {/* Second Row - Next 3 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3  mb-8 gap-5 place-items-center px-16">
          {projects.slice(3, 6).map((project) => (
           // <Link key={project.id} href={project.link.src} passHref>
              <div
                key={project.id}
                className="bg-white shadow-lg rounded-lg p-6 "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 w-full h-[180px] object-cover"
                />
                <h3 className="text-xl font-semibold  text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>
              </div>
            //</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
