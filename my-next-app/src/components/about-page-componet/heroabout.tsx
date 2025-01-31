import React from "react";
import Image from "next/image";
import aboutimg from "../../Assets/about-assets/aboutimg.png";
import director from "../../Assets/about-assets/director.png";
import cofounder from "../../Assets/about-assets/co-founder.png";
import Herocomponent from "../ui/herocomponent";


const HeroAbout = () => {
  return (
    <div>
      {/* hero image section */}
      
       <Herocomponent imageurl={aboutimg} title="About Comapany"/> 
      {/* director section ---------- */}
      <section className="flex justify-center items-center gap-10 bg-white w-full  py-10 flex-col">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 p-6">
            <Image src={director} alt="About Company" />
          </div>
          {/* Right: Company Details */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-3xl  text-gray-800  font-sans font-bold text-center mb-4">
              Director
            </h2>
            <p className="text-gray-600 text-lg  font-poppins ">
              Rajesh has 23 years of experience in the IT domain and is a
              passionate digital transformation enthusiast. Over the past 15
              years, he has helped clients navigate their digital transformation
              journeys, ranging from website design to social media marketing,
              mobile applications, ERP solutions, SAP implementation, cyber
              security, and lead generation through Google and Facebook ads.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
          {/* left: Co-founder detail */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left">
            <h2 className="text-3xl  text-gray-800  font-sans font-bold text-center mb-4">
              CO FOUNDER
            </h2>
            <p className="text-gray-600 text-lg  font-poppins ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus reprehenderit, quas aperiam, sequi adipisci a alias
              architecto dolore recusandae quasi, doloribus nostrum quisquam
              ipsum numquam cupiditate pariatur ipsam earum est!
            </p>
          </div>

          {/* right: Image */}
          <div className="w-full md:w-1/2 p-6">
            <Image src={cofounder} alt="About Company" />
          </div>
        </div>
      </section>
      {/* our mission */}
      <div className="text-center  py-20 bg-[#132238] text-white">
        <h2
          className="text-3xl md:text-4xl  mb-6 font-bold  text-center"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Our Mission
        </h2>
        <p
          className=" text-base  mb-6  text-center px-10 "
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
