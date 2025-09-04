import React from "react";
import ProductSection from "../components/ProductSection";
import CategoryCard from "../components/CategoryCard";
import { useLanguage } from "../components/LanguageContext";
import { products } from "../data/productsData";
import WomenGalleryPhoto from "../assets/images/hero1.jpg";
import MenGalleryPhoto from "../assets/images/hero2.jpg";

const HomePage = ({ onAddToCart, setCurrentPage }) => {
  const { t } = useLanguage();

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main>
        {/* Hero removed */}
        <div className="container mx-auto px-4 py-8">
          {/* Welcome and Why Us Section */}
          <section className="text-center py-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">{t("welcomeTitle")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("welcomeText")}
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl text-gray-800 mb-2">🏅</span>
                <p className="font-semibold text-lg">{t("qualityTitle")}</p>
                <p className="text-gray-500 text-center text-sm">
                  {t("qualityText")}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-gray-800 mb-2">🚚</span>
                <p className="font-semibold text-lg">{t("deliveryTitle")}</p>
                <p className="text-gray-500 text-center text-sm">
                  {t("deliveryText")}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl text-gray-800 mb-2">🎁</span>
                <p className="font-semibold text-lg">{t("returnsTitle")}</p>
                <p className="text-gray-500 text-center text-sm">
                  {t("returnsText")}
                </p>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("shopByCategories")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CategoryCard
                titleKey="navMen"
                image={MenGalleryPhoto} // REPLACE WITH YOUR IMAGE PATH
                onClick={() => setCurrentPage("men")}
              />
              <CategoryCard
                titleKey="navWomen"
                image={WomenGalleryPhoto} // REPLACE WITH YOUR IMAGE PATH
                onClick={() => setCurrentPage("women")}
              />
            </div>
          </section>

          {/* Featured Products Section */}
          <ProductSection
            title="featuredProductsTitle"
            products={featuredProducts}
            onAddToCart={onAddToCart}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
