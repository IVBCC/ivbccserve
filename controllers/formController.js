const Form = require('../models/Form');
const saveToExcel = require("./excelController");

exports.createForm = async (req, res) => {
    try {
        const { cedula, nombreCompleto, edad, celular, ministerio } = req.body;
        const newForm = new Form({ cedula, nombreCompleto, edad, celular, ministerio });
        await newForm.save();
        await saveToExcel(newForm);
        res.status(201).json({ message: 'Miembro creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el miembro' });
    }
};