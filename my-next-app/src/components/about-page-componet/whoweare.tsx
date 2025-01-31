import React from "react";
import next from "../../Assets/about-assets/next.png";
import mern from "../../Assets/about-assets/mern.png";
import box from "../../Assets/about-assets/Rectangle 40.png";

import wordpress from "../../Assets/about-assets/wordpress.png";
import Image from "next/image";

const Whoweare = () => {
  return (
    <div className="bg-[#E0E3E5] py-10">
      <div className="flex gap-5">
        <div className="px-2">
          <Image src={box} alt="box image" width={500} />
        </div>

        <div className="mt-6 px-4"> 
            <div className=" bg-black bg-opacity-5">
            <div className="bg-black text-white  rounded-[20px] px-4 py-2 border max-w-[150px] ">
            who we are
          </div>
            </div>
         
          <div>
          <p className="text-lg  text-black text-base  mb-4 mt-12"  style={{ fontFamily: "Poppins, sans-serif" }}>
    At the heart of our work lies a commitment to authenticity and purpose.
  </p> 
  <ul className="list-disc pl-6 mb-4">
    <li>With experience delivering successful <strong>MERN stack</strong>,</li>
    <li><strong>WordPress</strong>, and</li>
    <li><strong>Next.js</strong> projects,</li>
  </ul>
  <p className="text-lg">
    We bring technical expertise and creativity to craft impactful, lasting impressions. 
  </p>
  <p className="text-lg">
    Our team excels in turning ideas into functional, user-friendly digital solutions that help businesses thrive in a fast-evolving digital landscape.
  </p>
          </div>
        </div>
      </div>

      <div className="py-6 px-5">
        <p>
          Our approach combines tailored branding strategies with innovative
          technologies and the unity of a dedicated team to meet your unique
          needs. We begin by understanding your requirements and follow with
          strategic planning to develop customized solutions that leverage
          modern tools and frameworks. With a collaborative spirit, we ensure
          seamless execution from design to deployment, providing ongoing
          support to empower your brand’s digital growth.
        </p>
      </div>

      <div className="flex justify-center gap-7 mt-6 flex-wrap">
          <Image src={next} alt="nextjs image" className="w-24 md:w-36 lg:w-44" />
          <Image src={mern} alt="mern image" className="w-28 md:w-40 lg:w-48" />
          <Image src={wordpress} alt="wordpress image" className="w-36 md:w-48 lg:w-56" />
        </div>
    </div>
  );
};

export default Whoweare;
