import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/productsData";

const WomenPage = ({ onAddToCart }) => {
  const    womenProducts= products.filter(
    (product) => product.category === "women"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Îmbrăcăminte Femei
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {  womenProducts.map((product) => (
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

export default WomenPage;
