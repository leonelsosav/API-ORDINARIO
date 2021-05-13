const express = require('express');
const { addProducto, getAllProductos, getProducto, updateProducto, deleteProducto } = require('../controllers/productoController');

const router = express.Router();

router.post('/producto', addProducto);
router.get('/producto', getAllProductos);
router.get('/producto/:id', getProducto);
router.put('/producto/:id', updateProducto);
router.delete('/producto/:id', deleteProducto);

module.exports = {
    routes: router
}