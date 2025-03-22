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
router.get('/:id', FormInscripcionCursoController.getByIdFormInscripcionCurso);

/**
 * @swagger
 * /api/inscripcioncurso/telefono/{telefono}:
 *   get:
 *     summary: Obtener un formulario por teléfono
 *     description: Busca un formulario en la base de datos usando el número de teléfono.
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: telefono
 *         required: true
 *         schema:
 *           type: string
 *         description: Número de teléfono a buscar.
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
 *                 curso:
 *                   type: string
 *                   description: Nombre del curso
 *                 nombreCompleto:
 *                   type: string
 *                 correo:
 *                   type: string
 *                 telefono:
 *                   type: string
 *                 sexo:
 *                   type: string
 *                 edad:
 *                   type: number
 *                 comentario:
 *                   type: string
 *       404:
 *         description: No se encontró el formulario con ese número de teléfono.
 *       500:
 *         description: Error del servidor.
 */
router.get('/telefono/:telefono', FormInscripcionCursoController.getByCelularFormInscripcionCurso);

/**
 * @swagger
 * /api/inscripcioncurso/{telefono}:
 *   put:
 *     summary: Actualizar un formulario de inscripción
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: telefono
 *         required: true
 *         schema:
 *           type: string
 *         description: Telefono del formulario a actualizar
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
router.put('/:telefono', FormInscripcionCursoController.updateFormInscripcionCurso);

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

/**
 * @swagger
 * /api/inscripcioncurso/telefono/{telefono}:
 *   delete:
 *     summary: Eliminar un formulario de inscripción
 *     tags: [Formulario curso]
 *     parameters:
 *       - in: path
 *         name: telefono
 *         required: true
 *         schema:
 *           type: string
 *         description: Telefono del formulario a eliminar
 *     responses:
 *       200:
 *         description: Formulario eliminado correctamente
 *       404:
 *         description: Formulario no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/telefono/:telefono',FormInscripcionCursoController.deteleFormByTelefono);
module.exports = router;