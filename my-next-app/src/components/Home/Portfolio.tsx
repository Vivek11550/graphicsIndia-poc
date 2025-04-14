"use client";

import Image from "next/image";
import NikitaImg from "../../Assets/Home-assets/HomePortfolio/NikitaImg.png";
import ShredImg from "../../Assets/Home-assets/HomePortfolio/ShredImg.png";
import UrbanAxisImg from "../../Assets/Home-assets/HomePortfolio/UrbanAxisImg.png";

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: "Nikita's Curry Corner",
      description:
        "Nikita's Curry Corner provides fast, responsive ordering with secure Stripe payments for an excellent user experience.",
      image: NikitaImg,
      link: "https://nikitascurrycorner.ca/",
    },
    {
      id: 2,
      title: "Shred-n-Shape",
      description:
        "Shred n Shape offers tailored fitness plans, nutritional guidance, and seamless payments for optimal performance.",
      image: ShredImg,
      link: "https://shrednshape.co.uk/",
    },
    {
      id: 3,
      title: "UrbanAxis",
      description:
        "UrbanAxis, built with Next.js, features a modern design, integrated blog, contact form, and SEO optimization.",
      image: UrbanAxisImg,
      link: "https://www.urbanaxis.co.in/",
    },
  ];

  return (
    <section className="w-full bg-white ">
    <div className="container mx-auto px-12 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 py-5">
        Our Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-[350px] w-full bg-white shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="rounded-t-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>

<div className="flex justify-center ">
<a
            href="/portfolio"
            className="bg-black text-white  px-6 py-3 rounded-lg hover:bg-gray-200 transition border border-black">
            show all
          </a>
</div>
   

  </section>
  );
};

export default Portfolio;
