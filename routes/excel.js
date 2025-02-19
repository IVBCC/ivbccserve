const express = require("express");
const router = express.Router();
const Form = require("../models/Form.js"); // Asegúrate de que el modelo está bien importado
const fs = require("fs");
const XLSX = require("xlsx");

// 📌 Ruta para recibir y procesar los datos
router.post("/guardar-datos", async (req, res) => {
  try {
    const { cedula, nombreCompleto, edad, celular, ministerio } = req.body;

    // 1️⃣ Guardar en MongoDB
    const newData = new Form({ cedula, nombreCompleto, edad, celular, ministerio });
    await newData.save();

    // 2️⃣ Guardar en Excel
    const filePath = "./datos.xlsx";

    let workbook;
    let worksheet;

    if (fs.existsSync(filePath)) {
      // Si el archivo existe, cargarlo
      workbook = XLSX.readFile(filePath);
      worksheet =
        workbook.Sheets["Datos"] || XLSX.utils.aoa_to_sheet([["Cédula", "Nombre Completo", "Edad", "Celular", "Ministerio"]]);
    } else {
      // Si no existe, crearlo con encabezados
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.aoa_to_sheet([["Cédula", "Nombre Completo", "Edad", "Celular", "Ministerio"]]);
    }

    // Obtener datos actuales
    let existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Agregar nueva fila
    existingData.push([cedula, nombreCompleto, edad, celular, ministerio]);

    // Actualizar hoja y guardar
    const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets["Datos"] = updatedWorksheet;
    XLSX.writeFile(workbook, filePath);

    res.status(201).json({ message: "Datos guardados en MongoDB y Excel" });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar los datos" });
  }
});

module.exports = router;