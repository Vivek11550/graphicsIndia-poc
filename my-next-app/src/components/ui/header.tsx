"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../Assets/logo.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Function to apply active class
  const linkClass = (path: string) =>
    pathname === path
      ? "text-purple-700 font-semibold"
      : "text-gray-700 hover:text-purple-700";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-md lg:px-6 transition duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={37} height={36} className="rounded" />
          <h1 className="text-lg font-bold">Graphics India Online</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 items-center font-medium">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/portfolio" className={linkClass("/portfolio")}>Portfolio</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/blog" className={linkClass("/blog")}>Blogs</Link>
          <Link href="/contact-us" className="bg-purple-700 text-white px-4 py-2 rounded">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur py-4 px-6 shadow-md transition duration-300">
          <nav className="flex flex-col space-y-4 text-center">
            <Link href="/" className={linkClass("/")} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className={linkClass("/about")} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/portfolio" className={linkClass("/portfolio")} onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/services" className={linkClass("/services")} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/blog" className={linkClass("/blog")} onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link href="/contact-us" className="bg-purple-700 text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
