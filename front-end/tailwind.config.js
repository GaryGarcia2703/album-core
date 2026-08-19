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
    extend: {},
  },
  plugins: [flowbite],
};