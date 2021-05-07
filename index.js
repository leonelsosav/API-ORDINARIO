'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const usuarioRoutes = require('./routes/usuario-route');
const clienteRoutes = require('./routes/cliente-route');
const productoRoutes = require('./routes/producto-route');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', usuarioRoutes.routes);
app.use('/api', clienteRoutes.routes);
app.use('/api', productoRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port))