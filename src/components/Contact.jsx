import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // First email: send to you
    emailjs
      .sendForm(
        "Portofolio_Email", // service ID
        "template_nuqq9wr", // template ID for you
        form.current,
        "cZAxokqCmFBNFdwxT" // public key
      )
      .then(
        (result) => {
          console.log("Message sent to me:", result.text);

          // Second email: auto-reply to user
          emailjs
            .sendForm(
              "Portofolio_Email", // same service
              "template_u2j35js", // template ID for auto-reply
              form.current,
              "cZAxokqCmFBNFdwxT"
            )
            .then((replyResult) => {
              console.log("Auto-reply sent:", replyResult.text);
            })
            .catch((replyError) => {
              console.error("Auto-reply failed:", replyError.text);
            });

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
  };

  return (
    <div
      id="Contact"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-8 relative"
    >
      <div className="relative flex flex-col items-center w-full">
        <h1 className="text-center text-5xl md:text-6xl font-light text-purple-600 mb-6">
          Get in Touch
        </h1>

        {/* ✅ Success/Error Messages ABOVE the form */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-6 rounded-lg bg-green-500 px-6 py-3 text-white shadow-xl"
            >
              ✅ Message sent! A confirmation email was also sent to you.
            </motion.div>
          )}
          {isError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-6 rounded-lg bg-red-500 px-6 py-3 text-white shadow-xl"
            >
              ❌ Failed to send. Please try again.
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Form - larger on desktop */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex w-full max-w-2xl flex-col gap-6 rounded-lg p-6 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              name="user_name"
              className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-purple-100 focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              name="user_email"
              className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-purple-100 focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              name="user_phone"
              className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
          transition-all duration-200 hover:bg-purple-100 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            required
            className="h-40 w-full resize-none rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none 
        transition-all duration-200 hover:bg-purple-100 focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="rounded-lg border-2 border-purple-400 bg-purple-500 px-6 py-3 font-semibold text-white
        transition-all duration-200 hover:bg-purple-600 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
