import React from 'react'

// pages/index.js

const Wellbeing = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center items-center mb-4 "> <h1 className='text-xl font-bold text-blue-500'>Welcome To InnerGlow - Your Compassionate Companion</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Anxiety and Depression</h2>
          <p className="mt-2 text-md">Managing anxiety and uderstanding depression for your wellbeing</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Stress Management</h2>
          <p className="mt-2 text-md">Techniques for coping with stress such as mindful meditation</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Relationships </h2>
          <p className="mt-2 text-md">Navigating conflicts effectively,healthy communication.</p>
        </div>
        <div className="border border-[#1351BD] p-4 rounded-lg text-center">
          <h2 className="font-bold text-md">Grief & Loss </h2>
          <p className="mt-2 text-md">Self-care tips for managing grief and loss as well as seeking support</p>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
