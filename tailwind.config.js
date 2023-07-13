/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
    colors: {
      primary:{
        1: '#556B2F',
        2: '#6B8E23',
        3: '#3D550C',
        4: '#808000',
        5: '#BDB76B',
        6: '#D7E8BA',
        7: '#EDEDC7'
      },
      secondary: {
        1: '#8B5500',
        2: '#B9770E',
        3: '#C6860E',
        4: '#FFBF00',
        5: '#FFD700',
        6: '#FFDDA1',
        7: '#FFF2D9'
      },
      neutral: {
        1: '#333333',
        2: '#666666',
        3: '#808080',
        4: '#999999',
        5: '#CCCCCC',
        6: '#DDDDDD',
        7: '#F5F5F5'
      },
      success: {
        1: '#006466',
        2: '#008080',
        3: '#008B8B',
        4: '#00FFFF',
        5: '#40E0D0',
        6: '#7FFFD4',
        7: '#AFEEEE'
      },
      warning: {
        1: '#B8860B',
        2: '#DAA520',
        3: '#BDB76B',
        4: '#F0E68C',
        5: '#EEE8AA',
        6: '#FFFFE0',
        7: '#FFFFF0'
      },
      danger: {
        1: '#550000',
        2: '#660000',
        3: '#770000',
        4: '#CA1C13',
        5: '#DB2B2B',
        6: '#EA4F33',
        7: '#F16A53'
      },
      bg: {
        1: '#131212',
        2: '#090909'
      }
    }
  },
  plugins: [],
}

