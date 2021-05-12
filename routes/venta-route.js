const express = require('express');
const { addVenta, getAllVentas, getVenta } = require('../controllers/ventaController');

const router = express.Router();

router.post('/venta', addVenta);
router.get('/ventas', getAllVentas);
router.get('/venta/:id', getVenta);

module.exports = {
    routes: router
}