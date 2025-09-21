import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const sections = document.querySelectorAll(".scroll-anim");

    sections.forEach((section, i) => {
      if (i < sections.length - 1) {
        const nextSection = sections[i + 1];

        const tl = gsap.timeline();
        tl.to(
          section,
          {
            opacity: 0,
            y: -50, // slide up while fading
            ease: "none",
          },
          0
        ).fromTo(
          nextSection,
          { opacity: 0, y: 50 }, // start slightly below, hidden
          { opacity: 1, y: 0, ease: "none" }, // fade + slide into place
          0
        );

        new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 0,
          duration: "100%", // effect lasts for viewport height
        })
          .setTween(tl)
          .addTo(controller);
      }
    });

    return () => controller.destroy(true);
  }, []);
}
