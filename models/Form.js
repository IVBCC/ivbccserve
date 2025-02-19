const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  cedula: { type: String, required: true },
  nombreCompleto: { type: String, required: true },
  edad: { type: Number, required: true },
  celular: { type: String, required: true },
  ministerio: { type: String, required: true },
});

module.exports = mongoose.model('Form', formSchema);