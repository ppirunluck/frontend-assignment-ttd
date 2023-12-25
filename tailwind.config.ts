/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    dropShadow:{
      '2xl': '0px 2px 12px rgba(0, 0, 0, 0.35)',
      '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    colors: {
      'primary-button': '#2A4B6A',
      'red': 'rgb(234 88 12)'
    },
    textColor: {
      white: "#FFF",  
      black: "#000",   
    },
    fontFamily: {
      'Poppins': 'Poppins'
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}