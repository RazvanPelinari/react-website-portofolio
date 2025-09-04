import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import ContactPage from "./pages/ContactPage";
import ShoppingCart from "./components/ShoppingCart";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({
    message: "",
    isVisible: false,
  });

  const [transitionState, setTransitionState] = useState("enter");
  const [pageToRender, setPageToRender] = useState("home");

  const handlePageChange = (page) => {
    if (page === currentPage) return;

    setTransitionState("exit");

    setTimeout(() => {
      setPageToRender(page);
      setCurrentPage(page);
    }, 400);
  };

  useEffect(() => {
    setTransitionState("enter");
  }, [pageToRender]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Find the existing item based on both ID and selectedSize
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setNotification({ message: "Product added to cart!", isVisible: true });
    setTimeout(() => {
      setNotification({ message: "", isVisible: false });
    }, 3000);
  };

  const handleUpdateCartItem = (id, quantity, selectedSize) => {
    if (quantity <= 0) {
      setCart((prevCart) =>
        prevCart.filter(
          (item) => !(item.id === id && item.selectedSize === selectedSize)
        )
      );
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.selectedSize === selectedSize
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const renderPage = (page) => {
    switch (page) {
      case "home":
        return (
          <HomePage
            onAddToCart={handleAddToCart}
            setCurrentPage={handlePageChange}
          />
        );
      case "men":
        return <MenPage onAddToCart={handleAddToCart} />;
      case "women":
        return <WomenPage onAddToCart={handleAddToCart} />;
      case "contact":
        return <ContactPage />;
      case "cart":
        return (
          <ShoppingCart cart={cart} onUpdateCartItem={handleUpdateCartItem} />
        );
      default:
        return (
          <HomePage
            onAddToCart={handleAddToCart}
            setCurrentPage={handlePageChange}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header
          setCurrentPage={handlePageChange}
          cartItemCount={cart.length}
          currentPage={currentPage}
        />
        <div className="flex-grow">
          <div
            className={`page-transition
              ${
                transitionState === "exit"
                  ? "page-exit-active"
                  : "page-enter-active"
              }
            `}
          >
            {renderPage(pageToRender)}
          </div>
        </div>
        <Footer />
        <Notification
          message={notification.message}
          isVisible={notification.isVisible}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;
