import React from "react";
// import myPic from "../src/assets/me (2).jpg";
function UserChatitem() {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:max-w-[500px] w-[100%]">
              Hi, In the past few days i have been feeling streessed and
              overwhelmed because i lost a close friend. Can you provide tips
              for managing stressand anxiety during challenging times?
            </span>
          </div>
        </div>
        {/* <img
          src={myPic}
          alt="My profile"
          className="w-12 h-12 rounded-full order-2"
        /> */}
      </div>
    </div>
  );
}

export default UserChatitem;
