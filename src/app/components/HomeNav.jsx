import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HomeNavbar = () => {
  return (
    <nav className="bg-blue-500  p-4 fixed w-screen z-[999] h-[80px] flex items-center justify-between ">
      <div className="container mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image src="/innerglow.png" alt="Logo" className="mr-2" width={200} height={0}/>
        </div>  
        
        <div className="flex-1 md:flex items-center space-x-4   justify-center bg-red- gap-[100px] mr-[-150px] font-semibold hidden">
          <Link href="#about"className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/community"className="text-white hover:text-gray-200">
            Community
          </Link>
          <Link href="/community"className="text-white hover:text-gray-200">
           Contact
          </Link>
        </div>
          <div className='ml-auto'>
            <Link href="/get-started"className="bg-white text-blue-500 hover:bg-blue-300 py-2 px-4 rounded-l-full rounded-r-full font-semibold">Get Started
            </Link>
          </div>
        
      </div>
    </nav>
  );
};

export default HomeNavbar;
