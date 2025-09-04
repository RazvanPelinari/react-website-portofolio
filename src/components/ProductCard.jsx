import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import "./RGBBorder.css";

const ProductCard = ({ product, onAddToCart }) => {
  const { t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null
  );

  const handleAddToCartClick = () => {
    onAddToCart({ ...product, selectedSize });
  };

  return (
    <div className="themed-card transform hover:scale-105 hover:shadow-2xl rounded-2xl shadow-lg">
      {/* Product Image */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={product.image}
          alt={t(product.name)}
          className="themed-image"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
          {t(product.name)}
        </h3>
        <p className="text-xl font-bold text-gray-800 mb-4">
          {product.price.toFixed(2)} Lei
        </p>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex justify-center space-x-2 mb-4">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`size-btn ${selectedSize === size ? "active" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCartClick}
          className="primary-btn font-bold py-3 px-8 transition-colors duration-300 w-full"
        >
          {t("addToCart")}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
