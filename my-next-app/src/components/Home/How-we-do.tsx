import React from "react";
import { FaSearch, FaClipboardList, FaCode, FaTools } from "react-icons/fa";

const HowWeDo = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Title & Description */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Do</h2>
          <p className="text-gray-600 text-lg mb-6">
            Our approach follows a structured process that ensures a smooth and efficient development cycle. 
            We focus on understanding your needs, planning effectively, developing high-quality solutions, 
            and maintaining them for long-term success.
          </p>
        </div>

        {/* Right Column - Steps */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Discovery */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaSearch size={40} className="text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold">Discovery</h3>
            <p className="text-gray-600 text-sm mt-2">Understanding requirements and goals.</p>
          </div>

          {/* Planning */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaClipboardList size={40} className="text-green-600 mb-3" />
            <h3 className="text-xl font-semibold">Planning</h3>
            <p className="text-gray-600 text-sm mt-2">Strategizing and wireframing solutions.</p>
          </div>

          {/* Development */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaCode size={40} className="text-purple-600 mb-3" />
            <h3 className="text-xl font-semibold">Development</h3>
            <p className="text-gray-600 text-sm mt-2">Building and coding the solution.</p>
          </div>

          {/* Maintenance */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaTools size={40} className="text-red-600 mb-3" />
            <h3 className="text-xl font-semibold">Maintenance</h3>
            <p className="text-gray-600 text-sm mt-2">Ensuring long-term performance.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeDo;

