const express = require('express');
const router = express.Router();
const FormController = require('../controllers/formController');

/**
 * @swagger
 * /api/forms:
 *   post:
 *     summary: Registrar usuario a ministerio
 *     tags: [Formulario ministerio]
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
 *         description: Inscripcion exitosa
 *       500:
 *         description: Error del servidor
 */
router.post('/', FormController.createForm);


/**
 * @swagger
 * /api/forms:
 *   get:
 *     summary: Obtiene todos los inscritos en el ministerio
 *     description: Obtiene una lista de todos los usuarios del formulario inscripcion a ministerio en el sistema.
 *     tags: [Formulario ministerio]
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
 *                    cedula:
 *                      type: string
 *                    nombreCompleto:
 *                      type: string
 *                    edad:
 *                      type: integer
 *                    celular:
 *                      type: string
 *                    ministerio:
 *                      type: string             
 *       500:
 *         description: Error del servidor
 */
router.get('/', FormController.getForm);

/**
 * @swagger
 * /api/forms/{cedula}:
 *   get:
 *     summary: Obtener un formulario por cédula
 *     description: Busca un formulario en la base de datos usando la cédula del usuario.
 *     tags: [Formulario ministerio]
 *     parameters:
 *       - in: path
 *         name: cedula
 *         required: true
 *         schema:
 *           type: string
 *         description: Cédula del usuario a buscar.
 *     responses:
 *       200:
 *         description: Formulario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID del formulario
 *                 cedula:
 *                   type: string
 *                   description: Cédula del usuario
 *                 nombreCompleto:
 *                   type: string
 *                 edad:
 *                   type: number
 *                 celular:
 *                   type: string
 *                 ministerio:
 *                   type: string
 *       404:
 *         description: No se encontró el formulario con esa cédula.
 *       500:
 *         description: Error del servidor.
 */
router.get("/:cedula", FormController.getFormByCedula);

module.exports = router;