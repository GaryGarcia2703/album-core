const flowbite = require("flowbite-react/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Esta línea es crítica para que carguen los estilos del Sidebar y componentes:
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        aero: {
          blue: "#4FA8E0",
          skyLight: "#BEE6FA",
          glass: "rgba(255, 255, 255, 0.25)",
        },
      },
      backgroundImage: {
        "aero-button": "linear-gradient(180deg, #EAF6FF 0%, #9FD3F5 45%, #4FA8E0 55%, #2E86C1 100%)",
        "aero-glass": "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)",
        "aero-panel": "linear-gradient(180deg, #E8F6FF 0%, #C9E9FA 100%)",
      },
      boxShadow: {
        "aero-glow": "0 0 12px rgba(79, 168, 224, 0.55), inset 0 1px 0 rgba(255,255,255,0.6)",
        "aero-inset": "inset 0 1px 2px rgba(255,255,255,0.7), inset 0 -1px 2px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        aero: "14px",
      },
    },
  },
  plugins: [flowbite],
};