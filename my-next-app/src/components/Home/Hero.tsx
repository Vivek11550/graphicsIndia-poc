import Image from "next/image";
import Hero from "../../Assets/Home-assets/Hero-Home.png"

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Image
            src={Hero}
            alt="Descriptive text"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          </div>

      <div className="absolute inset-0 bg-black bg-opacity-5"></div>

      <div className="relative z-10 text-white text-center max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Innovative IT Services for Website Development
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Expert MERN, MEAN, and WordPress Solutions for tailored website development and business growth.
        </p>
        <a
          href="/contact-us"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition border border-black">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
