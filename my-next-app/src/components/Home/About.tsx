import Image from "next/image";
import aboutImage from "../../Assets/Home-assets/Howwedo-assets/homeabout.png";

export default function AboutCompany() {
  return (
    <section className="flex justify-center px-4 py-10 bg-white sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={aboutImage}
            alt="About Company"
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Company Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            ABOUT COMPANY
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-poppins">
          Graphics India Online, a leading Web and Mobile App Development Company based in Camp, Pune, offers innovative IT solutions to enhance business growth and efficiency. Our expertise includes Web Development, App Development, UI/UX & Web Design, ERP Solutions, and SEO Management. We specialize in modern platforms like MERN, MEAN, and WordPress, delivering customized digital experiences that cater to your unique needs and deliver outstanding results.
          </p>
          <a
            href="/about"
            className="inline-block bg-purple-700 text-white px-5 py-2 mt-6 rounded hover:bg-purple-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
