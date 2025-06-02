"use client";
import Image from "next/image";
import Hero from "../../Assets/Home-assets/Hero-Home.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={Hero}
          alt="Descriptive text"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-white text-ellipsis px-4 sm:px-6 lg:px-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[50%]">
        <h1 className="typewriter   text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          Scalable Web and Mobile App Development Services
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6">
          We deliver innovative web and mobile apps, ERP software, and custom
          UI/UX solutions to elevate your business in the digital age.
        </p>
        <a
          href="/contact-us"
          className="btn-pulse bg-purple-700 text-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-200 transition border border-black text-sm sm:text-base inline-block"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
