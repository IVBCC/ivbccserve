const mongoose = require("mongoose");

const formContactoSchema = new mongoose.Schema({  
  nombreCompleto: { type: String, required: true },
  correo: { type: String, required: true },
  celular: { type: String, required: true },
  iglesia: { type: String},    
  mensaje: { type: String, required: true },
});

module.exports = mongoose.model('FormContacto', formContactoSchema);