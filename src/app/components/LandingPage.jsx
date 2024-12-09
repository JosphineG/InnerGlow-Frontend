"use client";
import React from "react";
import Donut from "./Donut";
import useAuthToken from "../../../hooks/useAuth";
import useTranslate from "../../../hooks/useTranslate";
import { useLanguage } from "../../../hooks/useLanguageContext";
function LandingPage() {
  const { getItem } = useAuthToken();
  const { chatid } = getItem();
  const { language } = useLanguage(); // Default to Spanish

  // Translated text using the hook
  const welcomeMessage = useTranslate("Welcome To RafikiWellness", language);
  const subMessage = useTranslate("Be gentle and kind to your Mind", language);
  const getStarted = useTranslate("Get Started", language);
  const subText = useTranslate("Your Compassionate Companion", language);
  console.log(welcomeMessage);

  return (
    <div className="w-screen h-screen flex-col flex justify-center items-center overflow-x-hidden lg:flex-row px-[10px] lg:px-[50px] pt-[200px] lg:pt-[100px]">
      <div className="relative w-full flex justify-center items-center flex-col gap-2">
        <h1 className="lg:text-[2rem] text-[1.5rem] text-center lg:text-start font-extrabold w-full leading-[35px] lg:leading-[50px] text-[#0C5CE5]">
          {welcomeMessage}
          <br />
          {subText}
        </h1>
        <p className="w-full mb-8 mt-2 text-lg font-bold lg:text-start text-center text-gray-500">
          {subMessage}
        </p>
        <a
          href={`/chat/${chatid}`}
          className="w-full lg:justify-start items-center justify-center flex mb-4 lg:mb-20"
        >
          <button className="py-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-400 hover:scale-105 lg:px-[100px] duration-300 px-[50px] w-full lg:w-[50%]">
            {getStarted}
          </button>
        </a>

        <div className="absolute left-[-180px] z-[-1] hidden">
          <Donut />
        </div>
        <div className="absolute right-[-180px] z-[-1] hidden">
          <Donut />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src="smartai.png" alt="" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default LandingPage;
