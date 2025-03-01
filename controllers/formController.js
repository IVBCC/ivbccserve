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
