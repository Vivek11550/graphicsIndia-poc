import React from 'react'
import Image, { StaticImageData } from "next/image";

const Herocomponent = ({imageurl,title}:{imageurl:StaticImageData,title:string}) => {
  return (
    <div>
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <Image
            src={imageurl}
            alt="Descriptive text"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 text-white text-center max-w-lg">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4"> {title} </h1>
        </div>
      </section>
    </div>
  )
}
export default Herocomponent
