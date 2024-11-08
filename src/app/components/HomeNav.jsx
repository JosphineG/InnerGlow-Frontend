"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useAuthToken from "../../../hooks/useAuth";
import SelectLang from "./SelectLang";
import { useLanguage } from "../../../hooks/useLanguageContext";
const HomeNavbar = () => {
  const {language, setLanguage} = useLanguage();
  const { getItem } = useAuthToken();
  const { chatid, token } = getItem();
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-500  p-4 fixed w-screen z-[999] h-[80px] flex items-center justify-between ">
      <div className="container mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/output-onlinepngtools.png"
              alt="Logo"
              className="mr-2 w-[200px] object-contain "
            />
            {/* <h1 className="text-white font-bold text-3xl">InnerGlow</h1> */}
          </a>
          {/* */}
        </div>

        <div className="flex-1 lg:flex items-center space-x-2   justify-center gap-[30px] mr-[-150px] hidden text-sm font-semibold uppercase">
          <Link href="#about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link
            href="/community/articles"
            className="text-white hover:text-gray-200"
          >
            Community
          </Link>
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
        <div className="hidden lg:block">
          <SelectLang language={language} setLanguage={setLanguage} />
        </div>
        <div className="ml-auto hidden sm:block">
          <a
            href={`/chat/${chatid}`}
            className="bg-white text-blue-500 hover:bg-blue-300 py-2 px-6 rounded-l-full rounded-r-full font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
      {isOpen && (
        <div
          className="lg:hidden flex bg-blue-500 justify-center gap-[50px]  absolute w-[75vw] h-[100vh] flex-col items-start px-12 top-[90px] left-[-20px] shadow-lg rounded-r-[30px] transition-transform ease-in-out duration-700 z-[888] text-white bg-gradient-to-b from-blue-500 to-violet-500 text-sm font-semibold  uppercase"
          // onClick={openNav}
        >
          <div className="lg:hidden color text-blue-500">
            <SelectLang language={language} setLanguage={setLanguage} />
          </div>
          <Link href="#about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link
            href="/community/articles"
            className="text-white hover:text-gray-200"
          >
            Community
          </Link>
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact
          </a>

          <div className="sm:hidden block">
            <a
              href={`/chat/${chatid}`}
              className="bg-white text-blue-500 hover:bg-blue-300 py-2 px-6 rounded-l-full rounded-r-full font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
      <div className="space-y-[5px] lg:hidden" onClick={openNav}>
        <div className="w-[25px] h-[3px] bg-white" />
        <div className="w-[25px] h-[3px] bg-white" />
        <div className="w-[25px] h-[3px] bg-white" />
      </div>
    </nav>
  );
};

export default HomeNavbar;
