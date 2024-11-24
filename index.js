// Importar librerías necesarias
import express from 'express';
import dotenv from 'dotenv';
import generalRoutes from './routes/generalRoutes.js';  // Importa las rutas generales
import userRoutes from './routes/userRoutes.js';  // Importa las rutas de usuario
import db from './db/config.js';  // Configuración de la base de datos

// Cargar las variables de entorno
dotenv.config({ path: '.env' });

// Instanciar la aplicación Express
const app = express();

// Conexión a la base de datos
try {
  await db.authenticate();  // Verificar las credenciales de la base de datos
  await db.sync({ alter: true });  // Sincroniza las tablas con los modelos (evitar en producción)
  console.log('Conexión exitosa a la base de datos');
} catch (error) {
  console.error('Error de conexión a la base de datos:', error);
}

// Habilitar el middleware para leer datos de formularios
app.use(express.urlencoded({ extended: true }));

// Configurar recursos estáticos (carpeta public)
app.use(express.static('./public'));

// Habilitar el uso de Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');  // Definir la carpeta donde están las vistas

// Configuración de rutas
app.use('/', generalRoutes);  // Añadir la ruta general
app.use('/auth/', userRoutes);  // Rutas de autenticación

// Configuración del puerto del servidor
const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});
