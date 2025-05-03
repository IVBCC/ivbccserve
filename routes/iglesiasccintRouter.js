const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(process.cwd(), 'data-api', 'iglesiasccInternacional.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err.message);
            return res.status(500).json({ error: 'No se pudo leer el archivo' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;