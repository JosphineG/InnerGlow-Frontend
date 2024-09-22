"use client";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { convertDateTime } from "../../../hooks/useDateTime";

function SingleArticle({ article }) {
  const [parse, setParse] = useState(null); // State to hold the parser function

  useEffect(() => {
    const loadParser = async () => {
      const { default: parser } = await import("html-react-parser");
      setParse(() => parser); // Set the parser function in state
    };

    loadParser();
  }, []);

  // Slice the description to show the first 100 characters and add ellipsis
  const truncatedDescription =
    article?.description.length > 100
      ? article.description.slice(0, 80) + "..."
      : article.description;

  return (
    <div className="bg-white rounded-lg w-full shadow-sm shadow-black h-[340px hover:scale-105">
      <div className="bg-gray-300 h-[180px]">
        <img
          src={article?.image}
          alt="image"
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <div className="w-full px-2 flex justify-between gap-2">
        <div className="flex gap-2 pt-2">
          <FaUser className="w-8 h-8 text-gray-500" />
          <p className="text-blue-500 ">
            by{" "}
            <span className="capitalize font-semibold">
              {article?.createdBy}
            </span>
          </p>
        </div>
        <div>
          <p className="text-blue-500 font-semibold pt-2 ">{article?.title}</p>
          <p className="text-sm font-semibold">
            {convertDateTime(article?.time)}
          </p>
        </div>
      </div>
      <div className="px-2 py-2">
        <p>
          {/* Use html-react-parser to safely parse the truncated HTML content */}
          {parse ? (
            <span>{parse(truncatedDescription)}</span>
          ) : (
            <span>{truncatedDescription}</span>
          )}{" "}
          <span className="text-blue-500 font-semibold">
            <a href={`/community/articles/${article?._id}`}>Read more</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SingleArticle;
