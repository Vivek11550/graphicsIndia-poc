

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-lg font-bold">INDIA GRAPHIC ONLINE</h1>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
           
            <li>
              
              <Link
              href="/contact-us"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition border border-black">
              Contact Us
              </Link>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

     


