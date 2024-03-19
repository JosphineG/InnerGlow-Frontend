import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function SuccessPasswordReset({ email }) {
  return (
    <div className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl md:max-w-[450px] justify-center flex flex-col px-md">
      <div className="w-full text-center justify-center items-center flex flex-col">
        <MdOutlineMarkEmailRead size={56} className="text-blue-500" />
        <p className="text-2xl tracking-widest font-bold"> Check your email</p>
        <p className="my-5 md:my-7 px-5">
          Weve sent an instructions on how to reset your password to{" "}
          <span className="font-semibold text-lg">{email}</span>
        </p>
      </div>
    </div>
  );
}

export default SuccessPasswordReset;
