import React from "react";

const Notification = ({ message, isVisible }) => {
  return (
    <div
      className={`notification ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
};

export default Notification;
