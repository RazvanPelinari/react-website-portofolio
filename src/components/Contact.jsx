import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false); // New: Declare state for error message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Portofolio_Email",
        "template_nuqq9wr",
        form.current,
        "cZAxokqCmFBNFdwxT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          e.target.reset();

          // Automatically hide the success message after 4 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setIsError(true); // Correct: Use the new state updater function

          // Automatically hide the error message after 4 seconds
          setTimeout(() => {
            setIsError(false);
          }, 4000);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="flex min-h-screen w-full 
    flex-col items-center justify-center gap-16 p-8"
    >
      <h1 className="text-center text-6xl font-light text-purple-600">
        Get in Touch
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full max-w-md flex-col gap-8 
      rounded-lg p-6 md:max-w-lg lg:max-w-xl"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="user_name"
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
            transition-all duration-200 hover:bg-purple-100 focus:ring-purple-500"
          />

          <input
            type="Email"
            placeholder="Your Email"
            required
            name="user_email"
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
            transition-all duration-200 hover:bg-purple-100 focus:ring-purple-500"
          />
        </div>

        <textarea
          placeholder="Your Message"
          name="message"
          required
          className="h-32 w-full resize-none 
        rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
        transition-all duration-200 hover:bg-purple-100 focus:ring-purple-500"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg border-2 border-purple-400\
         bg-purple-500 px-6 py-3 font-semibold text-white
         transition-all duration-200 hover:bg-purple-600"
        >
          Send Message
        </button>
      </form>

      {/* Animated Success and Error Messages */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg
            bg-green-500 text-white shadow-xl z-50"
          >
            <p>Message Sent Successfully!</p>
          </motion.div>
        )}
        {isError && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg
            bg-red-500 text-white shadow-xl z-50"
          >
            <p>Failed to send message. Please try again.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
