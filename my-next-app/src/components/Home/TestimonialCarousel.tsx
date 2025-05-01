"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import clientimg from "../../Assets/Home-assets/client.png";

const testimonials = [
  {
    name: "Vaibhav Bokare",
    location: "Nanded, India",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente laboriosam fugit ea perspiciatis...",
    image: clientimg,
  },
  {
    name: "Mr. Raj Bulland",
    location: "Owner of Nikita’s Curry Corner",
    message:
      "You guys rock! The website, nikitascurrycorner.ca, you developed for us has got great reviews from our customers. Remarks like, perfect, flawless, and blazing fast are true testimony for the Bharathatechno team.",
    image: clientimg,
  },
  {
    name: "Ms. Aiesha ",
    location: "Owner of Shred-n-Shape",
    message:
      "Bharatatechno's team transformed my vision into a stunning website. Their professionalism, communication, and technical expertise were exceptional. I'm thrilled with the results!",
    image: clientimg,
  },
  {
    name: "Mr. Saiprasad Bhartu",
    location: "Owner of UrbanAxis",
    message:
      "BharathaTechno did an outstanding job building our UrbanAxis website. The result was a modern, intuitive platform that truly represents our brand. Their SEO expertise boosted our rankings and brought in more leads. Their team's professionalism, attention to detail, and strategic approach have clearly impacted our growth. I highly recommend them to anyone in need of web and digital solutions.",
    image: clientimg,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-6 bg-white relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Client Success Stories
      </h2>

      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next-arrow",
          prevEl: ".custom-prev-arrow",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl min-h-80 flex flex-col gap-4 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full border border-gray-600"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-yellow-400 text-sm mb-2">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {testimonial.message}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev-arrow absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-20">
        <button className="bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-md border border-gray-300 transition duration-300">
          ←
        </button>
      </div>
      <div className="custom-next-arrow absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-20">
        <button className="bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-md border border-gray-300 transition duration-300">
          →
        </button>
      </div>

      {/* Hide default Swiper arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
