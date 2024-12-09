import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: '.env' });

const registerEmail = async (data) => {
    try {
        // Configuración del transporte
        const transport = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            //secure: process.env.EMAIL_PORT === '465', // Usar conexión segura si es puerto 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const { email, name, token } = data;

        // Contenido del correo
        const htmlContent = `
            <div style="font-family: 'Helvetica', Arial, sans-serif; margin: 0; padding: 0; background-color: #f8f8f8; color: #444;">
                <div style="max-width: 600px; margin: auto; padding: 30px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                    <!-- Encabezado -->
                    <header style="text-align: center; padding-bottom: 20px;">
                        <h1 style="font-size: 24px; font-weight: 600; color: #3498db;">Bienes Raíces</h1>
                        <p style="font-size: 16px; color: #888; margin: 0;">Confirmación de cuenta</p>
                    </header>

                    <!-- Contenido principal -->
                    <div style="padding: 20px 0;">
                        <h2 style="font-size: 20px; color: #333; font-weight: 600; text-align: center;">¡Hola, ${name}!</h2>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 20px;">
                            ¡Gracias por registrarte en nuestra plataforma de Bienes Raíces! Estamos emocionados de tenerte con nosotros.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            Estás a solo un paso de completar tu registro y comenzar a explorar todas las propiedades disponibles en nuestra plataforma.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            En Bienes Raíces, nos esforzamos por ofrecerte las mejores opciones para comprar, vender y alquilar propiedades. Ya sea que estés buscando tu primera casa, un lugar para invertir o simplemente explorar el mercado, estamos aquí para ayudarte.
                        </p>
                        <p style="font-size: 16px; color: #555; text-align: center; margin-top: 10px;">
                            Haz clic en el botón a continuación para confirmar tu cuenta y comenzar a descubrir todo lo que nuestra plataforma tiene para ofrecerte.
                        </p>

                        <!-- Botón de confirmación -->
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="${process.env.BACKEND_HOST}:${process.env.PORT}/auth/ConfirmAccount/${token}" 
                               style="display: inline-block; padding: 14px 30px; font-size: 16px; color: #fff; background-color: #3498db; text-decoration: none; border-radius: 50px; font-weight: 500; transition: background-color 0.3s ease;">
                                Confirmar Cuenta
                            </a>
                        </div>

                        <!-- Mensaje secundario -->
                        <p style="font-size: 14px; color: #090809; text-align: center; margin-top: 25px;">
                            Si no has creado esta cuenta, simplemente ignora este mensaje.
                        </p>
                    </div>

                    <!-- Firma -->
                    <footer style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #888;">
                        <p style="margin: 0;">Atentamente,</p>
                        <p style="font-weight: 600; color: #2c3e50;">Brian Jesus Mendoza Marquez</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCkXjwXA9XxuYIJCzKa4K9b9IuiXzSj61w7atjhcRRWIeaiXEAVxr1L1p8_vBKsz1emw&usqp=CAU" 
                             alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px; margin: 10px 0;">
                        <p style="margin-top: 10px; color: #aaa;">© 2023 Bienes Raíces. Todos los derechos reservados.</p>
                    </footer>
                </div>
            </div>
        `;

        // Enviar correo
        await transport.sendMail({
            from: `"Bienes Raíces" <${process.env.Email_USER}>`, // Remitente
            to: email, // Destinatario
            subject: 'Bienvenido/a a BienesRaíces_230308', // Asunto
            html: htmlContent, // Contenido HTML
        });

        console.log(`Correo enviado exitosamente a ${email}`);
    } catch (error) {
        console.error('Error enviando correo:', error.message);
        throw new Error('No se pudo enviar el correo. Por favor, verifica la configuración.');
    }
};


const passwordRecoveryEmail = async (data) => {
    const transport = nodemailer.createTransport({
        host: process.env.Email_HOST,
        port: process.env.Email_PORT,
        auth: {
            user: process.env.Email_USER,
            pass: process.env.Email_PASS,
        },
    });
    const { email,name,token }= data;
    await transport.sendMail({
        from: 'BienesRaices_230499',
        to: email,
        subject: 'Reestablece tu contraseña...',
        text: `Estimado ${ name }, haz solicitado el cambio de contraseña de tu cuenta en BienesRaices_230499.`,
        html: `
            <header style="font-family: bold; text-align: center; line-height: 0.5;">
                <h2>Bienes Raices</h2>
                <h3>Recuperación de contraseña</h3>
            </header>
            <div style="font-family: bold, sans-serif; text-align: justify; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 25px; border: 10px solid #ddd; border-radius: 5px;">
                <h2 style="color: #50c878;">¡Hola, <span style="color: #50c878;">${name}</span>!</h2>
            <p style="font-size: 18px; color: black;">
                Has reportado el olvido o perdida de tu contraseña para acceder a tu cuenta de BienesRaíces
            </p>
            <div style="text-align: center; background: #green; border: 1px solid black; padding: 15px; border-radius: 5px;">
                <p style="font-size: 20px; color: black;">
                    Por lo que necesitas ingresar en el siguiente enlace:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/passwordRecovery/${token}" 
                       style="background-color: green; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                       Confirmar Cuenta
                    </a>
                </div>
            </div>
            <br>
            <div style="text-align: center; line-height: 1.6;">
                <p style="font-size: 20px; color: black;">
                    Atentamente, <br>
                    <strong style="font-size: 22px; color: black;">Guadalupe Idai Vargas Galindo</strong>
                </p>
                <div style="margin-bottom: 15px;">
                    <img src="https://static.vecteezy.com/system/resources/previews/025/866/358/non_2x/fake-autograph-samples-hand-drawn-signatures-examples-of-documents-certificates-and-contracts-with-inked-and-handwritten-lettering-vector.jpg" 
                         alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px;">
                </div>
            </div>
        </div>
        <footer style="text-align: center; background-color: black; color: white; padding: 10px; border-radius: 8px;">
            Todos los derechos reservados de BienesRaíces_230574
        </footer>
        `
    });
    }

export {registerEmail,passwordRecoveryEmail};

