/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Calibre', 'Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Text colors
        'text-primary': 'rgba(255, 255, 255, 0.9)',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-tertiary': 'rgba(255, 255, 255, 0.5)',
        
        // Navy colors
        navy: {
          DEFAULT: '#0a192f',
          dark: '#071123',
          light: '#112240',
          lighter: '#233554',
        },
        
        // Accent colors
        'accent-blue': {
          start: '#3f8efc',
          end: '#4a90e2',
        },
        
        // UI colors
        'ui-border': 'rgba(255, 255, 255, 0.1)',
        'ui-border-hover': 'rgba(255, 255, 255, 0.2)',
        'ui-bg': 'rgba(255, 255, 255, 0.05)',
        'ui-bg-hover': 'rgba(255, 255, 255, 0.1)',
        
        // Primary colors
        primary: {
          DEFAULT: 'rgb(63, 142, 252)',
          foreground: 'rgb(245, 247, 250)',
        },
        
        // Secondary colors
        secondary: {
          DEFAULT: 'rgb(142, 68, 173)',
          foreground: 'rgb(245, 247, 250)',
        },
        
        // Gradient colors
        'accent-blue-start': '#3f8efc',
        'accent-blue-end': '#4a90e2',
        
        // Accent colors
        accent: {
          blue: {
            start: '#3f8efc',
            end: '#8e44ad',
          },
        },
        
        // Additional colors
        destructive: {
          DEFAULT: 'hsl(0, 84%, 60%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        muted: {
          DEFAULT: 'hsl(0, 0%, 96%)',
          foreground: 'hsl(0, 0%, 45%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(0, 0%, 5%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(0, 0%, 5%)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
        '4xl': '2rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}
