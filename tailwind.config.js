/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'top-left': '0, 0',
      'x-axis': '-120% -120px',
      's-axis': '12.6rem',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '16': '4rem',
      '50%': '50%',
      '77%': '77%',
      '110%': '110%',
    },
    extend: {
      animation: {
        horizontalPulse: 'horizontalPulse 2.8s ease-in 3s infinite',
      },
      backgroundColor: {
        skin: {
          'light-gray': 'var(--bg-color-light-gray)',
          'dark-blue': 'var(--root-color)',
          'light-green': 'var(--bg-color-light-green)',
          'light-green-hover': 'var(--bg-color-light-green-hover)',
        }
      },
      backgroundImage: {
          'ng': "url('/src/assets/images/ng.svg')",
      },
      height: {
        '141': "4.1rem",
      },
      keyframes: {
        horizontalPulse: {
          '0%, 100%': {
              transform: "translate(2px)",
          },
          "5%": {
              transform: "translate(50%)",
          }
        }
      },
      margin: {
        '1.8': '0.4rem',
      },
      padding: {
        '4.8': '1.2rem',
        '19.6': '4.8rem',
      },
      textColor: {
        skin: {
          'light-gray': 'var(--text-color-light-gray)',
        }
      },
      width: {
        '102.5': '28.5rem',
      },
    },
    fontFamily: {
      'boing': 'Boing',
      'graphik': 'Graphik',
      'tiempos': 'Tiempos Headline',
      'moret': 'Moret',
    },
    fontSize: {
      'xs': '.75rem',     // Extra Small
      'sm': '.875rem',    // Small
      'base': '1rem',     // Base
      'lg': '1.125rem',   // Large
      'xl': '1.25rem',    // Extra Large
      '2xl': '1.5rem',    // 2 Extra Large
      '3xl': '1.875rem',  // 3 Extra Large
      '4xl': '2.25rem',   // 4 Extra Large
      '5xl': '3rem',      // 5 Extra Large
      '6xl': '4rem',      // 6 Extra Large
      '7xl': '5rem',      // 7 Extra Large
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '1.4rem',
      '11xl': '1.6rem',
    },
    letterSpacing: {
      'normal': '0',
      'normal-wide': '0.002em',
      'normal-wider': '0.01em',

    },
  },
  // variants: {},
  plugins: [],
}

