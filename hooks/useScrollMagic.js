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

    // Text motion for Home
    const homeTitle = document.querySelector("#home-title");
    if (homeTitle) {
      new ScrollMagic.Scene({
        triggerElement: "#Home",
        triggerHook: 0,
        duration: "100%", // animation tied to scroll
      })
        .setTween(TweenMax.to(homeTitle, 1, { y: -100, ease: "linear" }))
        .addTo(controller);
    }

    return () => controller.destroy(true);
  }, []);
}
