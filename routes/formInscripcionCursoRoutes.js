const express = require('express');
const router = express.Router();
const FormInscripcionCursoController = require('../controllers/formInscripcionCursoController');

/**
 * @swagger
 * /api/inscripcioncurso:
 *   post:
 *     summary: Registrar usuario a un curso
 *     tags: [Formulario curso]
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
 *                 type: string
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

/**
 * @swagger
 * /api/inscripcioncurso:
 *   get:
 *     summary: Obtiene todos los inscritos en cursos
 *     description: Obtiene una lista de todos los usuarios del formulario inscripcion a curso en el sistema.
 *     tags: [Formulario curso]
 *     responses:
 *       200:
 *         description: Inscripcion consultada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    _id:
 *                      type: string
 *                    curso:
 *                      type: string
 *                    nombreCompleto:
 *                      type: string
 *                    correo:
 *                      type: string
 *                    telefono:
 *                      type: string
 *                    sexo:
 *                      type: string
 *                    edad:
 *                      type: integer
 *                    comentario:
 *                      type: string           
 *       500:
 *         description: Error del servidor
 */
router.get('/', FormInscripcionCursoController.getFormInscripcionCurso);

router.put('')
module.exports = router;