/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        kerala: {
          gold: '#FFD700',
          green: '#228B22',
          coconut: '#8B4513',
          water: '#4682B4'
        }
      },
      fontFamily: {
        'malayalam': ['Noto Sans Malayalam', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}