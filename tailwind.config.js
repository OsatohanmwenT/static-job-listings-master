/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Cyan-background" : "hsl(180, 52%, 96%)",
        "Cyan-filter": "hsl(180, 31%, 95%)",
        "Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
        "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
        "Desaturated-Dark-Cyan": "hsl(180, 29%, 50%)"
      },
      fontFamily: {
        "spartan": ["League Spartan", "sans-serif"]
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/bg-header-desktop.svg')",
        'mobile': "url('/src/assets/images/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}