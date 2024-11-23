// index.js

import express from 'express';
import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta publica 
app.use(express.static('public'))

const port = 3006;

// Configuración de rutas
app.use("/", generalRoutes);
app.use("/usuario/", userRoutes);
app.use('/auth', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});
