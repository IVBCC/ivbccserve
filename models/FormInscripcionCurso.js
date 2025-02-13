const  mongoose  = require("mongoose");

const formInscripcionCursoSchema = new mongoose.Schema({
    curso: { type: String, required: true },
    nombreCompleto: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: Number, required: true },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    comentario: { type: String, required: true },
})

module.exports = mongoose.model('FormInscripcionCurso',formInscripcionCursoSchema);