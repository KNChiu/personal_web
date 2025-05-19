
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主要文字和背景色
        foreground: 'rgb(248, 250, 252)', // 淺色文字
        background: 'rgb(15, 23, 42)', // 深藍色背景
        
        // 主要強調色 - 紫藍色系
        primary: {
          50: 'rgb(238, 242, 255)',
          100: 'rgb(224, 231, 255)',
          200: 'rgb(199, 210, 254)',
          300: 'rgb(165, 180, 252)',
          400: 'rgb(129, 140, 248)',
          500: 'rgb(99, 102, 241)', // 主要強調色
          600: 'rgb(79, 70, 229)',
          700: 'rgb(67, 56, 202)',
          800: 'rgb(55, 48, 163)',
          900: 'rgb(49, 46, 129)',
          DEFAULT: 'rgb(99, 102, 241)', // 主要強調色
          foreground: 'rgb(248, 250, 252)', // 強調色上的文字
        },
        
        // 輔助色 - 青綠色系
        accent: {
          50: 'rgb(236, 254, 255)',
          100: 'rgb(207, 250, 254)',
          200: 'rgb(165, 243, 252)',
          300: 'rgb(103, 232, 249)',
          400: 'rgb(34, 211, 238)',
          500: 'rgb(6, 182, 212)', // 主要輔助色
          600: 'rgb(8, 145, 178)',
          700: 'rgb(14, 116, 144)',
          800: 'rgb(21, 94, 117)',
          900: 'rgb(22, 78, 99)',
          DEFAULT: 'rgb(6, 182, 212)', // 主要輔助色
          foreground: 'rgb(15, 23, 42)', // 輔助色上的文字
        },
        
        // 成功、警告、錯誤色
        success: {
          DEFAULT: 'rgb(16, 185, 129)', // 綠色
          foreground: 'rgb(248, 250, 252)',
        },
        warning: {
          DEFAULT: 'rgb(245, 158, 11)', // 橙色
          foreground: 'rgb(15, 23, 42)',
        },
        error: {
          DEFAULT: 'rgb(239, 68, 68)', // 紅色
          foreground: 'rgb(248, 250, 252)',
        },
        
        // 中性色調
        neutral: {
          50: 'rgb(248, 250, 252)',
          100: 'rgb(241, 245, 249)',
          200: 'rgb(226, 232, 240)',
          300: 'rgb(203, 213, 225)',
          400: 'rgb(148, 163, 184)',
          500: 'rgb(100, 116, 139)',
          600: 'rgb(71, 85, 105)',
          700: 'rgb(51, 65, 85)',
          800: 'rgb(30, 41, 59)',
          900: 'rgb(15, 23, 42)',
        },
        
        // 卡片和元素背景
        card: 'rgb(30, 41, 59)', // 深藍灰色
        muted: 'rgb(51, 65, 85)', // 中等深度的藍灰色
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
        // 文字顏色工具類
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
        '.text-accent': {
          color: theme('colors.accent.DEFAULT')
        },
        '.text-accent-foreground': {
          color: theme('colors.accent.foreground')
        },
        '.text-muted': {
          color: theme('colors.muted')
        },
        '.text-success': {
          color: theme('colors.success.DEFAULT')
        },
        '.text-warning': {
          color: theme('colors.warning.DEFAULT')
        },
        '.text-error': {
          color: theme('colors.error.DEFAULT')
        },
        
        // 背景顏色工具類
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
        '.bg-accent': {
          backgroundColor: theme('colors.accent.DEFAULT')
        },
        '.bg-accent-foreground': {
          backgroundColor: theme('colors.accent.foreground')
        },
        '.bg-muted': {
          backgroundColor: theme('colors.muted')
        },
        '.bg-card': {
          backgroundColor: theme('colors.card')
        },
        '.bg-success': {
          backgroundColor: theme('colors.success.DEFAULT')
        },
        '.bg-warning': {
          backgroundColor: theme('colors.warning.DEFAULT')
        },
        '.bg-error': {
          backgroundColor: theme('colors.error.DEFAULT')
        },
        
        // 邊框顏色工具類
        '.border-primary': {
          borderColor: theme('colors.primary.DEFAULT')
        },
        '.border-accent': {
          borderColor: theme('colors.accent.DEFAULT')
        },
        '.border-muted': {
          borderColor: theme('colors.muted')
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
