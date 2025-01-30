import React from "react";
import Image from "next/image";
import contactImage from "../../Assets/ContactUs2.png"; 

const ContactUs = () => {
  return (
    <section className="container mx-auto px-6 py-12 bg-[#9A9A9A]">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-center ">
        
    
        <div className="w-full bg-[#9A9A9A] mr-auto p-10 ">
          <Image
            src={contactImage}
            alt="Contact Us"
            width={600} 
            height={450} 
            //className="w-full h-auto object-cover"
        
            
          />
        </div>

        
        {/* <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div> */}
        <div className=" bg-[#9A9A9A]  p-6"
            
            >
              <form className="space-y-4 text-white">
                <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                <label className="text-sm font-medium text-black">First Name</label>  
                  <input
                    type="text"
                    
                    // className="w-full p-3 border border-gray-300 rounded"
                    className="w-full p-3 border-b border-gray-300 bg-[#9A9A9A] text-white rounded-lg focus:outline-none  "
                  />
                  </div>
                  <div className="flex flex-col">
                  <label className="text-sm font-medium text-black">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border-b border-gray-300  bg-[#9A9A9A] text-white rounded-lg focus:outline-none "
                  />
                </div>
                </div>
                <div className="flex flex-col">
                <label className="text-sm font-medium text-black">E-mail</label>
                 <input
                  type="email"
                  className= "w-full p-3 border-b bg-[#9A9A9A] text-white rounded-lg focus:outline-none  "
                />
                </div>
                <div className="flex flex-col">
                <label className="text-sm font-medium text-black">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border-b  bg-[#9A9A9A] text-white rounded-lg focus:outline-none "
                />  
               </div>
               <div className="flex flex-col">
               <label className="text-sm font-medium " >Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border-b  bg-[#9A9A9A] text-white rounded-lg focus:outline-none  "
                ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-auto px-4 py-2 text-sm bg-[#4D2B32] text-white rounded-lg "
                >
                  Submit
                </button>
              </form>
      </div>
      </div>

    </section>
  );
};

export default ContactUs;

