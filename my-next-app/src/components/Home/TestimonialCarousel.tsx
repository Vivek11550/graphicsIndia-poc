"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonials`);
      const json = await res.json();
      setTestimonials(json.data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-6 bg-white relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Client Success Stories
      </h2>

      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
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
        {testimonials.map((item, index) => {
          const { name, identity, message, rating, image } = item;

          // Safely get the image URL (medium format preferred)
          const imageUrl = image?.[0]?.formats?.medium?.url || image?.[0]?.url;
          const fullImageUrl = imageUrl
            ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`
            : null;

          return (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-xl min-h-80 flex flex-col gap-4 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4">
                  {fullImageUrl && (
                    <Image
                      src={fullImageUrl}
                      alt={name}
                      width={64}
                      height={64}
                      className="rounded-full border border-gray-600"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm text-gray-300">{identity}</p>
                  </div>
                </div>
                <div className="mt-4">
                  {rating && (
                    <p className="text-yellow-400 text-sm mb-2">
                      {"⭐".repeat(rating)}
                    </p>
                  )}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {message}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Navigation Arrows */}
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

      {/* Hide default arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
