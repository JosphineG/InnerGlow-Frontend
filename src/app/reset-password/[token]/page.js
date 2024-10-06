"use client";
import { useEffect, useState } from "react";
import PasswordReset from "../../components/PasswordReset";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
export default function ExampleClientComponent() {
  const { token } = useParams();
const [email, setEmail] = useState("");
  // console.log(token);
  const [error, setError] = useState(false);
  useEffect(() => {
    HandleFetchUser();
  }, []);
  const HandleFetchUser = async (params) => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password?token=${token}`
      );
      const response = await data?.json();
      if (response.email) {
        toast.success("Verified");
        setEmail(response?.email);
      }
      if (response.status === 400) {
        toast.error(response?.message);
        window.location.replace("/not-found");
      }
      // console.log("from dara", response);
      return response; // Return the response data if needed
    } catch (error) {
      setError((prev) => !prev); // Set error state
      console.error("Error fetching user:", error);
      throw error; // Rethrow the error to handle it in the calling code if needed
    }
  };

  return (
    <div className="">
      {error && <div>error</div>}
      <Toaster />
      <PasswordReset token={token} email={email } />
    </div>
  );
}
