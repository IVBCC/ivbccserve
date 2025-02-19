const express = require("express");
const router = express.Router();
const saveToGoogleSheet = require("../controllers/excelController");

router.post("/guardar-en-google", saveToGoogleSheet);

module.exports = router;