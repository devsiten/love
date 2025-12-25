import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef9e7',
          200: '#fcf0c3',
          300: '#f9e48f',
          400: '#f4d35e',
          500: '#d4a853',
          600: '#c9a227',
          700: '#a07c35',
          800: '#846530',
          900: '#6d5229',
          950: '#3d2c14',
        },
        dark: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Lora', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a853 0%, #f4e4a6 25%, #d4a853 50%, #a07c35 75%, #d4a853 100%)',
        'gold-solid': 'linear-gradient(135deg, #d4a853 0%, #c9a227 50%, #a07c35 100%)',
        'adinkra': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23d4a853' stroke-opacity='0.08' stroke-width='1'%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='20'/%3E%3Ccircle cx='40' cy='40' r='10'/%3E%3Cline x1='40' y1='5' x2='40' y2='75'/%3E%3Cline x1='5' y1='40' x2='75' y2='40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(212, 168, 83, 0.5), 0 0 20px rgba(212, 168, 83, 0.3), 0 0 30px rgba(212, 168, 83, 0.1)',
            opacity: '1'
          },
          '50%': {
            textShadow: '0 0 20px rgba(212, 168, 83, 0.8), 0 0 40px rgba(212, 168, 83, 0.5), 0 0 60px rgba(212, 168, 83, 0.3)',
            opacity: '0.9'
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
