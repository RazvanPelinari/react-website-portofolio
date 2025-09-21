import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function useScrollMagic(selector = ".scroll-anim") {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll(selector).forEach((el) => {
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.9, // element enters viewport at 90%
        reverse: false, // animate only once
      })
        .setClassToggle(el, "visible")
        .addTo(controller);
    });

    return () => controller.destroy(true);
  }, [selector]);
}
