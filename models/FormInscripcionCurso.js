const mongoose = require("mongoose");

const formInscripcionCursoSchema = new mongoose.Schema({
    curso: { type: String, required: true },
    nombreCompleto: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: {
        type: String, required: true, validate: {
            validator: function (v) {
                return /^\d{10,}$/.test(v);
            },        
            message: "El número de teléfono debe tener al menos 10 dígitos",
        }
    },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    comentario: { type: String, required: true },
})

module.exports = mongoose.model('FormInscripcionCurso', formInscripcionCursoSchema);