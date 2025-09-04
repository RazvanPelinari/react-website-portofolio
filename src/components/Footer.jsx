import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 ">
      <div className="container mx-auto text-center px-4">
        <div className="footer-links flex justify-center space-x-4 mb-4 text-sm md:text-base">
          <a href="#" className="hover:text-white transition-colors">
            {t("terms")}
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            {t("privacy")}
          </a>
        </div>
        <ul className="social-icons flex justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-2xl hover:text-white transition-colors"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl hover:text-white transition-colors"
              />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl hover:text-white transition-colors"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-2xl hover:text-white transition-colors"
              />
            </a>
          </li>
        </ul>
        <div className="copyright text-sm">{t("copyright")}</div>
      </div>
    </footer>
  );
};

export default Footer;
