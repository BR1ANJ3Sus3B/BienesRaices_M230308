// routes/generalRoutes.js
import express from 'express';

const router = express.Router();

// Ruta raíz
router.get("/", (req, res) => {
    res.send("Hola desde la web en NodeJS");
});

// Ruta quienEres
router.get("/quienEres", (req, res) => {
    res.json({
        "nombre": "Brian jesus mendoza marquez",
        "carrera": "TI DSM",
        "grado": "4",
        "grupo": "B",
        "Signo zodiacal": "Aries"
    });
});

export default router;
