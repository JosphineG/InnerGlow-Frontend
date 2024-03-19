import React from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

function ErrorPasswordReset() {
  return (
    <div className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl md:max-w-[450px] justify-center flex flex-col px-md">
      <div className="w-full text-center justify-center items-center flex flex-col">
        <MdOutlineReportGmailerrorred size={56} className="text-red-500" />
        <p className="text-2xl tracking-widest font-bold">
          {" "}
          An error occurred.
        </p>
        <p>
          Try again later or{" "}
          <button
            onClick={() => window.location.reload()}
            className="text-blue-500 underline"
          >
            Retry
          </button>
        </p>
      </div>
    </div>
  );
}

export default ErrorPasswordReset;
