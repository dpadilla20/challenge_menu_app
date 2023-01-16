/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/app/modules/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "i-content": "url('/images/bg-content.jpg')",
      },
    },
  },
  plugins: [],
};
