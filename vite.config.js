import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import allowedHosts from "vite-plugin-allowed-hosts";
import server from "vite-plugin-server";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // This tells Vite the base URL for your project on Netlify
  base: "/",

  // This is the correct syntax for the server configuration
  server: {
    allowedHosts: [
      "waspyportofolio.netlify.app",
      "www.waspyportofolio.netlify.app",
      "devserver-preview--razvanpelinari.netlify.app",
    ],
  },
});

allowedHosts({
  hosts: [
    "waspyportofolio.netlify.app",
    "www.waspyportofolio.netlify.app",
    "devserver-preview--razvanpelinari.netlify.app",
  ],
});
