import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .sendForm(
        "Portofolio_Email",
        "template_nuqq9wr",
        form.current,
        "cZAxokqCmFBNFdwxT"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSuccess(true);
          e.target.reset();
          setTimeout(() => setIsSuccess(false), 4000);
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setIsError(true);
          setTimeout(() => setIsError(false), 4000);
        }
      );

    emailjs
      .sendForm(
        "Portofolio_Email",
        "template_u2j35js",
        form.current,
        "cZAxokqCmFBNFdwxT"
      )
      .then((replyResult) => {
        console.log("Auto-reply sent:", replyResult.text);
      })
      .catch((replyError) => {
        console.error("Auto-reply failed:", replyError.text);
      });
  };

  return (
    <div
      id="Contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4 
                 scroll-mt-20 md:scroll-mt-0 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Floating Success/Error Messages */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 rounded-lg 
                       bg-green-500 px-6 py-3 text-white shadow-xl text-center z-50"
          >
            ✅ Message sent! A confirmation email was also sent to you.
          </motion.div>
        )}
        {isError && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 rounded-lg 
                       bg-red-500 px-6 py-3 text-white shadow-xl text-center z-50"
          >
            ❌ Failed to send. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-light text-purple-600">
        Get in Touch
      </h1>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full max-w-2xl flex-col gap-6 rounded-lg p-6 
                   shadow-lg dark:shadow-gray-800 drop-shadow-[0_-4px_6px_rgba(245,245,245,0.5)] dark:drop-shadow-[0_-4px_6px_rgba(0,0,0,0.3)]
                   bg-white dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            name="user_name"
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="user_email"
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            required
            name="user_phone"
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <textarea
          placeholder="Your Message"
          name="message"
          required
          className="h-40 w-full resize-none rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                     transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                     focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="rounded-lg border-2 border-purple-400 bg-purple-500 px-6 py-3 font-semibold text-white
                     transition-all duration-200 hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-800"
        >
          Send Message
        </button>
      </form>

      {/* Disclaimer Section */}
      <div className="flex w-full max-w-2xl flex-col items-center justify-center p-6 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500">
        <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-4" />
        <p>You can also reach me directly at:</p>
        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
          Email: razvanpelinari@gmail.com
        </p>
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          Phone: +40729244375
        </p>
      </div>
    </div>
  );
};

export default Contact;
