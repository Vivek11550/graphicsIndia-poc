

"use client";
import { useState } from "react";
import Image from "next/image";
// import laptop from "../../Assets/about-assets/laptop.png";
// import wordpress from "../../Assets/about-assets/wordpress.png";
// import next from "../../Assets/about-assets/next.png";
// import mern from "../../Assets/about-assets/mern.png";
import angular from "../../Assets/about-assets/angular.png";
import mongodb from "../../Assets/about-assets/mongodb.png";
import mysql from "../../Assets/about-assets/mysql.png";
import next from "../../Assets/about-assets/next.png";
import node from "../../Assets/about-assets/node.png";
import react from "../../Assets/about-assets/react.png";
import shadcn from "../../Assets/about-assets/shadcn.png";
import typescript from "../../Assets/about-assets/typescript.png"
import strapi from "../../Assets/about-assets/strapi.png"
import tailwindcss from "../../Assets/about-assets/tailwindcss.png";
import wordpress from "../../Assets/about-assets/wordpress.png";
import sqlite from "../../Assets/about-assets/sqlite.png";
import Img1 from "../../Assets/about-assets/Img1.png";
import Img2 from "../../Assets/about-assets/Img2.png";
import Img3 from "../../Assets/about-assets/Img3.png";
import Img4 from "../../Assets/about-assets/Img4.png"


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
    text: "Driven by Continouos learning and Adaptability.",
     image: Img4,
  },
];

const Whoweare = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="bg-white text-black py-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">WHO ARE WE?</h2>
        <div className="flex flex-col lg:flex-row gap-10 py-5 px-5">
          <div className="lg:w-1/2 flex justify-center items-center transition-all duration-500">
            <Image
              src={cardData[activeIndex].image}
              alt="dynamic visual"
              className="w-full h-auto max-w-[300px] lg:max-w-[500px] object-contain"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            {cardData.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`bg-white shadow-lg p-6 lg:p-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 border-l-4 h-auto 
                ${
                  activeIndex === index
                    ? "border-red-500 bg-gray-100"
                    : "border-purple-500"
                }`}
              >
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-[#132238] min-h-[60vh] flex flex-col justify-center py-10 px-5">
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-white text-center">
          Innovative Technology
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-0 place-items-center">
          <Image
            src={next}
            alt="nextjs image"
            className="w-24 md:w-36 lg:w-32 "
            
          />
          <Image
           src={angular} 
           alt="angular image" 
           className="w-24 md:w-36 lg:w-32" />
          <Image
            src={mongodb}
            alt="mongodb image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={mysql}
            alt="mysql image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={node}
            alt="node image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={react}
            alt="react image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={shadcn}
            alt="shadcn image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={strapi}
            alt="strapi image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={typescript}
            alt="typescript image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={tailwindcss}
            alt="tailwindcss image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={wordpress}
            alt="wordpress image"
            className="w-24 md:w-36 lg:w-32"
          />
           <Image
            src={sqlite}
            alt="sqlite image"
            className="w-24 md:w-36 lg:w-32"
          />
        </div>
      </div>
    </>
  );
};

export default Whoweare;
