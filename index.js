require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const connection = require('./db');
const formRoutes = require('./routes/formRoutes');
const formInscripcionCursoRoutes = require('./routes/formInscripcionCursoRoutes');
const excelRoutes = require("./routes/excel");

const app = express();

// Conexión a la base de datos
connection();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: "*", // Permite todas las peticiones
  methods: ["GET", "POST"], // Métodos permitidos
  allowedHeaders: ["Content-Type"]
}));

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
        url: 'IVBCC',
      },
    ],
  },
  apis: ['./routes/*.js'], // Documentar rutas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use('/api/forms', formRoutes);
app.use('/api/inscripcioncurso', formInscripcionCursoRoutes);
app.use("/api/excel", excelRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}...`));


module.exports = app;