"use client";
import React, { useState, useEffect, useRef } from "react";
import ChatNav from "./ChatNav";
import SystemChatItem from "./SystemChatItem";
import UserChatitem from "./UserChatitem";
import useAuthToken from "../../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Login from "../components/ChatLogin";
import { FaArrowDown, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa"; // Import microphone icons
import { usePathname, useParams, useRouter } from "next/navigation";
import useSpeechRecognition from "../../../hooks/useSpeechRecognitionHook"; // Import custom hook

function Chat() {
  const [prompt, setPrompt] = useState("");
  const scrollRef = useRef(null);
  const promptRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);
  const { getItem, clearAuthToken } = useAuthToken();
  const { token, chatid } = getItem();
  const [dataItem, setData] = useState();
  const [text, setText] = useState("");
  const pathname = usePathname();
  const { id } = useParams();
  const router = useRouter();

  // Function to submit form programmatically
  const handleSubmit = async (e) => {
    e?.preventDefault();
    const notification = toast.loading("Thinking...");

    if (!prompt || prompt.trim() === "") {
      toast.error("Prompt should not be empty!", { id: notification });
      return;
    }
    if (prompt.length < 4) {
      toast.error("Prompt should be greater than 4 characters!", {
        id: notification,
      });
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chat/${chatid}/geminichat`,
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
        toast.success("RafikiWellness AI has responded!", { id: notification });
        const data = await response.json();
        setChatMessages([
          ...chatMessages,
          { role: "user", parts: prompt },
          { role: "model", parts: data },
        ]);
        setPrompt(""); // Clear prompt after submission
      } else {
        toast.error("Failed to send prompt", { id: notification });
        throw new Error("Failed to send prompt");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, { id: notification });
    }
  };

  // Speech Recognition
  const {
    text: speechText,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition((recognizedText) => {
    if (!recognizedText) return;
    // setText();
    // This will be triggered when the user stops speaking
    setPrompt((prevPrompt) => (prevPrompt + " " + recognizedText).trim());
    // Automatically submit the form when speech stops
  });

  useEffect(() => {
    if (speechText) {
      setPrompt((prevPrompt) => prevPrompt + " " + speechText); // Append speech to existing text
    }
  }, [speechText]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  useEffect(() => {
    const getUser = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const { userProfile } = await response.json();
          setData(userProfile);
        }
        if (response.status === 401) {
          toast.error("Your session expired, you be logged out...");
          clearAuthToken();
          router.push("/chatlogin");
          return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const fetchChatMessages = async () => {
      if (!chatid || chatid == null) {
        return;
      }
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/chat/${chatid}/messages`
        );
        if (response.ok) {
          const data = await response.json();
          setChatMessages(data.messages);
        } else {
          throw new Error("Failed to fetch chat messages");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchChatMessages();
  }, [chatid]);

  useEffect(() => {
    adjustTextAreaHeight();
  }, [prompt]);

  const adjustTextAreaHeight = (maxHeight = 200) => {
    const textArea = promptRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      if (textArea.scrollHeight > maxHeight) {
        textArea.style.height = `${maxHeight}px`;
      } else {
        textArea.style.height = `${textArea.scrollHeight}px`;
      }
    }
  };

  return (
    <>
      <Toaster />
      {token !== "undefined" && token !== null && token !== undefined ? (
        <div className="justify-between flex flex-col h-screen w-screen">
          <ChatNav name={dataItem?.username} />
          <div className="flex flex-1 flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch pt-[130px] md:px-[150px] mb-4">
            {chatMessages.length < 1 ? (
              <div>
                <SystemChatItem
                  text={
                    "Hello! Welcome to our mental health support chat. I am a mindful assistant here to listen and provide support on any mental health concerns you may have. Please feel free to share your thoughts and experiences, and I will do my best to assist you on your journey towards well-being."
                  }
                />
                <FaArrowDown className="w-8 h-8 animate-bounce font-bold absolute left-[50%] top-[70%]" />
              </div>
            ) : null}
            {chatMessages.map((message, index) => {
              return message.role === "user" ? (
                <UserChatitem
                  key={index}
                  text={message?.parts}
                  name={dataItem?.username}
                />
              ) : (
                <SystemChatItem key={index} text={message?.parts} />
              );
            })}
            <div ref={scrollRef} />
          </div>
          <div className="shadow-lg shadow-black px-4 pt-4 py-4 sm:mb-0 bg-[#e9f1ff] md:px-[150px]">
            <form className="relative flex" onSubmit={handleSubmit}>
              <textarea
                ref={promptRef}
                wrap="true"
                onChange={(e) => {
                  setPrompt(e.target.value);
                  adjustTextAreaHeight();
                }}
                value={prompt} // Ensure it's never undefined, fallback to empty string
                id="userSendMessage"
                type="text"
                placeholder="Write your message prompt!"
                required={true}
                className="w-full border border-gray-500 focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 px-4 bg-gray-200 rounded-xl py-3  md:pr-[120px] pr-[60px]"
              ></textarea>
              <div className="absolute right-0 items-center inset-y-0 flex gap-2">
                {hasRecognitionSupport && (
                  <button
                    type="button"
                    onClick={
                      isListening
                        ? { stopListening, handleSubmit }
                        : startListening
                    }
                    className={`bg-indigo-500 rounded-full p-3 ${
                      isListening ? "animate-pulse" : ""
                    }`}
                    title={
                      isListening
                        ? "Listening... click to stop"
                        : "Start Voice Input"
                    }
                  >
                    {!isListening ? (
                      <FaMicrophoneSlash className="text-white w-5 h-5" />
                    ) : (
                      <FaMicrophone className="text-white w-5 h-5" />
                    )}
                  </button>
                )}
                <button
                  type="submit"
                  id="userSendButton"
                  className={`md:inline-flex items-center justify-center rounded-lg px-9 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:opacity-70 focus:outline-none ${
                    prompt.trim().length >= 2
                      ? "bg-gradient-to-r from-blue-500 to-violet-500"
                      : "bg-gray-500"
                  } mr-2 hidden`}
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
                <button
                  type="submit"
                  id="userSendButton"
                  className={`inline-flex items-center justify-center rounded-lg px-2 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:opacity-70 focus:outline-none ${
                    prompt.trim().length >= 2
                      ? "bg-gradient-to-r from-blue-500 to-violet-500"
                      : "bg-gray-500"
                  }  mr-2 md:hidden`}
                >
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
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Chat;
