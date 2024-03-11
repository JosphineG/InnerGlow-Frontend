import { useState } from "react";

const useAuthToken = () => {
  const getItem = () => {
    const token = localStorage.getItem("innerAuth");

    return { token };
  };

  const clearAuthToken = () => {
    // Remove the token from local storage
    localStorage.removeItem("innerAuth");
  };

  // Return the token and functions to update and clear it
  return { clearAuthToken, getItem };
};

export default useAuthToken;
