/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            keyframes: {
        'light-sweep': {
          '0%': {
            background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            transform: 'translateX(-100%)',
          },
          '100%': {
            background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'light-sweep': 'light-sweep 3s linear infinite',
      },
    },
  },
  
  plugins: [],
}

