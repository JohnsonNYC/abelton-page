/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "abelton-yellow": "#fbffa7",
        "abelton-lightblue": "#b1c5ff",
        "abelton-green": "#b6ffc0",
        "abelton-red": "#ff764d",
        "abelton-purple": "#d5b3ff",
        "abelton-blue": "#0000ff",
      },
      fontFamily: {
        nunito: "nunito, Times New Roman, serif",
      },
    },
  },
  plugins: [],
};
