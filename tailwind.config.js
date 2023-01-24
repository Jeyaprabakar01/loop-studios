/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-hero": "url('/src/assets/img/image-hero.jpg')",
        "mobile-image-hero": "url('/src/assets/img/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
