import React from "react";

const Whychoseus = () => {
  return (
    <div className="bg-[#132238] text-white  py-10">
      <h2 className="text-center font-bold text-3xl py-4">Why Choose Us?</h2>
      <div className="  sm:flex  gap-5 px-5 p-4">
  <div className="border border-[#929292] py-5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-[#929292]/20  rounded-lg">
    <h2 className="font-bold text-xl">Expert Team</h2>
    <p className="py-2">
      Our skilled designers and developers deliver high-quality results.
    </p>
  </div>
  <div className="border border-[#929292] py-5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-[#929292]/20  rounded-lg">
    <h2 className="font-bold text-xl">Client-Centric Approach</h2>
    <p className="py-2">We focus on understanding your needs for tailored solutions.</p>
  </div>
  <div className="border border-[#929292] py-5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-[#929292]/20  rounded-lg">
    <h2 className="font-bold text-xl">Proven Track Record</h2>
    <p className="py-2">With many successful projects, we ensure your online success.</p>
  </div>
</div>
    </div>
  );
};

export default Whychoseus;
