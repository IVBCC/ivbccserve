require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const connection = require('./db');
const formRoutes = require('./routes/formRoutes');
const formInscripcionCursoRoutes = require('./routes/formInscripcionCursoRoutes');
const path = require("path");
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
        url: 'http://localhost:5000/',
        description: 'Servidor Local'     
      },
      {
        url: 'https://ivbccserve.vercel.app/',
        description: 'Servidor en Producción'
      }
    ],
  },
  apis: ['./routes/*.js'], // Documentar rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', (req, res, next) => {
  req.baseUrl = '/api-docs';
  next();
}, swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/* app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); */
app.use('/api-docs/', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));
// Rutas
app.use('/api/forms', formRoutes);
app.use('/api/inscripcioncurso', formInscripcionCursoRoutes);

if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}...`);
    console.log(`Swagger en http://localhost:${port}/api-docs`);
  });
}


module.exports = app;