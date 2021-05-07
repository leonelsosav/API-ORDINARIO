const express = require('express');
const { addUsuario, getAllUsuarios, getUsuario, updateUsuario, deleteUsuario } = require('../controllers/usuarioController')

const router = express.Router();

router.post('/usuario', addUsuario);
router.get('/usuarios', getAllUsuarios);
router.get('/usuario/:id', getUsuario);
router.put('/usuario/:id', updateUsuario);
router.delete('/usuario/:id', deleteUsuario);

module.exports = {
    routes: router
}