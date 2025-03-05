const express = require('express');
const router = express.Router();
const FormInscripcionCursoController = require('../controllers/formInscripcionCursoController');

/**
 * @swagger
 * /api/inscripcioncurso:
 *   post:
 *     summary: Registrar usuario a un curso
 *     tags: [Formularios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               curso:
 *                 type: string
 *               nombreCompleto:
 *                 type: string
 *               correo:
 *                 type: string
 *               telefono:
 *                 type: integer
 *               sexo:
 *                 type: string
 *               edad:
 *                 type: integer
 *               comentario:
 *                 type: string
 *             example:
 *               curso: "CEFI"
 *               nombreCompleto: "Oscar Pedrozo"
 *               correo: "oscari203@gmail.com"
 *               telefono: 12345789
 *               sexo: "M"
 *               edad: 32
 *               comentario: "Buenas tardes"
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       500:
 *         description: Error del servidor
 */
router.post('/', FormInscripcionCursoController.createFormInscripcionCurso);

module.exports = router;