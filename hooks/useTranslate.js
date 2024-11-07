"use client";
import { useState, useEffect } from "react";

const useTranslate = (text, targetLanguage) => {
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const translateText = async () => {
      const url = `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=en&to=${targetLanguage}&query=${encodeURIComponent(
        text
      )}`;
      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_API_RAPIDAPI_KEY,
          "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translate: "rapidapi",
        }),
      };

      try {
        const response = await fetch(url, options);
        if (response.ok) {
          const result = await response.json();
          setTranslatedText(result.translation);
        } else {
          console.error("Translation request failed:", response.statusText);
        }
      } catch (error) {
        console.error("Translation error:", error);
      }
    };

    if (text) {
      translateText();
    }
  }, [text, targetLanguage]);

  return translatedText;
};

export default useTranslate;
