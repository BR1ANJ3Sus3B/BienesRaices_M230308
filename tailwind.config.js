module.exports = {
  content: [
    './src/**/*.{html,js,pug}', 
    './views/**/*.{html,js,pug}', 
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: '#B6C3F5',       // Azul claro personalizado
        customButtonColor: '#FFFFFF',    // Naranja vibrante
        customLightGreen: '#74F4E8',     // Verde agua claro
        skyBlue: '#87CEEB',              // Azul cielo
        palePurple: '#000000',           // Turquesa
        vibrantYellow: '#A1CDF4',        // Amarillo vibrante
        deepPurple: '#673AB7',           // Morado profundo
        softPink: '#000022',             // Rosa suave
        forestGreen: '#228B22',          // Verde bosque
      },
    },
  },
  plugins: [],
};
