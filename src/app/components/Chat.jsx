"use client";
import React, { useState, useEffect } from "react";
import ChatNav from "./ChatNav";
import SystemChatItem from "./SystemChatItem";
import UserChatitem from "./UserChatitem";
import useAuthToken from "../../../hooks/useAuth";
import Login from "../components/ChatLogin"
import toast, { Toaster } from "react-hot-toast";
function Chat() {
  const [prompt, setPrompt] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const { getItem } = useAuthToken();
  const { token, chatid } = getItem();

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/v1/chat/${chatid}/messages`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.messages);
          setChatMessages(data.messages);
        } else {
          throw new Error("Failed to fetch chat messages");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/v1/chat/${chatid}/geminichat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setChatMessages([
          ...chatMessages,
          { role: "user", parts: prompt },
          { role: "model", parts: data },
        ]);
        setPrompt(""); // Clear prompt after submission
      } else {
        throw new Error("Failed to send prompt");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      {token !== "undefined" && token !== null ? (
        <div className="justify-between flex flex-col h-screen  w-screen">
          <ChatNav />
          <div className="flex flex-1 flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pt-[130px] md:px-[150px] mb-4">
            {chatMessages.map((message, index) => {
              return message.role === "user" ? (
                <UserChatitem key={index} text={message.parts} />
              ) : (
                <SystemChatItem key={index} text={message.parts} />
              );
            })}
          </div>
          <div className="shadow-lg shadow-black px-4 pt-4 py-4 sm:mb-0  bg-[#e9f1ff] md:px-[150px]">
            <form className="relative flex" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                id="userSendMessage"
                type="text"
                placeholder="Write your message prompt!"
                required={true}
                className="w-full  border border-gray-500 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
              />
              <div className="absolute right-0 items-center inset-y-0 flex gap-2">
                <button
                  type="submit"
                  id="userSendButton"
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
                InnerGlow AI 2024.All rights reserved.Terms of services and
                Privacy policy
              </p>
            </footer>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Chat;

