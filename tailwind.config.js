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
        },
        theme: {
          primary: '#DD2222', // Action Red - for main buttons, navigation
          accent: '#004499', // Navy Blue - for secondary actions, background contrast
          'on-primary': '#FFFFFF', // Pure White - text on dark background
          warn: '#FF8800', // Orange/Gold - for alerts, important messages
          background: '#F4F4F4', // Light Gray - page/card background
          'on-background': '#333333' // Dark Text - body text on white
        }
      },
      fontFamily: {
        'malayalam': ['Noto Sans Malayalam', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
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