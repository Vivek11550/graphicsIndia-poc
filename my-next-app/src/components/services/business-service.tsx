
"use client";

import Image from "next/image";
import businessImg from "../../Assets/service-assets/Package-Services.png"; 


const BusinessService = () => {
  return (
    <section className="w-full px-6 py-12" style={{ backgroundColor: "#F0F1F3" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={businessImg}
            alt="Pro Business Suite"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Pro Business Suite – Complete Digital Growth
          </h2>
          <p className="text-lg font-semibold text-black mb-4">
            ₹ 25,000/month or ₹ 2.75L/year
          </p>
          <p className="text-gray-600 mb-4">
            A comprehensive package designed to power up your digital presence:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Next.js Website – 10 Pages (Additional ₹4,000 / extra page)</li>
            <li>Cloud Hosting + Cloud Backup worth ₹12,000 / Year</li>
            <li>Domain Registration worth ₹1,000 / Year</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>8 Custom Graphics Per Month (Includes Posters, Captions & Hashtags for IG, FB & LinkedIn)</li>
            <li>Google Business Profile Management (If required)</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-gray-800">Add-Ons:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
            <li>Paid Ad Budget - Min ₹3500 Daily</li>
            <li>Meta Ads: Cost-at-Actual + 20% Operating Fee (Starting from ₹15,000 / Month)</li>
            <li>Google Ads: Cost-at-Actual + 20% Operating Fee (Starting from ₹15,000 / Month)</li>
          </ul>

         
          <a
                href="/contact-us"
                className="inline-block bg-purple-700 text-white px-5 py-2 mt-10 rounded hover:bg-gray-200 hover:text-black transition-colors"
              >
                Contact-us
              </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessService;
