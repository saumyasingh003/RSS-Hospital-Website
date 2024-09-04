/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-up': {
          '0%': { transform: 'translateY(500%)' },
          '100%': { transform: 'translateY(-40%)' },
        },
      },
      animation: {
        'scroll-up': 'scroll-up 5s linear infinite',
      },
    },
  },
  plugins: [],
}
