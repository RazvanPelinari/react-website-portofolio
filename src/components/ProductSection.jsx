import React from "react";
import { useLanguage } from "./LanguageContext";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products, onAddToCart }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">{t(title)}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
