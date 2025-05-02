const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('./data-api/iglesias.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'No se pudo leer el archivo' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;