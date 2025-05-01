import React from "react";

const Whychoseus = () => {
  return (
    <div className="bg-[#132238] text-white py-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-center font-bold text-2xl sm:text-3xl mb-8">
        Why Choose Us?
      </h2>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
        {[
          {
            title: "Expert Team",
            desc: "Our skilled designers and developers deliver high-quality results.",
          },
          {
            title: "Client-Centric Approach",
            desc: "We focus on understanding your needs for tailored solutions.",
          },
          {
            title: "Proven Track Record",
            desc: "With many successful projects, we ensure your online success.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-[#929292] p-6 backdrop-blur-md transition-all duration-300 hover:bg-[#929292]/20 rounded-lg max-w-sm w-full"
          >
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-[#E2E8F0]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoseus;
