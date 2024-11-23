import express from 'express';
import generalRoutes from './routes/generalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import db from './config/db.js'

const app = express();

//Conexión a la base de datos
try{
    await db.authenticate();
    console.log('Conexión Correcta a la Base de Datos')
  }catch(error){
    console.log(error)
  }
  

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta publica 
app.use(express.static('./public'))

const port = 3006;

// Configuración de rutas
app.use("/", generalRoutes);
app.use("/usuario/", userRoutes);
app.use('/auth', userRoutes);

try{
    await db.authenticate();
    db.sync()
    console.log('conexión correcta a la base de datos')
}catch (error){
    console.log(error);
}

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación ha iniciado en el puerto: ${port}`);
});
