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

/**
 * @swagger
 * /api/inscripcioncurso/{id}:
 *   get:
 *     summary: Obtener un formulario de inscripción por ID
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del formulario a obtener
 *     responses:
 *       200:
 *         description: Formulario obtenido correctamente
 *       404:
 *         description: Formulario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get('/:id',FormInscripcionCursoController.getByIdFormInscripcionCurso);
/**
 * @swagger
 * /api/inscripcioncurso/{id}:
 *   put:
 *     summary: Actualizar un formulario de inscripción
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del formulario a actualizar
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
 *               curso: "Nuevo Curso"
 *               nombreCompleto: "Juan Pérez"
 *               correo: "juanperez@example.com"
 *               telefono: "3216549870"
 *               sexo: "M"
 *               edad: 28
 *               comentario: "Actualización de datos"
 *     responses:
 *       200:
 *         description: Formulario actualizado correctamente
 *       404:
 *         description: Formulario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', FormInscripcionCursoController.updateFormInscripcionCurso);

/**
 * @swagger
 * /api/inscripcioncurso/{id}:
 *   delete:
 *     summary: Eliminar un formulario de inscripción
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del formulario a eliminar
 *     responses:
 *       200:
 *         description: Formulario eliminado correctamente
 *       404:
 *         description: Formulario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', FormInscripcionCursoController.deleteFormInscripcionCurso);

module.exports = router;