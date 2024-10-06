"use client";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import SuccessPasswordReset from "../components/SuccessPasswordReset";
import ErrorPasswordReset from "../components/ErrorPasswordReset";

function ResetPassword() {
  const [email, setEmail] = useState();
  const [response, setResponse] = useState(false);
  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    // console.log("heyyyy...")
    const notification = toast.loading("Verifying...");
    if (!email) {
      toast.error("email is required", { id: notification });
      return;
    }
    const emailRegex =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!emailRegex.test(email)) {
      toast.error(email + " is invalid email address", { id: notification });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/forget-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );
      if (response.status == 200) {
        toast.success(`change password link sent to the user email ${email}`, {
          id: notification,
        });
        console.log(await response.json());
        setResponse(true);
        console.log("logged in successfully");
      }
      if (response.status !== 200) {
        toast.error(
          "Failed to reset password!!, Email verification failed, !! Invalid Credentials",
          {
            id: notification,
          }
        );
        setResponse(false);
        console.log("Invalid credentials!!", response);
        return;
      }

      // const data = await response.json();
      // console.log(data);
      // window.location.href = `/chat/${chatid}`;
    } catch (error) {
      toast.error("An error occurred while verifying your email", {
        id: notification,
      });
      setResponse(false);
      console.error(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex  w-screen items-center justify-center p-12    h-screen flex-col gap-12">
        {response ? (
          <SuccessPasswordReset email={email} />
        ) : (
          <>
            {/* {!response && <ErrorPasswordReset />} */}
            <form
              onSubmit={handleSubmitEmail}
              className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl md:min-w-[350px]  justify-center flex flex-col px-md"
            >
              <p className="text-blue-500 font-bold text-xl tracking-widest">
                Forgot your Password?
              </p>
              <p className="my-5 md:my-7">
                Your password will be reset by email.
              </p>
              <div className="flex flex-col mb-1">
                <label
                  htmlFor="email"
                  className="text-sm text-left text-gray-900 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative block w-full py-2 px-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500
                 focus:border-indigo-500 focus:z-10 small:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
              <input
                className="w-full bg-blue-500 py-2 rounded-md text-white"
                type="submit"
                value="Send reset link"
              />
              <a href="" className="text-blue-500 w-full text-center mt-3">
                Back to login
              </a>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default ResetPassword;
