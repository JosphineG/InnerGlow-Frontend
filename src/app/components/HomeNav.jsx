import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HomeNavbar = () => {
  return (
    <nav className="bg-blue-500  p-4 fixed w-screen z-[999] h-[80px] flex ">
      <div className="container mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image src="/innerglow.png" alt="Logo" className="mr-2" width={200} height={0}/>
        </div>  
        
        <div className="flex items-center space-x-4   justify-between md:gap-[100px] md:space-x-12">
          <Link href="#about"className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/community"className="text-white hover:text-gray-200">
            Community
          </Link>
          <Link href="/" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <div className='ml-auto'>
            <Link href="/get-started"className="bg-white text-blue-500 hover:bg-blue-300 py-2 px-4 rounded-l-full rounded-r-full font-semibold">Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
