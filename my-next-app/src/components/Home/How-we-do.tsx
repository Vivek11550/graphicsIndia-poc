// import React from "react";
// import { FaSearch, FaClipboardList, FaCode, FaTools } from "react-icons/fa";

// const HowWeDo = () => {
//   return (
//     <section className="container mx-auto px-6 py-12 bg-[#F0F1F3]">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
//         {/* Left Column - Title & Description */}
//         <div className="flex flex-col justify-center items-center md:items-start p-6">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">How We Do ?</h2>
//           <p className="text-gray-600 text-lg mb-6">
//             Our approach follows a structured process that ensures a smooth and efficient development cycle. 
//             We focus on understanding your needs, planning effectively, developing high-quality solutions, 
//             and maintaining them for long-term success.
//           </p>
//         </div>

//         {/* Right Column - Steps */}
//         <div className="grid grid-cols-2 gap-6">
          
//           {/* Discovery */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <FaSearch size={40} className="text-blue-600 mb-3" />
//             <h3 className="text-xl font-semibold">Discovery</h3>
//             <p className="text-gray-600 text-sm mt-2">Understanding requirements and goals.</p>
//           </div>

//           {/* Planning */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <FaClipboardList size={40} className="text-green-600 mb-3" />
//             <h3 className="text-xl font-semibold">Planning</h3>
//             <p className="text-gray-600 text-sm mt-2">Strategizing and wireframing solutions.</p>
//           </div>

//           {/* Development */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <FaCode size={40} className="text-purple-600 mb-3" />
//             <h3 className="text-xl font-semibold">Development</h3>
//             <p className="text-gray-600 text-sm mt-2">Building and coding the solution.</p>
//           </div>

//           {/* Maintenance */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//             <FaTools size={40} className="text-red-600 mb-3" />
//             <h3 className="text-xl font-semibold">Maintenance</h3>
//             <p className="text-gray-600 text-sm mt-2">Ensuring long-term performance.</p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeDo;

import React from "react";
import Image from "next/image";
import DiscoveryImg from "../../Assets/Howwedo-assets/Discovery.png";
import DevelopmentImg from "../../Assets/Howwedo-assets/Development.png";
import MaintainanceImg from "../../Assets/Howwedo-assets/Maintainance.png";
import PlanningImg from "../../Assets/Howwedo-assets/Planning.png"


const HowWeDo = () => {
  return (
    <section className="container mx-auto px-6 py-12"style={{ backgroundColor: "#F0F1F3" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Title & Description */}
        <div className="flex flex-col justify-center items-center md:items-start p-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
            How We Do ?
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Our approach follows a structured process that ensures a smooth and efficient development cycle. 
            We focus on understanding your needs, planning effectively, developing high-quality solutions, 
            and maintaining them for long-term success.
          </p>
        </div>

        {/* Right Column - Steps (2x2 Grid Layout) */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Discovery */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start text-left relative w-[300px] h-[300px]">
            <Image 
              src={DiscoveryImg} 
              alt="Discovery Icon" 
              width={50} 
              height={50} 
              className="absolute top-4 left-4"
            />
            <h3 className="text-xl font-semibold mt-10 text-black">1.Discovery</h3>
            <p className="text-gray-600 text-sm mt-2">We begin by understanding your business goals and challenges, then identify tailored IT solutions.</p>
          </div>

          {/* Planning */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start text-left relative w-[300px] h-[300px]">
            <Image 
              src={PlanningImg} 
              alt="Planning Icon" 
              width={50} 
              height={50} 
              className="absolute top-4 left-4"
            />
            <h3 className="text-xl font-semibold mt-10 text-black">2.Planning</h3>
            <p className="text-gray-600 text-sm mt-2">Once we understand your objectives, we create a comprehensive plan detailing the technology solutions, strategies, and timelines.
            </p>
          </div>

          {/* Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start text-left relative w-[300px] h-[300px]">
            <Image 
              src={DevelopmentImg}
              alt="Development Icon" 
              width={50} 
              height={50} 
              className="absolute top-4 left-4"
            />
            <h3 className="text-xl font-semibold mt-10  text-black">3.Development</h3>
            <p className="text-gray-600 text-sm mt-2">With a clear plan in place, we execute the implementation phase, seamlessly deploying and integrating the chosen IT solutions into your existing infrastructure.</p>
          </div>

          {/* Maintenance */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-start text-left relative w-[300px] h-[300px]">
            <Image 
              src={ MaintainanceImg} 
              alt="Maintenance Icon" 
              width={50} 
              height={50} 
              className="absolute top-4 left-4"
            />
            <h3 className="text-xl font-semibold mt-10  text-black">4.Maintenance</h3>
            <p className="text-gray-600 text-sm mt-2 ">Our commitment to your success extends beyond implementation. We offer ongoing support and maintenance to ensure optimal performance, security, and reliability.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeDo;



