import React from "react";
import Link from "next/link";
import logo from "../../Assets/logo.png";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
    
        <div className="flex  items-center space-x-4 mb-6 md:mb-0">
        <Image src={logo} alt="India Graphic Online Logo" width={50} height={50} />
          <h2 className="text-xl font-bold">India Graphic Online</h2>
        </div>
           
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-8 mb-6 md:mb-0">
          <Link href="/" className="hover:text-gray-400 px-2 py-1">Home</Link>
          <Link href="/about" className="hover:text-gray-400 px-2 py-1">About</Link>
          <Link href="/services" className="hover:text-gray-400 px-2 py-1">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-400 px-2 py-1">Portfolio</Link>
          <Link href="/contact-us" className="hover:text-gray-400 px-2 py-1">Contact Us</Link>
        </nav>

        
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-white/[0.2] hover:bg-white/[0.4] transition">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-white/[0.2] hover:bg-white/[0.4] transition">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="p-2 rounded-full bg-white/[0.2] hover:bg-white/[0.4] transition">
            <FaYoutube size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="p-2 rounded-full bg-white/[0.2] hover:bg-white/[0.4] transition">
            <FaInstagram size={20} />
          </Link>
        </div>

      </div>

      
      <p className="text-center text-sm text-gray-400 mt-6">© 2024 India Graphic Online. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

