import React from "react";
import next from "../../Assets/about-assets/next.png";
import mern from "../../Assets/about-assets/mern.png";
import laptop from "../../Assets/about-assets/laptop.png";
import wordpress from "../../Assets/about-assets/wordpress.png";
import Image from "next/image";

const Whoweare = () => {
  return (
    <>
      <div className="bg-white text-black py-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-8">WHO ARE WE?</h2>
        <div className="flex flex-col lg:flex-row gap-10 py-5 px-5">
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={laptop}
              alt="laptop"
              className="w-full h-auto max-w-[300px] lg:max-w-[400px]"
            />
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            {[ 
              "At the heart of our work lies a commitment to authenticity and purpose.",
              "With experience delivering successful MERN stack, WordPress, and Next.js projects.",
              "We bring technical expertise and creativity to craft impactful, lasting impressions.",
              "We bring technical expertise and creativity to craft impactful, lasting impressions."
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 lg:p-10 flex flex-col justify-center border-l-4 border-purple-500 h-auto"
              >
                <p className="text-gray-600 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="bg-[#132238] h-[60vh] flex flex-col justify-center py-5">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold text-white text-center">
          Innovative Technology
        </h2>
        <div className="flex justify-center gap-7 flex-wrap">
          <Image
            src={next}
            alt="nextjs image"
            className="w-24 md:w-36 lg:w-44"
          />
          <Image
            src={mern}
            alt="mern image"
            className="w-28 md:w-40 lg:w-48"
          />
          <Image
            src={wordpress}
            alt="wordpress image"
            className="w-36 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </>
  );
};

export default Whoweare;
