"use client";
import React from "react";
import ChatNav from "./ChatNav";
import SystemChatItem from "./SystemChatItem";
import UserChatitem from "./UserChatitem";
import useAuthToken from "../../../hooks/useAuth";
function Chat() {
  const { getItem } = useAuthToken();
  const { token } = getItem();
  const text =
    " Hey there! 👋 Nice to meet you. Welcome to your personal AI mate! Feel free to chat and explore with me. Let's dive in and see what we can do together. Just continue the conversation whenever you're ready!";
  return (
    <div className="justify-between flex flex-col h-screen  w-screen">
      <ChatNav />
      <div className="flex flex-1 flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pt-[130px] md:px-[150px] mb-4">
        <SystemChatItem text={text} />
        <SystemChatItem text={"So, How can I help you Today"} />
        <UserChatitem />
        <SystemChatItem text={text} />
        <SystemChatItem text={"So, How can I help you Today"} />
        <UserChatitem />
      </div>
      <div className="shadow-lg shadow-black px-4 pt-4 py-4 sm:mb-0  bg-[#e9f1ff] md:px-[150px]">
        <form className="relative flex">
          <input
            id="userSendMessage"
            type="text"
            placeholder="Write your message prompt!"
            required={true}
            className="w-full  border border-gray-500 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 flex gap-2">
            <button
              id="userSendButton"
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-9 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-300 focus:outline-none"
            >
              <span>Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </form>
        <footer className="w-full px-4 py-2 mt-4 text-center text-gray-500 text-sm">
          <p>
            InnerGlow AI 2024.All rights reserved.Terms of services and Privacy
            policy
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Chat;
