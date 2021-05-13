const express = require('express');
const { addCliente, getAllClientes, getCliente, updateCliente, deleteCliente } = require('../controllers/clienteController');

const router = express.Router();

router.post('/cliente', addCliente);
router.get('/cliente', getAllClientes);
router.get('/cliente/:id', getCliente);
router.put('/cliente/:id', updateCliente);
router.delete('/cliente/:id', deleteCliente);

module.exports = {
    routes: router
}