import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{html,vue,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '800px',
      'lg': '1300px',
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#3E97FF',
          light: '#EEF6FF',
          lighter: '#F9F9F9',
        },
        secondary: '#FFFFFF',
        neutral: '#A1A5B7',
        light: '#F1F1F2',
        dark: {
          DEFAULT :'#181C32',
          light: '#1A1A1A',
        },
        red: {
          DEFAULT: '#F1416C'
        }
      },

    },
  },
  plugins: [],
}

