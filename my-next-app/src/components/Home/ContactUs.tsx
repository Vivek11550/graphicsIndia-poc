"use client";

import Image from "next/image";
import MapImage from "../../Assets/Home-assets/MapImage.png"

const ContactUs = () => {
  return (
    <section className="flex justify-center px-6 py-12 bg-white">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">
        
        {/* Left: Map Image */}
        <div className="w-full md:w-1/2 p-6">
          <Image
            src={MapImage} 
            alt="Company Location"
            width={458}
            height={384}
            // className="rounded-lg shadow-lg"
          />
        </div>

        
        
 <form className="space-y-4 text-black">
 <div className="flex flex-col">
  <label className="text-sm font-medium -mb-1 text-purple-700">Name</label>
  <input
    type="text"
    className=" w-full border-b  bg-white text-gray-900 rounded-none focus:outline-none focus:border-purple-400 pt-0"
  />
</div>
  
  

   <div className="flex flex-col">
    <label className="text-sm font-medium -mb-1  text-purple-700">E-mail</label>
    <input
      type="email"
      className=" w-full border-b border-gray-300  text-white rounded-none focus:outline-none focus:border-purple-400 pt-0"
    />
  </div> 
 


  <div className="flex flex-col">
    <label className="text-sm font-medium -mb-1  text-purple-700">Location</label>
    <input
      type="text"
      className="w-full border-b border-gray-300 text-white rounded-none focus:outline-none  focus:border-purple-400 pt-0"
    />
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col">
    <label className="text-sm font-medium  text-purple-700">Budget</label>
    <input
      type="text"
      className="w-full  border-b border-gray-300 text-gray-900 rounded-none focus:outline-none focus:border-purple-400 pt-0"
    />
  </div>

  <div className="flex flex-col">
    <label className="text-sm font-medium  text-purple-700">Subject</label>
    <input
      type="text"
      className="w-full border-b border-gray-300 text-gray-900 rounded-none focus:outline-none  focus:border-purple-400 pt-0"
    />
  </div>
</div>



  <div className="flex flex-col">
    <label className="text-sm font-medium  text-purple-700">Message</label>
    <input
      className="w-full  border-b border-gray-300  text-white rounded-none focus:outline-none  focus:border-purple-400 pt-0"
    />
  </div>

  <button
    type="submit"
    className="w-auto px-4 py-2 text-sm text-white rounded bg-purple-500"
  >
    Submit
  </button>
</form>

      </div>
    </section> 
  );
};

export default ContactUs;
