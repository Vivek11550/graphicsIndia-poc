import React from "react";
import Image from "next/image";
import DiscoveryImg from "../../Assets/Home-assets/Howwedo-assets/Discovery.png";
import DevelopmentImg from "../../Assets/Home-assets/Howwedo-assets/Development.png";
import MaintainanceImg from "../../Assets/Home-assets/Howwedo-assets/Maintainance.png";
import PlanningImg from "../../Assets/Home-assets/Howwedo-assets/Planning.png";

const HowWeDo = () => {
  return (
    <section className="container mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Title & Description */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Do ?
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Our approach follows a structured process that ensures a smooth and efficient development cycle. 
            We focus on understanding your needs, planning effectively, developing high-quality solutions, 
            and maintaining them for long-term success.
          </p>
        </div>

        {/* Right Column - Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          
          {/* Step Cards */}
          {[
            { img: DiscoveryImg, title: "1. Discovery", text: "We begin by understanding your business goals and challenges, then identify tailored IT solutions." },
            { img: PlanningImg, title: "2. Planning", text: "Once we understand your objectives, we create a comprehensive plan detailing the technology solutions, strategies, and timelines." },
            { img: DevelopmentImg, title: "3. Development", text: "With a clear plan in place, we execute the implementation phase, seamlessly deploying and integrating the chosen IT solutions." },
            { img: MaintainanceImg, title: "4. Maintenance", text: "Our commitment extends beyond implementation. We offer ongoing support and maintenance for performance, security, and reliability." },
          ].map((step, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center sm:items-start text-center sm:text-left relative w-full h-auto transition-transform transform hover:scale-105">
              <Image 
                src={step.img} 
                alt={step.title} 
                width={50} 
                height={50} 
                className="absolute top-4 left-4"
              />
              <h3 className="text-xl font-semibold mt-10 text-black">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
