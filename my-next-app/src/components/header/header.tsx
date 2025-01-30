

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../Assets/logo.png"

const Header = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
         {/* <h1 className="text-lg font-bold">INDIA GRAPHIC ONLINE</h1>  */}
        {/* <h1
           className="text-lg font-bold"
            style={{ fontFamily: "Sigmar One, cursive" }}
             >   
        INDIA GRAPHIC ONLINE
           </h1> */}
           {/* Logo and Title */}
        <div className="flex items-center space-x-4 pl-64">
          <Image
            src={logo}
            alt="India Graphic Online Logo"
            width={37}
            height={36} 
            className="rounded" 
          />
          <h1
            className="text-lg font-bold"
            // style={{ fontFamily: "Sigmar One, cursive" }}
          >
            Graphics India Online
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-10 items-center mr-60 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-purple-700">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-purple-700">
                Services
              </Link>
            </li>
           
            <li>
              
              <Link
              href="/contact-us"
              className="bg-purple-700 text-white px-4 py-2 rounded ">
              Contact 
              </Link>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

     


