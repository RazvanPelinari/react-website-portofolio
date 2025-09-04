// src/pages/MenPage.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/productsData";

const MenPage = ({ onAddToCart }) => {
  const menProducts = products.filter((product) => product.category === "men");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Îmbrăcăminte Bărbați
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenPage;
