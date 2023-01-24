/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-image-hero": "url('/src/assets/img/mobile/image-hero.jpg')",
        "image-hero": "url('/src/assets/img/image-hero.jpg')",

        "img0-sm": "url('/src/assets/img/mobile/image-deep-earth.jpg')",
        "img1-sm": "url('/src/assets/img/mobile/image-night-arcade.jpg')",
        "img2-sm": "url('/src/assets/img/mobile/image-soccer-team.jpg')",
        "img3-sm": "url('/src/assets/img/mobile/image-grid.jpg')",
        "img4-sm": "url('/src/assets/img/mobile/image-from-above.jpg')",
        "img5-sm": "url('/src/assets/img/mobile/image-pocket-borealis.jpg')",
        "img6-sm": "url('/src/assets/img/mobile/image-curiosity.jpg')",
        "img7-sm": "url('/src/assets/img/mobile/image-fisheye.jpg')",

        "img0-xl": "url('/src/assets/img/image-deep-earth.jpg')",
        "img1-xl": "url('/src/assets/img/image-night-arcade.jpg')",
        "img2-xl": "url('/src/assets/img/image-soccer-team.jpg')",
        "img3-xl": "url('/src/assets/img/image-grid.jpg')",
        "img4-xl": "url('/src/assets/img/image-from-above.jpg')",
        "img5-xl": "url('/src/assets/img/image-pocket-borealis.jpg')",
        "img6-xl": "url('/src/assets/img/image-curiosity.jpg')",
        "img7-xl": "url('/src/assets/img/image-fisheye.jpg')",
      },
    },
  },
  plugins: [],
};
