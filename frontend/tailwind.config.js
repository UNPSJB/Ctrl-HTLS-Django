/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        navBar: ["Sora"],
        navSitiosFrecuentes: ["League Spartan"],
        hoteles: ["Noto Sans"]
      },
      colors: {
        NavBar: 'rgb(2, 3, 33)',
        SitiosFrecuentes:  'rgb(16, 17, 45)',
        Letras: 'rgb(203, 214, 255)',
        FrecuentesItems: 'rgb(45, 41, 73)',
        FondoHotel: 'rgb(45, 41, 73)',
        AgregarHotel: 'rgb(220, 203, 255)',
        LetraAgregarHotel: 'rgb(16, 17, 45)',
        PlusButton: 'rgb(122, 92, 250)',
        ModificarToggle: 'rgb(122, 92, 250)',
        DescripcionHotel: 'rgb(0, 0, 0)'
      },
    },
  },
  plugins: [],
};
