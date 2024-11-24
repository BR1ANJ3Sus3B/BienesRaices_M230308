module.exports = {
  content: [
    './src/**/*.{html,js,pug}', 
    './views/**/*.{html,js,pug}', 
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#B6C3F5',
        customButtonColor: '#FFFFFF',
        customLightGreen: '#74F4E8',
        skyBlue: '#87CEEB',
        palePurple: '#000000',
        vibrantYellow: '#A1CDF4',
        deepPurple: '#673AB7',
        softPink: '#000022',
        forestGreen: '#228B22',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out', // Animación fade-in
        'fade-out': 'fadeOut 1s ease-in forwards', // Animación fade-out para el ocultamiento
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
