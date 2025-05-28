import React from "react";
import Image from "next/image";
import DiscoveryImg from "../../Assets/Home-assets/Howwedo-assets/Discovery.png";
import DevelopmentImg from "../../Assets/Home-assets/Howwedo-assets/Development.png";
import MaintainanceImg from "../../Assets/Home-assets/Howwedo-assets/Maintainance.png";
import PlanningImg from "../../Assets/Home-assets/Howwedo-assets/Planning.png";

const HowWeDo = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Title & Description */}
        <div className="w-full bg-white shadow-xl rounded-2xl  transition-all hover:shadow-2xl  duration-900  p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">How We Do ?</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Our approach follows a structured process that ensures a smooth and
            efficient development cycle. We focus on understanding your needs,
            planning effectively, developing high-quality solutions, and
            maintaining them for long-term success.
          </p>
        </div>

        {/* Right Column - Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              img: DiscoveryImg,
              title: "1. Discovery",
              text: "We begin by understanding your business goals and challenges, then identify tailored IT solutions.",
            },
            {
              img: PlanningImg,
              title: "2. Planning",
              text: "Once we understand your objectives, we create a comprehensive plan detailing the technology solutions, strategies, and timelines.",
            },
            {
              img: DevelopmentImg,
              title: "3. Development",
              text: "With a clear plan in place, we execute the implementation phase, seamlessly deploying and integrating the chosen IT solutions.",
            },
            {
              img: MaintainanceImg,
              title: "4. Maintenance",
              text: "Our commitment extends beyond implementation. We offer ongoing support and maintenance for performance, security, and reliability.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-[1.20] flex flex-col items-start text-left relative"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
