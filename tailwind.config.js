/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#032541",
        lightblue: "#01B4E4",
        lightgreen: "#1ed5a9"
      },
      fontFamily: {
        source: ['Source Sans Pro', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/VlHt27nCqOuTnuX6bku8QZapzO.jpg')",
      }
    },
  },
  plugins: [],
}
