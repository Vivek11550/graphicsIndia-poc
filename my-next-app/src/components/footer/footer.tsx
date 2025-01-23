import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white pt-10 pb-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-6">
    
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold"> India Graphic Online</div>
          <div className="text-sm text-white/[0.5] mt-2">
            © 2023 Graphics India Online. All rights reserved.
          </div>
        </div>

    
        <div className="flex flex-col items-center md:items-start">
          <div className="text-lg font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
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
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-400">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5]"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5]"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5]"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-white hover:bg-white/[0.5]"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
