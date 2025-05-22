"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import WordpressProjectCardTypes from "../../../lib/types/portfolio-types"
import { motion, AnimatePresence } from "framer-motion";
import WordpressCard from "./wordpressCard";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const PorfolioCard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/portfolio-cards?populate=*`);
        const data = await res.json();

        if (data?.data) {
          const formattedProjects = data.data.map((item:WordpressProjectCardTypes) => {
            const imageUrl = item?.cardImage?.formats?.thumbnail?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.cardImage.formats.thumbnail.url}`
              : "";

            return {
              id: item.id,
              title: item.cardTitle,
              description: item.cardDiscription,
              image: imageUrl,
              link: item.projectlink || "#",
            };
          });
          setProjects(formattedProjects);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfFirstCard = (currentPage - 1) * cardsPerPage;
  const currentProjects = projects.slice(indexOfFirstCard, indexOfFirstCard + cardsPerPage);

  return (
    <section className="w-full bg-white">
      
      <div className="container mx-auto px-12 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800  pt-5">
      Discover Our Latest Projects
      </h1>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 py-5">
        Dynamic Web Solutions: Cutting-Edge & Scalable Projects
        </h2>

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
              {currentProjects.length > 0 ? (
                currentProjects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-[350px] w-full bg-white shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div className="rounded-t-lg overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={250}
                          className="w-full h-[200px] object-cover"
                        />
                      ) : (
                        <div className="w-full h-[200px] bg-gray-200 flex justify-center items-center">
                          <p>No Image Available</p>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                    </div>
                  </a>
                ))
              ) : (
                <p className="text-center text-gray-600">Loading projects...</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-2 h-2 rounded-full transition-transform duration-300 focus:outline-none ${
                currentPage === index + 1
                  ? "bg-purple-500 scale-150"
                  : "bg-gray-300 hover:bg-gray-400 scale-100"
              }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <WordpressCard/>
    </section>
  );
};

export default PorfolioCard;
