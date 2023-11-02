/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navBar: ["Sora"],
        navSitiosFrecuentes: ["League Spartan"]
      },
      colors: {
        customNavBar: 'rgb(2, 3, 33)',
        customSitiosFrecuentes:  'rgb(16, 17, 45)',
        customLetras: 'rgb(203, 214, 255)',
        customFrecuentesItems: 'rgb(45, 41, 73)'
      },
    },
  },
  plugins: [],
};
