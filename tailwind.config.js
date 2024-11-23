module.exports = {
  content: [
    './src/**/*.{html,js,pug}', 
    './views/**/*.{html,js,pug}', 
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#B6C3F5',
        customButtonColor: '#ff5733',        
        customLightGreen: '#74F4E8',
      },
    },
  },
  plugins: [],
};
