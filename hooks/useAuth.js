const useAuthToken = () => {
  const getItem = () => {
    if (typeof window !== "undefined") {
      const token = localStorage?.getItem("innerAuth");
      const chatid = localStorage?.getItem("chatId");
      return { token, chatid }; // Return an object with token and chatid
    } else {
      // return { token: null, chatid: null };
    }
    // return { token: null }; // Return null if localStorage is not available
  };

  const clearAuthToken = () => {
    if (typeof window !== "undefined") {
      // Remove the token from local storage
      localStorage.removeItem("innerAuth");
    }
  };

  // Return the token and functions to update and clear it
  return { clearAuthToken, getItem };
};

export default useAuthToken;
