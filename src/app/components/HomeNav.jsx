import React from 'react'
import Link from 'next/link';

const HomeNavbar = () => {
  return (
    <nav className="bg-[#6495ed] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src="/logo.svg" alt="Logo" className="h-8 mr-2" /> */}
        </div>  
        
        <div className="flex items-center space-x-4">
          <Link href="#about"className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/wellbeing"className="text-white hover:text-gray-200">
           Well-being Resources
          </Link>
          <Link href="/community"className="text-white hover:text-gray-200">
            Community
          </Link>
          <Link href="/community"className="text-white hover:text-gray-200">
           Contact
          </Link>
          <div className='ml-auto'>
            <Link href="/get-started"className="bg-blue-500 text-white hover:bg-blue-300 py-2 px-4 rounded-l-full rounded-r-full font-semibold">Get Started
            </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default HomeNavbar;
