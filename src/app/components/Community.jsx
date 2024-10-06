import React from "react";

const Community = () => {
  return (
    <div className="w-full flex  justify-center items-center p-8 rounded-lg py-6 px-4 flex-col lg:pl-[120px] lg:pr-[120px] mt-[20px]">
      <h2 className="text-3xl mb-[60px] lg:mb-0 font-bold text-[#0C5CE5]">
        Community
      </h2>

      <div className="mb-4 flex w-full flex-col justify-center items-center text-center   lg:flex-row gap-6 lg:h-screen lg:mt-[-130px]">
        <div className="w-full lg:w-[70%] justify-center flex items-center">
          <img
            src="/undraw.svg"
            alt="undraw img"
            className="
            lg:h-[400px] rounded-lg   
           object-cover object-top"
          />
        </div>
        <p className="text-gray-700 text-xl text-left lg:w-[80%] lg:mt-[-40px]">
          The InnerGlow community serves as a nurturing ecosystem where
          individuals come together to support, inspire, and uplift each other
          on their mental health journeys.Users can connect with like-minded
          individuals, share their experiences, and find solidarity in their
          struggles and triumphs.
          <br />
          <br />
          Through peer support, empathy, and encouragement, members of the
          InnerGlow community find strength in unity, knowing that they are not
          alone in their challenges. Together, they strive to break down stigmas
          surrounding mental health and create a culture of openness,
          understanding, and empowerment.
        </p>
      </div>

      <div className="container mx-auto mt-[65px] lg:mt-4">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-[#0C5CE5] text-3xl mb-4 font-bold">
            Wellbeing - Unlock Inner Peace and Wellness
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[40px] mb-[40px]">
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">
              Anxiety and Depression
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Managing anxiety and understanding depression for your wellbeing
            </p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">
              Stress Management
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Techniques for coping with stress such as mindful meditation
            </p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">Relationships </h2>
            <p className="mt-2 text-lg text-gray-700">
              Navigating conflicts effectively, healthy communication.
            </p>
          </div>
          <div className="border-2 border-gray-500 p-4 rounded-lg text-center">
            <h2 className="font-bold text-xl text-gray-700">Grief & Loss </h2>
            <p className="mt-2 text-lg text-gray-700">
              Self-care tips for managing grief and loss as well as seeking
              support
            </p>
          </div>
        </div>
      </div>
      <a href="/community/articles">
        <button className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 rounded-l-full rounded-r-full mx-auto block px-32 mb-[30px]">
          Explore
        </button>
      </a>
    </div>
  );
};

export default Community;
