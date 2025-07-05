"use client";

import { TypewriterProps } from "@/types/ComponentProps";
import { useEffect, useState } from "react";

const Typewriter: React.FC<TypewriterProps> = ({
  sentences,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    } else {
      if (text.length < currentSentence.length) {
        timeoutId = setTimeout(() => {
          setText(currentSentence.slice(0, text.length +1))
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
            setIsDeleting(true)
        }, pauseTime)
      }
    }

    return () => clearTimeout(timeoutId);
  }, [
    text,
    isDeleting,
    sentences,
    sentenceIndex,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return <span className={className}>{text}<span className="animate-caret-blink font-extrabold">|</span></span>;
};

export default Typewriter;
