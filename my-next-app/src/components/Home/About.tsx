


import Image from "next/image";
import aboutImage from "../../Assets/AboutImage.png"; 

export default function AboutCompany() {
  return (
    <section className="flex justify-center px-6 py-12 bg-white">
      
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 p-6">
          <Image
            src={aboutImage}
            alt="About Company"
            width={500}
            height={400}
            //className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Company Details */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-3xl  text-gray-800  font-sans font-bold text-center mb-4">ABOUT COMPANY</h2>
          <p className="text-gray-600 text-lg  font-poppins ">
            India Graphic Online offers innovative IT solutions to enhance business growth and efficiency.Our Expertise includes Software development,UI/UX & web Design,ERP Solutions,and SEO Management.We Specialize in MERN,MEAN and wordpress platforms,creating customised digital experiences that cater to your unique needs and deliever outstanding results 
            
          </p>
          
          <a
            href="/contact-us"
            className="inline-block bg-purple-700 text-white px-4 py-2 mt-6  "
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}

 
