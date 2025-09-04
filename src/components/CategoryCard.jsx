import React from "react";
import { useLanguage } from "./LanguageContext";

const CategoryCard = ({ titleKey, image, onClick }) => {
  const { t } = useLanguage();

  return (
    <div
      onClick={onClick}
      role="button"
      aria-label={t(titleKey)}
      className="relative w-full h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105"
    >
      {/* use the passed image prop (previous hardcoded path was incorrect) */}
      <img
        src={image}
        alt={t(titleKey)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-4xl font-bold text-white text-center drop-shadow-lg">
          {t(titleKey)}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
