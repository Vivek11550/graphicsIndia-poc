"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioImg from "../../Assets/Portfolio-assets/PortfolioImg.png";
import Herocomponent from "../ui/herocomponent";
import NikitaImage from "../../Assets/Portfolio-assets/NikitaImage.png";
import ShredImage from "../../Assets/Portfolio-assets/ShredImage.png";
import UrbanAxisImage from "../../Assets/Portfolio-assets/UrbanAxisImage.png";
import WordpressCard from "./wordpressCard";

const projects = [
  {
    id: 1,
    title: "Nikita's Curry Corner",
    description:
      "Nikita's Curry Corner provides fast, responsive ordering with secure Stripe payments for an excellent user experience.",
    image: NikitaImage,
    link: "https://nikitascurrycorner.ca/",
  },
  {
    id: 2,
    title: "Shred-n-Shape",
    description:
      "Shred n Shape offers tailored fitness plans, nutritional guidance, and seamless payments for optimal performance.",
    image: ShredImage,
    link: "https://shrednshape.co.uk/",
  },
  {
    id: 3,
    title: "UrbanAxis",
    description:
      "UrbanAxis, built with Next.js, features a modern design, integrated blog, contact form, and SEO optimization.",
    image: UrbanAxisImage,
    link: "https://www.urbanaxis.co.in/",
  },
  {
    id: 4,
    title: "Project Alpha",
    description: "Project Alpha showcases a scalable web solution with cloud integration.",
    image: PortfolioImg,
    link: "#",
  },
  {
    id: 5,
    title: "Beta Tech",
    description: "Beta Tech focuses on innovative tech solutions and seamless UX.",
    image: PortfolioImg,
    link: "#",
  },
  {
    id: 6,
    title: "Gamma Innovations",
    description: "Gamma Innovations delivers next-gen software with responsive design.",
    image: PortfolioImg,
    link: "#",
  },
];

const PortfolioPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const handlePageChange = (pageNumber:any) => setCurrentPage(pageNumber);

  const indexOfFirstCard = (currentPage - 1) * cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstCard, indexOfFirstCard + cardsPerPage);

  return (
    <section className="w-full bg-white">
      <Herocomponent imageurl={PortfolioImg} title="Portfolio" />

      <div className="container mx-auto px-12 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Portfolio</h2>
        <p className="text-lg font-bold text-center text-black mb-8">Innovative Dynamic Projects</p>

        {/* Project Cards with Sliding Effect */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
            >
              {currentProjects.map((project) => (
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
                    <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentPage === index + 1 ? "bg-purple-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <WordpressCard />
    </section>
  );
};

export default PortfolioPage;
