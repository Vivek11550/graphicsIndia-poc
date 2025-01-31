

// // import Image from "next/image";
// // import serviceImage from "../../Assets/Service.png"; 

// // const services = [
// //   {
// //     title: "Software Development",
// //     subtitle: "We Provide Custom software development solutions to meet your unique business needs,ensuring scalability,security and high performance",
// //   },
// //   {
// //     title: "UI/UX & Web Design",
// //     subtitle: "We Design intutive,user-friendly websites with a focus on seamless user experience and modern,responsive designs that engage visitors",
// //   },
// //   {
// //     title: "ERP Solutions",
// //     subtitle: "Our ERP Solutions streamline your business processes,integrating key functions into one platform for better efficiency,data accuracy,and decision making",
// //   },
// //   {
// //     title: "SEO Management",
// //     subtitle: "Our SEO management services enhance your online visibility,helping you rank higher on search engines and drive targeted traffic to your website ",
// //   },
// // ];




// // export default function ServiceComponent() {
// //     return (
// //       <section className="bg-gray-50 py-16">
// //         <div className="container mx-auto flex flex-col items-center px-6 md:px-12">
          
// //           <div className="text-center mb-12">
// //             <h2
// //               className="text-2xl md:text-3xl font-bold text-black mb-4"
// //               style={{ fontFamily: "PT Serif, serif" }}
// //             >
// //               Expert IT Services for Web Development and SEO
// //             </h2>
// //             <p
// //               className="text-sm text-gray-700  "
// //               style={{ fontFamily: "Poppins, sans-serif" }}
// //             >
// //               Innovative IT services, including custom website development IT services,UI/UX design, ERP solutions and SEO management,tailored to drive business growth and success. 
              
// //             </p>
           

// //           </div>
  
          
// //           <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            
// //             <div className="md:w-1/2 flex justify-center mr-auto pl-48 ">
// //               <Image
// //                 src={serviceImage}
// //                 alt="Service Illustration"
// //                 width={400} 
// //                 height={400} 
// //                 className="rounded-lg shadow-lg"
// //               />
// //             </div>
  
        
// //             <div className="md:w-1/2 space-y-6">
// //               {services.map((service, index) => (
// //                 <div key={index}>
// //                   <h3
// //                     className="text-xl font-semibold text-black"
// //                     style={{ fontFamily: "PT Serif, serif" }}
// //                   >
// //                     {service.title}
// //                   </h3>
// //                   <p
// //                     className="text-gray-700"
// //                     style={{ fontFamily: "Poppins, sans-serif" }}
// //                   >
// //                     {service.subtitle}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// import Image from "next/image";
// import serviceImage from "../../Assets/Service.png";
// import success1 from "../../Assets/success1.png";
// import success2 from "../../Assets/success2.png";
// import success3 from "../../Assets/success3.png";
// import mapImage from "../../Assets/map.png"; 

// const services = [
//   {
//     title: "Software Development",
//     subtitle: "We provide custom software development solutions to meet your unique business needs, ensuring scalability, security, and high performance.",
//   },
//   {
//     title: "UI/UX & Web Design",
//     subtitle: "We design intuitive, user-friendly websites with a focus on seamless user experience and modern, responsive designs that engage visitors.",
//   },
//   {
//     title: "ERP Solutions",
//     subtitle: "Our ERP solutions streamline your business processes, integrating key functions into one platform for better efficiency, data accuracy, and decision-making.",
//   },
//   {
//     title: "SEO Management",
//     subtitle: "Our SEO management services enhance your online visibility, helping you rank higher on search engines and drive targeted traffic to your website.",
//   },
// ];

// export default function ServiceComponent() {
//     return (
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-6 md:px-12">
//           {/* IT Services Section */}
//           <div className="text-center mb-12">
//             <h2
//               className="text-2xl md:text-3xl font-bold text-black mb-4"
//               style={{ fontFamily: "PT Serif, serif" }}
//             >
//               Expert IT Services for Web Development and SEO
//             </h2>
//             <p
//               className="text-sm text-gray-700"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               Innovative IT services, including custom website development, UI/UX
//               design, ERP solutions, and SEO management, tailored to drive
//               business growth and success.
//             </p>
//           </div>
  
//           <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-12">
//             {/* Left Image */}
//             <div className="md:w-1/2 flex justify-center">
//               <Image
//                 src={serviceImage}
//                 alt="Service Illustration"
//                 width={400}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
  
//             {/* Services */}
//             <div className="md:w-1/2 space-y-6">
//               {services.map((service, index) => (
//                 <div key={index}>
//                   <h3
//                     className="text-xl font-semibold text-black"
//                     style={{ fontFamily: "PT Serif, serif" }}
//                   >
//                     {service.title}
//                   </h3>
//                   <p
//                     className="text-gray-700"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     {service.subtitle}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//           {/* Client Success Stories */}
//           <div className="mt-16 text-center">
//             <h2
//               className="text-2xl font-bold text-black mb-8"
//               style={{ fontFamily: "PT Serif, serif" }}
//             >
//               Client Success Stories
//             </h2>
//             <div className="flex justify-center space-x-8">
//               {[success1, success2, success3].map((image, index) => (
//                 <div key={index} className="text-center">
//                   <Image
//                     src={image}
//                     alt={`Client ${index + 1}`}
//                     width={120}
//                     height={120}
//                     className="rounded-full shadow-lg mx-auto"
//                   />
//                   <p
//                     className="mt-4 text-sm font-semibold text-black"
//                     style={{ fontFamily: "Poppins, sans-serif" }}
//                   >
//                     Client XYZ {index + 1}
//                   </p>
//                   <div className="text-yellow-400 text-lg">★★★★★</div>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//            {/* Get in Touch Section  */}
//            <div className=" p-8 rounded-lg mt-16 grid grid-cols-1 md:grid-cols-2"> 
          
        
//             <div className="mt-6 p-6">
//               <h2
//                 className="text-2xl font-bold text-black mb-6 text-center "
//                 style={{ fontFamily: "PT Serif, serif" }}
//               >
//                 Get in Touch with Us
//               </h2>
//               <div >
//                 <Image
//                   src={mapImage}
//                   alt="Map Location"
//                   width={644}
//                   height={450}
                  
//                 />
//               </div>
//             </div>
  
            
//             <div className="bg-#9A9A9A bg-opacity-80 p-6"
            
//             >
//               <form className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     // className="w-full p-3 border border-gray-300 rounded"
//                     className="w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500 "
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="E-mail"
//                   className= "w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500 "
//                 />
//                 <input
//                   type="text"
//                   placeholder="Subject"
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500 "
//                 />
//                 <textarea
//                   placeholder="Message"
//                   rows={4}
//                   className="w-full p-3 border-b border-gray-300 rounded-none focus:outline-none focus:border-blue-500 "
//                 ></textarea>
//                 <button
//                   type="submit"
//                   className="w-auto px-4 py-2 text-sm bg-black text-white  rounded hover:bg-gray-800 transition "
//                 >
//                   Send Message
//                 </button>
//               </form>
//               {/* <div className="mt-6">
//                 <p className="text-sm text-gray-700">
//                   <strong>Mobile:</strong> 9876542312
//                 </p>
//                 <p className="text-sm text-gray-700">
//                   <strong>Email:</strong> email@123.com
//                 </p>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
