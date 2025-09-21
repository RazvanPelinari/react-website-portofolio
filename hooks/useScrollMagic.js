import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const sections = document.querySelectorAll(".scroll-anim");

    sections.forEach((section, i) => {
      // Skip last section (nothing to fade into)
      if (i < sections.length - 1) {
        const nextSection = sections[i + 1];

        // Timeline for cross-fade
        const tl = gsap.timeline();
        tl.fromTo(
          section,
          { opacity: 1 },
          { opacity: 0, ease: "none" },
          0
        ).fromTo(nextSection, { opacity: 0 }, { opacity: 1, ease: "none" }, 0);

        new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 0,
          duration: "100%", // one viewport height
        })
          .setTween(tl)
          .addTo(controller);
      }
    });

    return () => controller.destroy(true);
  }, []);
}
