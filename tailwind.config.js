/** @type {import('tailwindcss').Config} */
export default {
  content: [
              "index.html", 
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      fontFamily: {
        'blackletter': ['Blackletter Shadow', 'sans-serif'],
        'mont': ["Montserrat", "serif"],
        'odibee': ["Odibee Sans", "serif"],
        'open': ["Open Sans", "serif"],
        'cursive': ["Great Vibes", "serif"],
      },
      colors: {
        whatsapp: '#25d366',
      },
    },
    container: {
      center: true,
    },
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}

