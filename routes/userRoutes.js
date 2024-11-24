import express from 'express';

import { 
    formularioLogin, 
    formularioRegister, 
    formularioPasswordRecovery, 
    createNewUser, 
    confir as confirm, 
    checkToken 
} from '../controllers/userController.js';

const router = express.Router();

// Ruta para búsqueda por ID
router.get("/busquedaPorID/:id", function (request, response) {
    response.send(`Se está solicitando buscar al usuario con ID: ${request.params.id}`);
});

// Ruta para crear un nuevo usuario
router.post("/newUser", createNewUser);

// Ruta para reemplazar la información de un usuario
router.put("/replaceUserByEmail/:name/:email/:password", function(a, b) {
    b.send(`Se ha solicitado el reemplazo de toda la información del usuario: ${a.params.name}, con correo: ${a.params.email} y contraseña: ${a.params.password}`);
});

// Ruta para actualizar parcialmente la contraseña
router.patch("/updatePassword/:email/:newPassword/:newPasswordConfirm", function(request, response) {
    const { email, newPassword, newPasswordConfirm } = request.params;
    if (newPassword === newPasswordConfirm) {
        response.send(`Se ha solicitado la actualización de la contraseña del usuario con el correo: ${email}, se aceptan los cambios ya que la contraseña y confirmación son la misma.`);
        console.log(newPassword);
        console.log(newPasswordConfirm);
    } else {
        response.send(`Se ha solicitado la actualización de la contraseña del usuario con correo: ${email}, pero se rechaza el cambio dado que la nueva contraseña y su confirmación no coinciden.`);
        console.log(newPassword);
        console.log(newPasswordConfirm);
    }
});

// Ruta para eliminar un usuario
router.delete("/deleteUser/:email", function(request, response) {
    response.send(`Se ha solicitado la eliminación del usuario asociado al correo: ${request.params.email}`);
});

// Rutas para formularios de inicio de sesión, registro y recuperación de contraseña
router.get("/login", formularioLogin);
router.get("/createAccount", formularioRegister);
router.get("/passwordRecovery", formularioPasswordRecovery);

// Ruta para el registro de usuario (nuevo)
router.post("/createAccount", createNewUser);

// Ruta para confirmar cuenta a través de un token
router.get('/confirm/:token', confirm);  // Usar 'confirm' en lugar de 'confir'

// Ruta para restablecer la contraseña
router.get('/passwordRecovery/:token', checkToken);

router.get('/confirm/:token', confirm);  // Correcto

export default router;
