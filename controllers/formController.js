const Form = require('../models/Form');

exports.createForm = async (req, res) => {
    try {
        const { cedula, nombreCompleto, edad, celular, ministerio } = req.body;
        const newForm = new Form({ cedula, nombreCompleto, edad, celular, ministerio });
        await newForm.save();
        res.status(201).json({ message: 'Miembro creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el miembro' });
    }
};

exports.getForm = async (req, res) => {
    try {
        const forms = await Form.find(); // Asegúrate de que la conexión a la base de datos está bien configurada
        res.status(200).json(forms);
    } catch (error) {
        console.error("Error al obtener formularios:", error);
        res.status(500).json({ error: "Error del servidor al obtener formularios" });
    }
};

exports.getFormByCedula = async (req, res) => {
    try {
        const { cedula } = req.params;
        const form = await Form.findOne({ cedula });

        if (!form) {
            return res.status(404).json({ error: "No se encontró el formulario con esa cédula" });
        }

        res.status(200).json(form);
    } catch (error) {
        console.error("Error al obtener el formulario:", error);
        res.status(500).json({ error: "Error del servidor al obtener el formulario" });
    }
}

exports.updateFormByCc = async (req, res) => {
    try {
        const { cedula } = req.params;
        const { nombreCompleto, edad, celular, ministerio } = req.body;

        const traerForm = await Form.findOneAndUpdate(
            { cedula },
            { nombreCompleto, edad, celular, ministerio },
            { new: true, runValidators: true }
        );

        if (!traerForm) {
            return res.status(404).json({ error: "Formulario no encontrado con esa cédula" });
        }
        res.status(200).json({ message: "Formulario actualizado correctamente", traerForm });
    } catch (error) {
        console.error("Error al obtener el formulario:", error);
        res.status(500).json({ error: "Error del servidor al obtener el formulario" });
    }
}