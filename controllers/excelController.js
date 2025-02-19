const XLSX = require("xlsx");
const fs = require("fs");
const path = require("path"); // Para rutas seguras

const filePath = path.join(__dirname, "..", "datos.xlsx"); // Ruta segura

const saveToExcel = async (nuevoDato) => {
  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets["Datos"];
    
    if (!worksheet) {
      worksheet = XLSX.utils.aoa_to_sheet([["Cédula", "Nombre Completo", "Edad", "Celular", "Ministerio"]]);
    }
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([["Cédula", "Nombre Completo", "Edad", "Celular", "Ministerio"]]);
  }

  let existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Agregar nueva fila de datos
  existingData.push([
    nuevoDato.cedula,
    nuevoDato.nombreCompleto,
    nuevoDato.edad,
    nuevoDato.celular,
    nuevoDato.ministerio
  ]);

  // Crear una nueva hoja con los datos actualizados
  const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
  workbook.Sheets["Datos"] = updatedWorksheet;

  // Agregar la hoja al libro si no está asignada
  if (!workbook.SheetNames.includes("Datos")) {
    XLSX.utils.book_append_sheet(workbook, updatedWorksheet, "Datos");
  }

  XLSX.writeFile(workbook, filePath);
};

module.exports = saveToExcel;