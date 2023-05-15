const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const port = process.env.port || 3030;

require('dotenv').config({ path: './config/.env' });
require('./database/sequelize');

const userRoutes = require('./routes/user.routes');
const messageRoutes = require('./routes/message.routes');

const app = express();

// Middleware
app
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API',
      version: '1.0.0',
      description: 'API pour la gestion d\'un portfolio',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Routes
app
  .use('/api/user', userRoutes)
  .use('/api/message', messageRoutes)
  .use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.json({ message: 'Hello, Heroku!' });
});

// Server
app.listen(port, () => {
  console.log(`My backend started on the port http://localhost:${port}`);
});
