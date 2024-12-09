"use client";
import React from "react";
import useTranslate from "../../../hooks/useTranslate";
import { useLanguage } from "../../../hooks/useLanguageContext";
const Community = () => {
  const { language } = useLanguage();
  const community = useTranslate("Community", language);
  const communityAbout = useTranslate(
    `The RafikiWellness community serves as a nurturing ecosystem where
          individuals come together to support, inspire, and uplift each other
          on their mental health journeys.Users can connect with like-minded
          individuals, share their experiences, and find solidarity in their
          struggles and triumphs.`,
    language
  );
  const communityAbout2 = useTranslate(
    ` Through peer support, empathy, and encouragement, members of the
          RafikiWellness community find strength in unity, knowing that they are not
          alone in their challenges. Together, they strive to break down stigmas
          surrounding mental health and create a culture of openness,
          understanding, and empowerment.`,
    language
  );
  const wellbeing = useTranslate(
    " Wellbeing - Unlock Inner Peace and Wellness",
    language
  );
  const anxiety = useTranslate("Anxiety and Depression", language);
  const anxietyText = useTranslate(
    "Managing anxiety and understanding depression for your wellbeing",
    language
  );
  const stress = useTranslate("Stress Management", language);
  const stressText = useTranslate(
    "Techniques for coping with stress such as mindful meditation",
    language
  );
  const relationships = useTranslate("Relationships", language);
  const realationshipsText = useTranslate(
    "   Navigating conflicts effectively, healthy communication.",
    language
  );
  const grief = useTranslate("Grief & Loss", language);
  const griefText = useTranslate(
    "Self-care tips for managing grief and loss as well as seeking support",
    language
  );
  const explore = useTranslate("Explore", language);

  return (
    <div
      className="w-full flex  justify-center items-center p-8 rounded-lg py-6 px-4 flex-col lg:pl-[120px] lg:pr-[120px] mt-[20px]"
      id="community"
    >
      <h2 className="text-3xl mb-[10px] lg:mb-[30px] font-bold text-[#0C5CE5]">
        {community}
      </h2>

      <div className="mb-4 flex w-full flex-col justify-center items-center text-center   lg:flex-row gap-6  ">
        {/* <div className="w-full lg:w-[70%] justify-center flex items-center">
          <img
            src="/undraw.svg"
            alt="undraw img"
            className="
            lg:h-[4z00px] rounded-lg   
           object-cover object-top"
          />
        </div> */}
        <p className="text-gray-700 text-md text-left lg:w-[90%] ">
          {communityAbout}
          <br />
          <br />
          {communityAbout2}
        </p>
      </div>

      <div className="container mx-auto mt-[5px] lg:mt-4">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-[#0C5CE5] text-3xl mb-4 font-bold">
            {wellbeing}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-[40px] mb-[40px]">
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">{anxiety}</h2>
            <p className="mt-2 text-lg text-gray-700">{anxietyText}</p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">{stress}</h2>
            <p className="mt-2 text-lg text-gray-700">{stressText}</p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">
              {relationships}{" "}
            </h2>
            <p className="mt-2 text-lg text-gray-700">{realationshipsText}</p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">{grief}</h2>
            <p className="mt-2 text-lg text-gray-700">{griefText}</p>
          </div>
        </div>
      </div>
      <a href="/community/articles">
        <button className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 rounded-l-full rounded-r-full mx-auto block px-32 mb-[30px]">
          {explore}
        </button>
      </a>
    </div>
  );
};

export default Community;
