"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ImageFormat {
  url: string;
}

interface ImageFormats {
  thumbnail?: ImageFormat;
  [key: string]: ImageFormat | undefined;
}

interface CardImage {
  url?: string;
  formats?: ImageFormats;
}

interface APIProject {
  id: number;
  cardTitle: string;
  cardDiscription: string;
  cardImage?: CardImage;
  projectlink?: string;
}


const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-porfolios?populate=*`);
        const data = await res.json();

        if (data?.data) {
          const formattedProjects: Project[] = data.data.map((item:APIProject) => {
            const cardImage = item.cardImage;
            const thumbnailUrl = cardImage?.formats?.thumbnail?.url;
            const fullImageUrl = cardImage?.url;

            const imageUrl = thumbnailUrl
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${thumbnailUrl}`
              : fullImageUrl
              ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${fullImageUrl}`
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

  return (
    <section className="w-full bg-white">
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
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-[200px] object-cover"
                  />
                )}
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

      <div className="flex justify-center">
        <a
          href="/portfolio"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-gray-200 hover:text-black transition"
        >
          Show All
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
