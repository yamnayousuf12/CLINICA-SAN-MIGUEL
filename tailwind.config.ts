import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./public/**/*.html', "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      customBlue: '#1e3a8a',
      darkBlue: '#0e1755',
      TealBlue: '#1d5779',
      Red: '#C00000',
      darkred: '#5f0e2d',
      Blue: '#20126e',
      white: '#ffffff',
      pink:'#cc3e8c',
      black:'#000000',
      purple:"#ca1ccae3",
      green:'#00ff00',
      gray:"#4b5563",
      gray2:'#ccc4c4ad',
      orange:'#ff7f00',
      orange2:'#ff7f00ad',
      yellow:'#ffea00',
      yellow2:'#ffea00ad',
    },
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    
  },
  
  plugins: [],
}

export default config;
