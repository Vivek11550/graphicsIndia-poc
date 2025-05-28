import React from "react";
import Image from "next/image";
import aboutimg from "../../Assets/about-assets/aboutimg.png";
import Aboutcardimg from "../../Assets/about-assets/Rectangle 32.png";
import Herocomponent from "../ui/herocomponent";

const HeroAbout = () => {
  return (
    <div>
      <Herocomponent imageurl={aboutimg} title="Building Smart Digital Solutions"
      subtitle="We turn ideas into powerful web and mobile apps with expertise in development,ERP Systems,and UI/Ux we help businesses grow in digital world"
      />
        
      
      <section className="flex justify-center items-center bg-white w-full py-10 px-4 sm:px-6">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 flex flex-col items-center max-w-6xl w-full">
          {/* Heading at top */}
          <h2 className="text-2xl sm:text-3xl text-gray-800 font-bold text-center mb-8">
            About Graphics India Online
          </h2>

          <div className="flex flex-col md:flex-row  items-stretch w-full gap-8">
            {/* Left: Image */}
            <div className=" md:w-1/2 w-full h-full ">
            <div className="w-full h-full">
              <Image
                src={Aboutcardimg}
                alt="About Company"
                 width={800}
                 height={900}
                className="  w-full  object-cover rounded-none mt-6"
              />
              </div>
            </div>

            {/* Right: Company Details */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Graphics India Online is a trusted Web and Mobile App Development company based in Camp, Pune. We specialize in delivering innovative IT solutions that enhance efficiency, boost online presence, and unlock new opportunities for businesses across industries. Our core services include Web and Mobile App Development, UI/UX and Web Design, ERP Solutions, and SEO Management.

                <br /><br />
                We focus on building scalable websites, intuitive mobile apps, user-friendly designs, efficient business systems, and powerful SEO strategies that drive real business growth. With expertise in modern technologies like MERN Stack, MEAN Stack, and WordPress, we create customized digital solutions aligned with your unique business goals.

                <br /><br />
                Our team stays updated with the latest industry trends and technologies to deliver future-ready, high-performance products. At Graphics India Online, we blend creativity, technical expertise, and a client-first approach in every project.

                <br /><br />
                {/* Whether you&#39;re a startup or an established enterprise, we work closely with you to bring your vision to life through exceptional digital experiences. Partner with Graphics India Online — your trusted experts in Web and Mobile App Development — to build strong digital foundations, elevate your brand, and achieve lasting success in today’s competitive market. */}
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-purple-700 text-white px-5 py-2 mt-2 rounded hover:bg-gray-200 hover:text-black transition-colors"
              >
                Contact-us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <div className="w-full bg-[#132238] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Our Mission
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-[#A5ACB5]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Our mission is to empower businesses with innovative web solutions using the MERN stack and Next.js. 
          We create high-performance applications that enhance user experiences and drive growth, 
          transforming ideas into scalable digital products.
        </p>
      </div>
    </div>
  );
};

export default HeroAbout;
