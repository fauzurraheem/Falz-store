/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('/component/layout/background.jpg')",
      }
    },
    screens: {
      'ph': '360px',
      // => @media (min-width: 480px) {...}

      'sm': '480px',
      // => @media (min-width: 480px) {...}
      'Sm': '700px',
      // => @media (min-width: 480px) {...}


      'md': '940px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1100px',
      // => @media (min-width: 1280px) { ...
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
