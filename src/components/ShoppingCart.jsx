import React from "react";
import { useLanguage } from "./LanguageContext";

const ShoppingCart = ({ cart, onUpdateCartItem }) => {
  const { t } = useLanguage();

  const handleUpdate = (id, selectedSize, quantity) => {
    onUpdateCartItem(id, quantity, selectedSize);
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">{t("cartTitle")}</h1>
      {cart.length === 0 ? (
        <p className="text-center text-muted text-lg">{t("yourCartIsEmpty")}</p>
      ) : (
        <>
          <div className="bg-surface rounded-lg shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-700">
              {cart.map((item) => (
                <li
                  key={`${item.id}-${item.selectedSize || "default"}`}
                  className="p-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={t(item.name)}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{t(item.name)}</h3>
                      <p className="text-muted">{item.price.toFixed(2)} Lei</p>
                      {item.selectedSize && (
                        <p className="text-sm text-muted mt-1">
                          {t("sizeLabel")}: {item.selectedSize}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-muted font-medium">{t("quantity")}:</p>
                    <input
                      type="number"
                      value={item.quantity}
                      min="0"
                      onChange={(e) =>
                        handleUpdate(
                          item.id,
                          item.selectedSize,
                          parseInt(e.target.value || 0)
                        )
                      }
                      className="w-16 text-center border rounded-md bg-transparent text-white"
                    />
                    <p className="font-bold text-lg">
                      {(item.price * item.quantity).toFixed(2)} Lei
                    </p>
                    <button
                      onClick={() =>
                        handleUpdate(item.id, item.selectedSize, 0)
                      }
                      className="text-danger hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-end items-center">
            <h2 className="text-2xl font-bold mr-4">
              Total: {calculateTotal()} Lei
            </h2>
            <button className="primary-btn">{t("checkout")}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
