import { useEffect, useState } from "react";

export default function Typewriter() {
  const words = [
    "Web Developer",
    "FrontEnd Developer",
    "React Developer",
    "Junior Programmer",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
      <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
        I'm a{" "}
      </span>
      <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent inline-block">
        {text}
        <span className="border-r-2 border-purple-500 animate-pulse ml-1"></span>
      </span>
    </h3>
  );
}
