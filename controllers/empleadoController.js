'use strict';

const firebase = require('../db');
const Empleado = require('../models/empleado');
const firestore = firebase.firestore();

const addEmpleado = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('empleados').doc(data.id).set(data);
        res.send('Record saved successfuly')
    } catch (error) {
        res.status(400).send(error, message)
    }
}

const getAllEmpleados = async (req, res, next) => {
    try {
        const data = await firestore.collection('empleados').get();
        const empleadosArray = [];
        if (data.empty) res.status(404).send('No se encontró registro de empleados');
        else {
            data.forEach(doc => {
                const empleado = new Empleado(
                    doc.id,
                    doc.data().nombre,
                    doc.data().celular,
                    doc.data().email,
                    doc.data().fechaNacimiento,
                    doc.data().direccion,
                    doc.data().fechaIngreso
                );
                empleadosArray.push(empleado);
            });
            res.send(empleadosArray)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEmpleado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('empleados').doc(id).get();
        if (!data.exists) res.status(404).send('No se encontró el empleado con el ID otorgado');
        else res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateEmpleado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const empleado = await firestore.collection('empleados').doc(id);
        await empleado.update(data);
        res.send('Empleado actualizado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteEmpleado = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('empleados').doc(id).delete();
        res.send('Empleado eliminado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    addEmpleado,
    getAllEmpleados,
    getEmpleado,
    updateEmpleado,
    deleteEmpleado
}