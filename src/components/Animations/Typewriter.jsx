// src/components/Typewriter.jsx
import { useEffect, useState } from "react";

export default function Typewriter() {
  const words = ["Web Developer", "FrontEnd Developer", "Junior Programmer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      // Finished typing a word
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      }

      // Finished deleting
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); // move to next
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <p className="justify-center text-xl font-semibold py-0">
      {text}
      <span className="border-r-2 border-purple-500 animate-pulse ml-1"></span>
    </p>
  );
}
