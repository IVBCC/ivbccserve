const FormInscripcionCurso = require('../models/FormInscripcionCurso');

exports.createFormInscripcionCurso = async (req, res) => {
    try {
        const { curso, nombreCompleto, correo, telefono, sexo, edad, comentario } = req.body;
        const newFormInscripcionCurso = new FormInscripcionCurso({ curso, nombreCompleto, correo, telefono, sexo, edad, comentario });
        await newFormInscripcionCurso.save();
        res.status(201).json({ message: 'Curso registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar su curso' });

        if (error.name === "ValidationError") {
            return res.status(400).json({ error: error.message });
        }
    }
};