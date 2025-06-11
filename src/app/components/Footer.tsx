'use client';

import { FC } from 'react';
import { Send } from 'lucide-react';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray">
        {/* Logo & Newsletter */}
        <div>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
                 {/* Logo Section */}
                 <div className="flex items-center space-x-2">
                   <Image src="./logo.png" alt="Logo" width={50} height={100} />
                   <div className="text-sm font-bold leading-tight text-black">
                     CLINICA SAN MIGUEL<br />
                     <span className="text-xs font-normal">MEDICINA FAMILIAR</span>
                   </div>
                 </div>
          </div>
          <p className="mb-2 font-semibold text-black">Join our newsletter</p>
          <form className="flex items-center bg-gray rounded-full p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className=" px-4 py-2 outline-none w-full bg-gray rounded-full"
            />
            <button
              type="submit"
              className="bg-Red text-white p-2 rounded-full"
              aria-label="Subscribe to newsletter"
            >
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold mb-3">Our Locations</h4>
          <ul className="space-y-2">
            <li><a href="#">Dallas</a></li>
            <li><a href="#">Houston</a></li>
            <li><a href="#">San Antonio</a></li>
            <li><a href="#">See All 17 Clinics</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-3">Socials</h4>
          <ul className="space-y-2">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-xs text-gray py-4 px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <span>© 2025 Clinica San Miguel. All Rights Reserved.</span>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
