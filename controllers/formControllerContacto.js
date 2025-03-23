const Form = require('../models/FormContacto');
const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendFormEmail = async (req, res) => {
    try {
        const { nombreCompleto, correo, celular, iglesia, mensaje } = req.body;

        // Configurar el transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Configurar el contenido del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "webivbcc@gmail.com", // Cambia esto por el correo donde quieres recibir los datos
            subject: "Nuevo Mensaje recibido",
            html: `
                <h2>Mensaje</h2>
                <p><strong>Nombre Completo:</strong> ${nombreCompleto}</p>
                <p><strong>Correo Electrónico:</strong> ${correo}</p>
                <p><strong>Teléfono o Celular:</strong> ${celular}</p>
                <p><strong>Iglesia ICC:</strong> ${iglesia}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `,
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Formulario enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ error: "Error al enviar el correo" });
    }
};