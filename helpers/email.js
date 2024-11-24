import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: '.env' });

const emailAfterRegister = async (data) => {
    try {
        // Configuración del transporte
        const transport = nodemailer.createTransport({
            host: process.env.Email_HOST,
            port: process.env.Email_PORT,
            secure: process.env.Email_PORT === '465', // Usar conexión segura si es puerto 465
            auth: {
                user: process.env.Email_USER,
                pass: process.env.Email_PASS,
            },
        });

        const { email, name, token } = data;

        // Contenido del correo
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; background-color: #f4f4f4;">
                <div style="max-width: 600px; margin: auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <!-- Encabezado -->
                    <header style="text-align: center; padding: 20px 0; border-bottom: 1px solid #ddd;">
                        <h1 style="font-weight: bold; color: #1A73E8;">Bienes Raíces</h1>
                        <p style="font-size: 18px; color: #555;">Confirmación de cuenta</p>
                    </header>

                    <!-- Contenido principal -->
                    <div style="padding: 20px;">
                        <h2 style="color: #333;">Hola, <span style="color: #E74C3C;">${name}</span></h2>
                        <p style="font-size: 16px; color: #555; line-height: 1.6;">
                            ¡Gracias por registrarte en nuestra plataforma! En BienesRaíces puedes buscar, comprar y vender propiedades de forma segura y sencilla.
                        </p>
                        <p style="font-size: 16px; color: #555; line-height: 1.6;">
                            Para completar tu registro, por favor confirma tu cuenta haciendo clic en el siguiente botón:
                        </p>

                        <!-- Botón -->
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="${process.env.BACKEND_DOMAIN}:${process.env.PORT ?? 3006}/auth/login/${token}" 
                                style="display: inline-block; padding: 12px 20px; font-size: 16px; color: #ffffff; background-color: #1A73E8; text-decoration: none; border-radius: 5px; font-weight: bold;">
                                Confirmar cuenta
                            </a>
                        </div>

                        <p style="font-size: 16px; color: #FF6347; text-align: center; margin-top: 20px;">
                            Si no has creado esta cuenta, por favor ignora este mensaje.
                        </p>
                    </div>

                    <!-- Firma -->
                    <div style="padding: 20px; border-top: 1px solid #ddd; text-align: center; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
                        <p style="font-size: 16px; color: #555; margin-bottom: 10px;">Atentamente,</p>
                        <p style="font-size: 18px; font-weight: bold; color: #2C3E50;">Brian Jesus Mendoza Marquez</p>
                        <img src="https://static.vecteezy.com/system/resources/previews/025/866/358/non_2x/fake-autograph-samples-hand-drawn-signatures-examples-of-documents-certificates-and-contracts-with-inked-and-handwritten-lettering-vector.jpg" 
                             alt="Firma" style="max-width: 150px; height: auto; border-radius: 5px; margin: 10px 0;">
                    </div>
                </div>

                <!-- Pie de página -->
                <footer style="text-align: center; padding: 10px; background-color: #2C3E50; color: white; font-size: 14px;">
                    &copy; 2023 BienesRaíces_230574. Todos los derechos reservados.
                </footer>
            </div>
        `;

        // Enviar correo
        await transport.sendMail({
            from: `"Bienes Raíces" <${process.env.Email_USER}>`, // Remitente
            to: email, // Destinatario
            subject: 'Bienvenido/a al BienesRaíces_230574', // Asunto
            html: htmlContent, // Contenido HTML
        });

        console.log(`Correo enviado exitosamente a ${email}`);
    } catch (error) {
        console.error('Error enviando correo:', error.message);
        throw new Error('No se pudo enviar el correo. Por favor, verifica la configuración.');
    }
};

export { emailAfterRegister };
