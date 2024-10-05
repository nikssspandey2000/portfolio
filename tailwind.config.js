/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ashwin: "url(/assets/images/me.png)",
        leaf: "url(/assets/leaf.avif)",
      },
      backgroundColor: {
        primary: "#d3be694f", 
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
  
      },
      animation: {
        ltr: "ltr 0.5s linear",
        rtl: "rtl 0.5s linear",

        ltr1: "ltr 0.2s ease-in-out",
        ltr2: "ltr 0.5s ease-in-out",
        ltr3: "ltr 0.8s ease-in-out",
        ltr4: "ltr 1s ease-in-out",
        ltr5: "ltr 1.3s ease-in-out",

        rtl1: "rtl 0.2s ease-in-out",
        rtl2: "rtl 0.5s ease-in-out",
        rtl3: "rtl 0.8s ease-in-out",
        rtl4: "rtl 1s ease-in-out",
        rtl5: "rtl 1.3s ease-in-out",

        toTop1: "toTop 0.2s ease-in-out",
        toTop2: "toTop 0.5s ease-in-out",
        toTop3: "toTop 0.8s ease-in-out",
        toTop4: "toTop 1s ease-in-out",
        toTop5: "toTop 1.3s ease-in-out",

        fadeIn1: "fadeIn 0.2s ease-in-out",
        fadeIn2: "fadeIn 0.5s ease-in-out",
        fadeIn3: "fadeIn 0.8s ease-in-out",
        fadeIn4: "fadeIn 1s ease-in-out",
        fadeIn5: "fadeIn 1.3s ease-in-out",

      }
    },
  },
  plugins: [],
};
