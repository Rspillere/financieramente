/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'light',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/react-responsive-carousel/lib/styles/carousel.min.css",
  ],
  theme: {
    extend: {
      spacing: {
        '56.25%': '56.25%',
      },
      keyframes: {
        fadeIn: {
					from: { opacity: 0, transform: 'translateY(20px)'},
					to: { opacity: 1, transform: 'translateY(0)' },
				},
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [
    "flowbite/plugin"
  ],
}