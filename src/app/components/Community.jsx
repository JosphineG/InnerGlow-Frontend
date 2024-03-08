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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full rounded-r-full mx-auto block">
        Explore Communities
      </button>
    </div>
  );
};

export default Community;
