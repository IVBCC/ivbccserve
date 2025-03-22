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

exports.getFormInscripcionCurso = async (req, res) => {
    try {
        const forminscripcionacurso = await FormInscripcionCurso.find();
        res.status(200).json(forminscripcionacurso);
    } catch (error) {
        console.error("Error al obtener formularios:", error);
        res.status(500).json({ error: "Error del servidor al obtener formularios" });
    }
}

exports.getByIdFormInscripcionCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const FormEncontradoById = await FormInscripcionCurso.findById(id);
        if (!FormEncontradoById) {
            return res.status(404).json({ error: "Formulario no encontrado" });
        }
        res.status(200).json(FormEncontradoById);
    } catch (error) {
        console.error("Error al consultar el formulario pedido: ", error);
        res.status(500).json({ error: "Error del servidor al obtener formulario" });
    }
}

exports.getByCelularFormInscripcionCurso = async (req, res) => {
    try {
        const { telefono } = req.params;

        // Asegurar que el parámetro es una cadena de texto
        if (!telefono || typeof telefono !== "string") {
            return res.status(400).json({ error: "El teléfono proporcionado no es válido" });
        }

        // Buscar el formulario con el teléfono exacto
        const form = await FormInscripcionCurso.findOne({ telefono });

        if (!form) {
            return res.status(404).json({ error: "No se encontró un formulario con ese número de teléfono" });
        }

        res.status(200).json(form);
    } catch (error) {
        console.error("Error al obtener el formulario por teléfono:", error);
        res.status(500).json({ error: "Error del servidor al obtener el formulario" });
    }
}

exports.updateFormInscripcionCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const { curso, nombreCompleto, correo, telefono, sexo, edad, comentario } = req.body;

        const updatedForm = await FormInscripcionCurso.findByIdAndUpdate(
            id,
            { curso, nombreCompleto, correo, telefono, sexo, edad, comentario },
            { new: true, runValidators: true }
        );

        if (!updatedForm) {
            return res.status(404).json({ error: "Formulario no encontrado" });
        }

        res.status(200).json({ message: "Formulario actualizado correctamente", updatedForm });
    } catch (error) {
        console.error("Error al actualizar el formulario:", error);
        res.status(500).json({ error: "Error del servidor al actualizar el formulario" });

        if (error.name === "ValidationError") {
            return res.status(400).json({ error: error.message });
        }
    }
};

exports.deleteFormInscripcionCurso = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedForm = await FormInscripcionCurso.findByIdAndDelete(id);

        if (!deletedForm) {
            return res.status(404).json({ error: "Formulario no encontrado" });
        }

        res.status(200).json({ message: "Formulario eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar el formulario:", error);
        res.status(500).json({ error: "Error del servidor al eliminar el formulario" });
    }
};