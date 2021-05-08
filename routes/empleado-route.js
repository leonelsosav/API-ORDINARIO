const express = require('express');
const { addEmpleado, getAllEmpleados, getEmpleado, updateEmpleado, deleteEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

router.post('/empleado', addEmpleado);
router.get('/empleados', getAllEmpleados);
router.get('/empleado/:id', getEmpleado);
router.put('/empleado/:id', updateEmpleado);
router.delete('/empleado/:id', deleteEmpleado);

module.exports = {
    routes: router
}