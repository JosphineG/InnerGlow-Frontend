
"use client";
import React, { createContext, useContext, useState } from "react";

// Create a Context for the language
const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext); // Custom hook to access the language
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(""); // Default to english

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
