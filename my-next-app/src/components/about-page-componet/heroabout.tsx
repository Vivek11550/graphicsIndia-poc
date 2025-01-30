import React from "react";
import Image from "next/image";
import aboutimg from "../../Assets/about-assets/aboutimg.png";
import director from "../../Assets/about-assets/director.png";

const HeroAbout = () => {
  return (
    <div>
      {/* hero image section */}

      <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-end justify-center ">
        <Image
          src={aboutimg}
          alt="Descriptive text"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="relative z-10 text-white bg-black bg-opacity-70 h-32 w-full flex items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold">About company</h1>
        </div>
      </section>

      {/* director section ---------- */}

      <div className="bg-[#E0E3E5] flex py-6 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2 mt-4">
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4 mr-16 px-28"
              style={{ fontFamily: "PT Serif, serif" }}
            >
              Our director
            </h2>
            <p
              className="text-black text-base  mb-6 mr-16 px-28 "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              23 years of experience in the IT domain. Rajesh is a digital
              transformation enthusiast, Rajesh spent the last one and half
              decades assisting clients with their digital transformation
              journey- from a humble website designing to social media marketing
              and sophisticated mobile applications, ERP Solutions, SAP
              Implementation, Cyber Security, Lead Gen Google / FB Ads and much
              more.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center mr-auto pr-48">
            <Image
              src={director}
              alt="About Company"
              width={468}
              height={355}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* our mission */}
      <div className="text-center px-40 py-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-black mb-4 mr-16 px-28"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Our Mission
        </h2>
        <p
          className="text-black text-base  mb-6 mr-16 px-28 "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our mission is to empower businesses with innovative web solutions
          using the MERN stack and Next.js. We create high-performance
          applications that enhance user experiences and drive growth,
          transforming ideas into scalable digital products.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
