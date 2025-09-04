import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Import your images here. The variable names will hold the correct URL.
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";

const images = [hero1, hero2, hero3, hero4];

const HeroGallery = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play: use a stable interval and functional updates
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-gallery hero-gallery-bg relative w-full h-96 md:h-[600px] overflow-hidden"
    >
      <div className="slides w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className={`
              absolute top-0 left-0 w-full h-full object-contain object-center bg-gray-100 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}
      </div>

      {/* Text Content and Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 z-20">
        <div className="hero-overlay p-6 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            {t("welcomeTitle")}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white">
            {t("welcomeText")}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-4 rounded-full z-30 transition-colors hover:bg-opacity-60"
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-4 rounded-full z-30 transition-colors hover:bg-opacity-60"
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Product Disclaimer */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-xs text-white z-20 animate-fade-in-up">
        <div className="bg-black/40 p-4 rounded-lg">{t("disclaimer")}</div>
      </div>
    </section>
  );
};

export default HeroGallery;
