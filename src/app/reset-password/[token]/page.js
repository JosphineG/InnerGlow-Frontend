"use client";
import { useEffect, useState } from "react";
import PasswordReset from "../../components/PasswordReset";
import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const {token}= useParams();
  
  console.log(token)
  const [error,setError] = useState(false)
  useEffect(()=>{
    HandleFetchUser()
  },[])
  const HandleFetchUser = async (params) => {
    try {
      const data = await fetch(`https://inner-glow-backend.vercel.app/api/v1/auth/reset-password?token=${token}`);
      const response = await data?.json();
      console.log('from dara',response);
      return response; // Return the response data if needed
    } catch (error) {
      setError(prev => !prev); // Set error state
      console.error('Error fetching user:', error);
      throw error; // Rethrow the error to handle it in the calling code if needed
    }
  };


  return (
    <div className="">
      <PasswordReset token={token} />
    </div>
  );
}
