const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../client_secret_282490132482-e7qppfos6o54r7ebnt4q0lk5cedd4jno.apps.googleusercontent.com.json"); // Archivo JSON de credenciales

const SHEET_ID = "16A-6LkQqohsd6id14BEHHVn5f6fSksM89dJBUPrtnxA"; // Reemplázalo con tu ID de Google Sheets

const saveToGoogleSheet = async (req, res) => {
  try {
    const { cedula, nombreCompleto, edad, celular, ministerio } = req.body;

    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0]; // Primera hoja
    await sheet.addRow({ Cédula: cedula, Nombre: nombreCompleto, Edad: edad, Celular: celular, Ministerio: ministerio });

    res.status(200).json({ message: "Datos guardados en Google Sheets" });
  } catch (error) {
    console.error("Error guardando en Google Sheets:", error);
    res.status(500).json({ error: "Error al guardar en Google Sheets" });
  }
};

module.exports = saveToGoogleSheet;