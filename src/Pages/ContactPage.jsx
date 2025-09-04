import React, { useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-4">{t("contactTitle")}</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          {t("contactHeroText")}
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Contact Details Section */}
          <div className="md:w-1/2 p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Informații de Contact</h2>
            <p className="text-gray-300 mb-8">{t("contactInfoText")}</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl text-gray-400"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t("phone")}</h3>
                  <p className="text-gray-300">0722 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl text-gray-400"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t("email")}</h3>
                  <p className="text-gray-300">contact@kultur.ro</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-2xl text-gray-400"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t("address")}</h3>
                  <p className="text-gray-300">{t("addressText")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Trimite un Mesaj
            </h2>
            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center font-semibold text-lg">
                {t("success")}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition-shadow"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    {t("messageLabel")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 h-32 transition-shadow"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-gray-600 self-start"
                >
                  {t("submitBtn")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
