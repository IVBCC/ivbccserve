const mongoose = require("mongoose");
const asyncHandler = require("../servidor/middleware/asyHandler");

module.exports = asyncHandler(async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
});