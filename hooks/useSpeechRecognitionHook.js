import { useState, useEffect } from "react";

let recognition = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new window.webkitSpeechRecognition();
  recognition.continous = true;
  recognition.lang = "en-US";
}

const useSpeechRecognition = (onStopListening) => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!recognition) return;

    const unSubscribe = (recognition.onresult = (event) => {
      setText(event?.results[0][0]?.transcript);
      setIsListening(false);
      recognition.stop();
      stopListening();
      if (onStopListening) {
        onStopListening(event?.results[0][0]?.transcript); // Trigger callback on stop
      }
    });

    return unSubscribe;
  }, []);

  const startListening = () => {
    setText("");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recognition,
  };
};

export default useSpeechRecognition;
