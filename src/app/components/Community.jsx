import React from 'react';

const Community = () => {
  return (
    <div className=" p-8 rounded-lg shadow-md">
      <h2 className=" flex  justify-center items-center text-2xl font-bold mb-4 text-blue-500">Community</h2>
      <div className="mb-4">
        <p className="text-blue-7
        00">
          The MindMate community serves as a nurturing ecosystem where individuals come together to support, inspire, and uplift each other on their mental health journeys.Users can connect with like-minded individuals, share their experiences, and find solidarity in their struggles and triumphs.Through peer support, empathy, and encouragement, members of the MindMate community find strength in unity, knowing that they are not alone in their challenges. Together, they strive to break down stigmas surrounding mental health and create a culture of openness, understanding, and empowerment.
        </p>
      </div>
      
       <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center mb-4">
        <h1 className='text-xl font-bold text-blue-500'>Wellbeing - Unlock Inner Peace and Wellness</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Anxiety and Depression</h2>
          <p className="mt-2 text-md">Managing anxiety and understanding depression for your wellbeing</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Stress Management</h2>
          <p className="mt-2 text-md">Techniques for coping with stress such as mindful meditation</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Relationships </h2>
          <p className="mt-2 text-md">Navigating conflicts effectively, healthy communication.</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Grief & Loss </h2>
          <p className="mt-2 text-md">Self-care tips for managing grief and loss as well as seeking support</p>
        </div>
      </div>
      </div>
      <button className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full rounded-r-full mx-auto block">
        Explore Communities
      </button>
    </div>
    
  );
};

export default Community;
