// src/hooks/useScrollMagic.js
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Fade-in elements
    document.querySelectorAll(".scroll-anim").forEach((el) => {
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.9,
        reverse: false,
      })
        .setClassToggle(el, "visible")
        .addTo(controller);
    });
  }, []);
}
