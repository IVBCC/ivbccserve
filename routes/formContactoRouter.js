const express = require("express");
const router = express.Router();
const formController = require("../controllers/formControllerContacto");

router.post("/enviar-correo", formController.sendFormEmail);

module.exports = router;