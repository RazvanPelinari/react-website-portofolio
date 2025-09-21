import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll(".scroll-anim").forEach((el) => {
      // Each section gets its own scroll-linked tween
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0, // start when section hits top
        duration: "100%", // effect lasts for full viewport height
      })
        .setTween(
          TweenMax.fromTo(
            el,
            1,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -50, ease: "linear" } // fade + slight slide up
          )
        )
        .addTo(controller);
    });

    return () => controller.destroy(true);
  }, []);
}
