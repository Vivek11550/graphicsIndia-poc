import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../Assets/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-10 items-start text-left">
        {/* Logo & Social */}
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="India Graphic Online Logo"
              width={45}
              height={45}
              className="logo-animate"
            />
            <h2 className="text-lg font-semibold">Graphics India Online</h2>
          </div>
          <p className="text-gray-300 hover:text-white text-sm">
            Graphics India Online, a leading Web and Mobile App Development
            Company based in Camp, Pune
          </p>

          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/people/Graphics-India-Online-Pune/100087796726460/"
              target="_blank"
              className="social-icon p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="social-icon p-2  rounded-full bg-white/20 hover:bg-white/40 transition"
            >
              <FaTwitter size={18} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="social-icon p-2  rounded-full bg-white/20 hover:bg-white/40 transition"
            >
              <FaLinkedinIn size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/graphicsindiaonlinepune"
              target="_blank"
              className="social-icon p-2  rounded-full bg-white/20 hover:bg-white/40 transition"
            >
              <FaInstagram size={18} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-start gap-2 text-sm mt-1 ml-24">
          <h3 className="text-base font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white">
            Portfolio
          </Link>
          <Link href="/contact-us" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </nav>

        {/* Our Services Section */}
        <div className="flex flex-col items-start gap-2 text-sm mt-1 ml-18">
          <h3 className="text-base font-semibold mb-2">Our Services</h3>
          {[
            "Web Development",
            "Mobile Applications",
            "UI/UX Design",
            "Digital Marketing",
            "IT Consulting",
            "Cloud Services",
          ].map((service) => (
            <Link
              key={service}
              href="/services"
              className="text-gray-300 hover:text-white"
            >
              {service}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-sm text-gray-200 items-start">
          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition bounce-icon">
              <FaEnvelope size={18} />
            </div>
            <div>
              <h3 className="font-medium text-white">Email</h3>
              <Link
                href="mailto:hi@graphicsindiaonline.com"
                className="text-gray-300 hover:text-white"
              >
                hi@graphicsindiaonline.com
              </Link>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition bounce-icon">
              <FaPhoneAlt size={18} />
            </div>
            <div>
              <h3 className="font-medium text-white">Phone</h3>
              <Link
                href="tel:+919657480645"
                className="text-gray-300 hover:text-white"
              >
                +91 9657480645
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="border-t border-gray-500 mt-10 mx-6" />

      {/* Copyright */}
      <p className="text-left lg:text-center text-xs text-gray-400 mt-4 px-6">
        © 2025 Graphics India Online. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
