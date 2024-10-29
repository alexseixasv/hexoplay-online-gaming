/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mirage': {
          '50': '#f0fdf4',
          '100': '#dbfde7',
          '200': '#b9f9ce',
          '300': '#82f3aa',
          '400': '#45e37d',
          '500': '#1ed760',
          '600': '#11a847',
          '700': '#11843b',
          '800': '#136832',
          '900': '#183350',
          '950': '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

