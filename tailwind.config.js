module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE5626;',
        accent: '#35109F',

        bg: '#F9F4EC',
        text: '#201F1F',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  plugins: [],
};
