'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image src="./logo.png" alt="Logo" width={50} height={100} />
          <div className="text-sm font-bold leading-tight text-black">
            CLINICA SAN MIGUEL<br />
            <span className="text-xs font-normal">MEDICINA FAMILIAR</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/career">Career</Link>
          <Link href="/specials">Specials</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 hover:bg-white rounded-full" aria-label="Language Selector">
            🌐
          </button>
          <Link
            href="/book"
            className="bg-Red hover:bg-Red text-white px-4 py-2 rounded-full text-sm transition"
          >
            Book Your Visit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm text-gray">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/career">Career</Link>
          <Link href="/specials">Specials</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex items-center justify-between mt-2">
            <button className="p-2 hover:bg-gray rounded-full">🌐</button>
            <Link
              href="/book"
              className="bg-Red hover:bg-Red text-white px-4 py-2 rounded-full text-sm transition"
            >
              Book Your Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
