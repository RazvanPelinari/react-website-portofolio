import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateMessage = import.meta.env.VITE_EMAILJS_TEMPLATE_MESSAGE;
    const templateAutoReply = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Send the main message
      await emailjs.sendForm(
        serviceId,
        templateMessage,
        form.current,
        publicKey
      );

      // Send the auto-reply
      await emailjs.sendForm(
        serviceId,
        templateAutoReply,
        form.current,
        publicKey
      );

      setStatus("success");
      form.current.reset();

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div
      id="Contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 p-4
                 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Floating Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 rounded-lg bg-green-500 
                       px-6 py-3 text-white shadow-xl text-center z-50"
          >
            ✅ Message sent successfully! A confirmation email has been sent to
            you.
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 rounded-lg bg-red-500 
                       px-6 py-3 text-white shadow-xl text-center z-50"
          >
            ❌ Failed to send. Please try again later.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title */}
      <h1 className="text-center text-5xl md:text-6xl font-light text-purple-600">
        Get in Touch
      </h1>

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-full max-w-2xl flex-col gap-6 rounded-lg p-6
                   shadow-lg dark:shadow-gray-800 bg-white dark:bg-gray-900
                   transition-colors duration-500"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Your Phone Number"
            required
            className="rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                       transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                       focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="h-40 w-full resize-none rounded-lg border-2 border-purple-400 px-4 py-3 text-lg outline-none
                     transition-all duration-200 hover:bg-purple-100 dark:hover:bg-purple-800
                     focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
        ></textarea>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-lg border-2 border-purple-400 px-6 py-3 font-semibold text-white transition-all duration-200 
            ${
              status === "sending"
                ? "bg-purple-300 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600 dark:bg-purple-700 dark:hover:bg-purple-800"
            }`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Contact Info */}
      <div className="flex w-full max-w-2xl flex-col items-center justify-center p-6 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors duration-500">
        <hr className="w-full border-t border-gray-300 dark:border-gray-700 mb-4" />
        <p>You can also reach me directly at:</p>
        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
          Email: razvanpelinari@gmail.com
        </p>
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          Phone: +40 729 244 375
        </p>
      </div>
    </div>
  );
};

export default Contact;
