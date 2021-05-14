'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const empleadoRoutes = require('./routes/empleado-route');
const clienteRoutes = require('./routes/cliente-route');
const productoRoutes = require('./routes/producto-route');
const ventaRoutes = require('./routes/venta-route');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', empleadoRoutes.routes);
app.use('/api', clienteRoutes.routes);
app.use('/api', productoRoutes.routes);
app.use('/api', ventaRoutes.routes);

app.listen(port, () => console.log('App is listening on url http://localhost:' + port))