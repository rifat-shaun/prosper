/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-gliroy)", "sans-serif"],
      },
      boxShadow: {
        "bottom-shadow": "0px 8px 24px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        primary: {
          0: "#F5FCFF",
          900: "#003366",
        },
        secondary: {
          900: "#E17A3A",
        },
        brown: "#3E3E3E",
        red: "#FD7410",
        "red-rgba-5": "rgba(253, 116, 16, 0.05)",
        "red-rgba-50": "rgba(253, 116, 16, 0.5)",
        beige: "#FEEEE299",
        "beige-rgba": "rgba(254, 238, 226, 0.6)",
        "beige-rgba-30": "rgba(254, 238, 226, 0.3)",
        "light-beige": "#FFE9D9",
        "gray-blue": "#5B97B0",
        "gray-blue-rgba": "rgba(91, 151, 176, 0.1)",
        "white-gray": "rgba(201, 201, 201, 1)",
        "light-gray": "#5F5F5F",
        disabled: "rgba(0, 0, 0, 0.26)",
        "light-pink": "#FEF5EE",
        "blue-white": "#C5E4F1",
        "purple-gray": "#306479",
      },
      transitionProperty: {
        width: "width",
        "grid-rows": "grid-template-rows",
        appear: "transform, opacity",
      },
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
