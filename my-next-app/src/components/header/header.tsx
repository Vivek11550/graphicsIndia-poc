"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../Assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={37} height={36} className="rounded" />
          <h1 className="text-lg font-bold">Graphics India Online</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center font-medium">
          <Link href="/" className="hover:text-purple-700">Home</Link>
          <Link href="/about" className="hover:text-purple-700">About</Link>
          <Link href="/portfolio" className="hover:text-purple-700">Portfolio</Link>
          <Link href="/services" className="hover:text-purple-700">Services</Link>
          <Link href="/contact-us" className="bg-purple-700 text-white px-4 py-2 rounded">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4 text-center">
            <Link href="/" className="hover:text-purple-700">Home</Link>
            <Link href="/about" className="hover:text-purple-700">About</Link>
            <Link href="/portfolio" className="hover:text-purple-700">Portfolio</Link>
            <Link href="/services" className="hover:text-purple-700">Services</Link>
            <Link href="/contact-us" className="bg-purple-700 text-white px-4 py-2 rounded">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
