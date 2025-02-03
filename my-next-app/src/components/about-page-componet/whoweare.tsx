import React from "react";
import next from "../../Assets/about-assets/next.png";
import mern from "../../Assets/about-assets/mern.png";
import laptop from "../../Assets/about-assets/laptop.png";

import wordpress from "../../Assets/about-assets/wordpress.png";
import Image from "next/image";

const Whoweare = () => {
  return (
    <>
      <div className="bg-[white] text-black py-5 flex flex-col items-center ">
        <h2 className="text-3xl font-bold text-center ">WHO ARE WE?</h2>
        <div className="flex gap-5 py-5">
          <div>

          <Image
            src={laptop}
            alt="nextjs image"
            className="w-24 md:w-36 lg:w-44"
          />
          
          </div>
          <div>cards</div>
        </div>
      </div>
      {/* tecnology section  */}
      <div className=" bg-[#132238] h-[60vh] flex flex-col justify-center">
        <h2
          className="text-3xl md:text-4xl  mb-6 font-bold text-white  text-center"
          style={{ fontFamily: "PT Serif, serif" }}
        >
          Innovatives Technology
        </h2>
        <div className="flex justify-center gap-7  mt-6 flex-wrap b">
          <Image
            src={next}
            alt="nextjs image"
            className="w-24 md:w-36 lg:w-44"
          />
          <Image src={mern} alt="mern image" className="w-28 md:w-40 lg:w-48" />
          <Image
            src={wordpress}
            alt="wordpress image"
            className="w-36 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </>
  );
};

export default Whoweare;
