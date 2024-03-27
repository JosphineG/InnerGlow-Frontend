import React from "react";
import Markdown from "react-markdown";
// import myPic from "../src/assets/me (2).jpg";
function UserChatitem({ text, name }) {
  const sliced = name?.slice(0, 1);
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white md:max-w-[500px] w-[100%]">
              <Markdown>{text}</Markdown>
            </span>
          </div>
        </div>
        <h3 className="w-8 h-8 p-6 rounded-full order-2 bg-gray-300 uppercase text-center flex items-center justify-center font-bold text-blue-500">
          {name?.slice(0, 2)}
        </h3>
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
