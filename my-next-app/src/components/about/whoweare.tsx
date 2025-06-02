

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import angular from "../../Assets/about-assets/angular.png";
import mongodb from "../../Assets/about-assets/mongodb.png";
import mysql from "../../Assets/about-assets/mysql.png";
import next from "../../Assets/about-assets/next.png";
import node from "../../Assets/about-assets/node.png";
import react from "../../Assets/about-assets/react.png";
import shadcn from "../../Assets/about-assets/shadcn.png";
import typescript from "../../Assets/about-assets/typescript.png";
import strapi from "../../Assets/about-assets/strapi.png";
import tailwindcss from "../../Assets/about-assets/tailwindcss.png";
import wordpress from "../../Assets/about-assets/wordpress.png";
import sqlite from "../../Assets/about-assets/sqlite.png";
import Img1 from "../../Assets/about-assets/Img1.png";
import Img2 from "../../Assets/about-assets/Img2.png";
import Img3 from "../../Assets/about-assets/Img3.png";
import Img4 from "../../Assets/about-assets/Img4.png";

const cardData = [
  {
    text: "At the heart of our work lies a commitment to authenticity and purpose.",
    image: Img2,
  },
  {
    text: "With experience delivering successful MERN stack, WordPress, and Next.js projects.",
    image: Img1,
  },
  {
    text: "We bring technical expertise and creativity to craft impactful, lasting impressions.",
    image: Img3,
  },
  {
    text: "Driven by Continuous learning and Adaptability.",
    image: Img4,
  },
];

const Whoweare = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="bg-white text-black py-5 flex flex-col items-center" ref={ref}>
        <h2 className="text-3xl font-bold text-center mb-8">WHO ARE WE?</h2>
        <div className="flex flex-col lg:flex-row gap-10 py-5 px-5">
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          >
            <Image
              src={cardData[activeIndex].image}
              alt="dynamic visual"
              className="w-full h-auto max-w-[300px] lg:max-w-[500px] object-contain"
            />
          </motion.div>

          <div className="flex flex-col gap-5 lg:w-1/2">
            {cardData.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`bg-white shadow-lg p-6 lg:p-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 border-l-4
                  ${activeIndex === index ? "border-red-500 bg-gray-100" : "border-purple-500"}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#132238] min-h-[60vh] flex flex-col justify-center py-10 px-5">
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-white text-center">
          Innovative Technology
        </h2>
        

      <div className="carousel-wrapper overflow-hidden  w-full py-10 ">
      <motion.div
       className="carousel-track flex gap-10 animate-scroll"
       initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
  >
    {/* Duplicate the tiles once for seamless loop */}
    {[...Array(2)].flatMap((_, idx) =>
      [
        next, angular, mongodb, mysql, node,
        react, shadcn, strapi, typescript, tailwindcss,
        wordpress, sqlite,
      ].map((tech, i) => (
        <div key={`${idx}-${i}`} className="flex-shrink-0">
          <div className="carousel-tile">
            <Image src={tech} alt="tech" className="w-24 md:w-36 lg:w-32" />
          </div>
        </div>
      ))
    )}
  </motion.div>
</div>

      </div>
    </>
  );
};

export default Whoweare;
