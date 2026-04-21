/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'navy-dark': '#060c1a',
        'crimson': '#e8253a',
        'cyan-holo': '#00cfff',
        'primary-container': '#E62429',
        'on-primary-container': '#ffffff',
        'primary-fixed': '#FFDAD6',
        'on-primary-fixed': '#410003',
        'on-primary-fixed-variant': '#93000E',
        'secondary': '#A4C8FF',
        'secondary-container': '#1B4A7F',
        'on-secondary': '#00315E',
        'on-secondary-fixed': '#001C3A',
        'on-secondary-fixed-variant': '#17487C',
        'tertiary': '#82CFFF',
        'tertiary-container': '#007FB0',
        'on-tertiary': '#00344B',
        'surface': '#131313',
        'surface-container': '#201F1F',
        'surface-container-high': '#2A2A2A',
        'surface-container-highest': '#353534',
        'surface-container-low': '#1C1B1B',
        'surface-container-lowest': '#0E0E0E',
        'on-surface': '#E5E2E1',
        'on-surface-variant': '#E7BDB8',
        'outline-variant': '#5D3F3C',
        'background': '#131313',
        'on-background': '#E5E2E1',
      },
      fontFamily: {
        'headline': ['Space Grotesk', 'sans-serif'],
        'body': ['Manrope', 'sans-serif'],
        'label': ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0px',
        'lg': '0px',
        'xl': '0px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 30s linear infinite reverse',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}