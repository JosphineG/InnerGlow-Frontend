"use client";
import React from "react";
import useTranslate from "../../../hooks/useTranslate";
import { useLanguage } from "../../../hooks/useLanguageContext";
function About() {
  const { language } = useLanguage();
  const about = useTranslate("About InnerGlow", language);
  const aboutText = useTranslate(
    `In today\'s interconnected world you can be surrounded by people,
              but still feel lonely and trusting others with our vulnerabilities
              is still hard.`,
    language
  );

  const aboutText2 = useTranslate(
    `is an
            empathetic chatbot that serves as a confidant, providing a safe
            space for users to openly express their thoughts and emotions and
            extends a comforting hand helping you prioritize your mental health
            and well-being in a non-judgemental way. `,
    language
  );

  return (
    <div className="w-full flex flex-col justify-center items-center text-center   py-6 px-4 bg-[#6495ED43] lg:pl-[120px] lg:pr-[120px] lg:h-screen mt-[20px] lg:mt-0" id="about">
      <h2 className="text-3xl mb-2 font-bold text-[#0C5CE5]">{about}</h2>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
        <div className="w-full lg:w-[90%] justify-center flex items-center">
          <img
            src="/virtualA.svg"
            alt=""
            className="
            lg:h-[340px] rounded-lg   
           object-cover object-top"
          />
        </div>
        <div>
          <p className="w-full text-left text-gray-700 text-md lg:w-[90%] lg:mt-[-80px]">
            {aboutText}
          </p>
          <br />
          <p className="text-left mt-2 text-gray-700 text-md lg:w-[90%] ">
            <span className="text-blue-600 font-bold">InnerGlow</span>{" "}
            {aboutText2}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
