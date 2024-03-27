import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";
function SystemChatItem({ text }) {
  return (
    <div className="chat-message" style={{ whiteSpace: "pre-line" }}>
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 	mx-2 order-2 items-start">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 md:max-w-[500px] w-full">
              <Markdown>{text}</Markdown>
            </span>
          </div>
        </div>
        <Image
          src="/image-removebg-preview.png"
          alt="anxiety image"
          width={80}
          height={80}
          className="object-cover  object-top rounded-2xl"
        />
      </div>
    </div>
  );
}

export default SystemChatItem;
