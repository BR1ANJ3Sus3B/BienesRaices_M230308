import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

const sequelize = new Sequelize(
  
  process.env.BD_NAME, // nombre de la base de datos
  process.env.BD_USER, // nombre del usuario
  process.env.BD_PASSWORD, // contraseña del usuario
  {
    host: process.env.DB_HOST ,  // Dirección del servidor
    dialect: 'mysql', // Dialecto de la base de datos (MySQL)
    logging: false, // Desactivar logging de SQL (opcional)
  }
);

export default sequelize;
