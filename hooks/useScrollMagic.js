import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export default function useScrollMagic() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll(".scroll-anim").forEach((el) => {
      new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.8,
        reverse: true, // allow toggle on exit
      })
        .on("enter", () => {
          el.classList.remove("exiting");
          el.classList.add("visible");
        })
        .on("leave", () => {
          el.classList.remove("visible");
          el.classList.add("exiting"); // animate exit smoothly
        })
        .addTo(controller);
    });

    return () => controller.destroy(true);
  }, []);
}
