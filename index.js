require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const connection = require('./db');
const formRoutes = require('./routes/formRoutes');
const formInscripcionCursoRoutes = require('./routes/formInscripcionCursoRoutes');
const formContacto = require('./routes/formContactoRouter');
const path = require('path');
const app = express();

// Conexión a la base de datos
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Configuración Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'IVBCC API',
      version: '1.0.0',
      description: 'API para el manejo de formularios de la iglesia IVBCC'
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? 'https://ivbccserve.vercel.app'
          : 'http://localhost:5000',
        description: 'Servidor Principal'
      }
    ],
  },
  apis: ['./routes/*.js'], // Documentar rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));
app.use('/api-docs/', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));

// Rutas de la API
app.use('/api/forms', formRoutes);
app.use('/api/inscripcioncurso', formInscripcionCursoRoutes);
app.use('/api/inscripcioncurso/telefono', formInscripcionCursoRoutes);
app.use('/api',formContacto);

// Iniciar servidor en Vercel y local
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}...`);
  console.log(`Swagger en https://ivbccserve.vercel.app/api-docs`);
});

module.exports = app;