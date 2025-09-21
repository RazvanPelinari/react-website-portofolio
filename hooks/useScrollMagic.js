import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll(".scroll-anim").forEach((el) => {
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.8,
        duration: "80%",
        reverse: true, // 👈 allow toggle when leaving
      })
        .setClassToggle(el, "visible") // adds AND removes
        .addTo(controller);
    });

    return () => controller.destroy(true);
  }, []);
}
