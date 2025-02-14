"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import clientimg from "../../Assets/Home-assets/clientimg.png";

const testimonials = [
  {
    name: "Vaibhav Bokare",
    location: "Nanded, India",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Accusan Accusantium sapiente laboriosam fugit ea perspiciatis... ",
    image: clientimg,
  },
  {
    name: "John Doe",
    location: "Mumbai, India",
    message: "Eveniet, iste accusamus, molestiae ratione...",
    image: clientimg,
  },
  {
    name: "Jane Smith",
    location: "Delhi, India",
    message: "Accusantium sapiente laboriosam fugit ea perspiciatis...",
    image: clientimg,
  },
  {
    name: "Ravi Kumar",
    location: "Bangalore, India",
    message: "Voluptates, tenetur, quia atque quibusdam...",
    image: clientimg,
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 bg-[white] relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
        Clients Success Stories
      </h2>
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Adjust delay as needed
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 flex gap-4 text-white rounded-2xl p-6 px-5 shadow-xl transform transition-all duration-300">
              <div className="flex flex-col items-start mb-4">
                <img
                  src={testimonial.image.src}
                  alt={testimonial.name}
                  className="w-22"
                />
                <h3 className="font-bold text-lg mt-3">{testimonial.name}</h3>
                <p className="text-sm text-center text-gray-300">
                  {testimonial.location}
                </p>
              </div>
              <div>
                <p className="py-2">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-gray-300">{testimonial.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer z-10"></div>
      <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg cursor-pointer z-10"></div>
    </div>
  );
}
