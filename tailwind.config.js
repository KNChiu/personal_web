
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(23, 23, 23)',
        background: 'rgb(255, 255, 255)',
        primary: {
          DEFAULT: 'rgb(59, 130, 246)',
          foreground: 'rgb(255, 255, 255)',
        },
        muted: 'rgb(244, 244, 245)',
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-foreground': {
          color: theme('colors.foreground')
        },
        '.text-background': {
          color: theme('colors.background')
        },
        '.text-primary': {
          color: theme('colors.primary.DEFAULT')
        },
        '.text-primary-foreground': {
          color: theme('colors.primary.foreground')
        },
        '.text-muted': {
          color: theme('colors.muted')
        },
        '.bg-foreground': {
          backgroundColor: theme('colors.foreground')
        },
        '.bg-background': {
          backgroundColor: theme('colors.background')
        },
        '.bg-primary': {
          backgroundColor: theme('colors.primary.DEFAULT')
        },
        '.bg-primary-foreground': {
          backgroundColor: theme('colors.primary.foreground')
        },
        '.bg-muted': {
          backgroundColor: theme('colors.muted')
        },
        '.border-primary': {
          borderColor: theme('colors.primary.DEFAULT')
        },
      }
      addUtilities(newUtilities)
    }
  ],
}