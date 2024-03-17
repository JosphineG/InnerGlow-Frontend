import React from "react";
import Markdown from "react-markdown";
function SystemChatItem({ text }) {
  return (
    <div className="chat-message" style={{ whiteSpace: "pre-line" }}>
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 	mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:max-w-[700px] w-full">
              <Markdown>{text}</Markdown>
            </span>
          </div>
        </div>
        {/* <img
          src={avatar}
          alt="My profile"
          className="w-12 h-12 rounded-full order-1"
        /> */}
      </div>
    </div>
  );
}

export default SystemChatItem;
