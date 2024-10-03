
import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-title" />
      <div className="shimmer-image" />
      <div className="shimmer-text" />
      <style jsx>{`
        .shimmer-wrapper {
          padding: 20px;
          background: #f0f0f0;
        }
        .shimmer-title {
          height: 30px;
          width: 80%;
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          animation: shimmer 1.5s infinite;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .shimmer-image {
          height: 200px;
          width: 100%;
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          animation: shimmer 1.5s infinite;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .shimmer-text {
          height: 20px;
          width: 100%;
          background: linear-gradient(
            90deg,
            #f0f0f0 25%,
            #e0e0e0 50%,
            #f0f0f0 75%
          );
          animation: shimmer 1.5s infinite;
          border-radius: 5px;
        }
        @keyframes shimmer {
          0% {
            background-position: -100px 0;
          }
          100% {
            background-position: 100px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Shimmer;
