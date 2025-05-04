const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(process.cwd(), 'data-api', 'iglesias.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err.message);
            return res.status(500).json({ error: 'No se pudo leer el archivo' });
        }
        res.json(JSON.parse(data));
    });
});

router.get('/pdf/colombia', (req, res) => {
    const pdfDir = path.join(process.cwd(), 'pdf', 'colombia');
    fs.readdir(pdfDir, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'No se pudieron listar los PDFs' });
      }
  
      const pdfs = files.map((file) => ({
        nombre: file.replace('.pdf', '').replace(/-/g, ' ').toUpperCase(),
        archivo: file,
        url: `/pdf/colombia/${file}`
      }));
  
      res.json(pdfs);
    });
  });
  
  router.get('/pdf/internacional', (req, res) => {
    const pdfDir = path.join(process.cwd(), 'pdf', 'internacional');
    fs.readdir(pdfDir, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'No se pudieron listar los PDFs' });
      }
  
      const pdfs = files.map((file) => ({
        nombre: file.replace('.pdf', '').replace(/-/g, ' ').toUpperCase(),
        archivo: file,
        url: `/pdf/internacional/${file}`
      }));
  
      res.json(pdfs);
    });
  });  

module.exports = router;