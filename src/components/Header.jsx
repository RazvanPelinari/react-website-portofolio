import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "./LanguageContext";
import logo from "../assets/images/logo.png";

const Header = ({ setCurrentPage, cartItemCount, currentPage }) => {
  const { t, setLanguage, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  const navItems = [
    { page: "home", label: t("navHome") },
    { page: "men", label: t("navMen") },
    { page: "women", label: t("navWomen") },
    { page: "contact", label: t("navContact") },
  ];

  const openMenu = () => {
    setMenuMounted(true);
    // allow next frame so CSS transition can pick up the change
    requestAnimationFrame(() => setIsMenuOpen(true));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // unmount after animation duration
    setTimeout(() => setMenuMounted(false), 320);
  };

  // prevent body scroll while the menu is mounted (during open/close animation too)
  useEffect(() => {
    document.body.style.overflow = menuMounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMounted]);

  // close mobile menu when resizing to desktop to keep state consistent (use closeMenu for animation)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && (isMenuOpen || menuMounted)) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen, menuMounted]);

  return (
    <>
      <header className="header bg-white py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage("home")}
            className="logo flex items-center gap-2 transform transition-transform duration-200 hover:scale-105"
          >
            <img src={logo} alt="Kultur Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-[var(--color-primary)]">
              Kultur
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="nav hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`
                text-lg font-semibold rounded-full p-2 px-4 transition-colors
                ${
                  currentPage === item.page
                    ? "bg-[var(--color-primary)] text-black"
                    : "bg-transparent text-gray-600 hover:bg-gray-300 hover:text-[var(--color-primary)]"
                }
              `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Actions (Cart & Language) */}
          <div className="header-actions flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage("cart")}
              className="cart-icon relative transform transition-transform duration-200 hover:scale-110"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-[var(--color-primary)] text-xl hover:text-[var(--color-secondary)]"
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
            {/* Language Switcher */}
            <div className="language-selector hidden md:flex space-x-2 text-sm">
              <button
                onClick={() => setLanguage("ro")}
                className={`p-1 font-semibold rounded transform transition-transform duration-200 hover:scale-110 hover:bg-gray-100
                ${
                  language === "ro"
                    ? "text-[var(--color-primary)]"
                    : "text-gray-500"
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`p-1 font-semibold rounded transform transition-transform duration-200 hover:scale-110 hover:bg-gray-100
                ${
                  language === "en"
                    ? "text-[var(--color-primary)]"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-[var(--color-primary)] text-xl"
              onClick={openMenu}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay + side panel: keep mounted during animation */}
      {menuMounted && (
        <div
          className={`mobile-menu-wrapper fixed inset-0 z-60 md:hidden ${
            isMenuOpen ? "open" : "closing"
          }`}
          role="dialog"
          aria-label="Mobile menu"
        >
          {/* backdrop */}
          <button
            onClick={closeMenu}
            className={`mobile-menu-backdrop absolute inset-0 ${
              isMenuOpen ? "open" : ""
            }`}
            aria-hidden="true"
            tabIndex={-1}
          />

          {/* side panel */}
          <aside
            aria-hidden={!isMenuOpen}
            className={`mobile-side-panel fixed top-0 right-0 h-full w-64 transition-transform duration-300 ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-xl font-bold text-[var(--color-primary)]">
                Menu
              </span>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-800 text-2xl"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    closeMenu();
                  }}
                  className={`text-xl font-semibold text-left transition-colors ${
                    currentPage === item.page
                      ? "text-[var(--color-primary)]"
                      : "text-gray-600 hover:text-[var(--color-secondary)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex justify-center space-x-4 p-6 border-t">
              {/* language buttons */}
              <button
                onClick={() => setLanguage("ro")}
                className={`p-1 font-semibold transform transition-transform duration-200 hover:scale-110 ${
                  language === "ro"
                    ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                    : "text-gray-500"
                }`}
              >
                RO
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`p-1 font-semibold transform transition-transform duration-200 hover:scale-110 ${
                  language === "en"
                    ? "text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
