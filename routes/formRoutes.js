const express = require('express');
const router = express.Router();
const FormController = require('../controllers/formController');

/**
 * @swagger
 * /api/forms:
 *   post:
 *     summary: Crear un nuevo miembro
 *     tags: [Formularios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cedula:
 *                 type: string
 *               nombreCompleto:
 *                 type: string
 *               edad:
 *                 type: integer
 *               celular:
 *                 type: string
 *               ministerio:
 *                 type: string
 *             example:
 *               cedula: "123456789"
 *               nombreCompleto: "Juan Perez"
 *               edad: 30
 *               celular: "3001234567"
 *               ministerio: "Alabanza"
 *     responses:
 *       201:
 *         description: Miembro creado exitosamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', FormController.createForm);

module.exports = router;