'use strict';

const firebase = require('../db');
const Venta = require('../models/venta');
const firestore = firebase.firestore();

const addVenta = async (req, res, next) => {

    try {
        const data = req.body;
        await firestore.collection('ventas').add(data).then(docRef => {
            res.json({ idVenta: docRef.id });
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message)
    }
}

const getAllVentas = async (req, res, next) => {
    try {
        const data = await firestore.collection('ventas').get();
        const ventasArray = [];
        if (data.empty) res.status(404).send('No se encontró registro de ventas');
        else {
            data.forEach(doc => {
                const venta = new Venta(
                    doc.id,
                    doc.data().IdCliente,
                    doc.data().IdEmpleado,
                    doc.data().Productos,
                    doc.data().Fecha,
                    doc.data().Propina
                );
                ventasArray.push(venta);
            });
            res.send(ventasArray)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getVenta = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('ventas').doc(id).get();
        if (!data.exists) res.status(404).send('No se encontró el venta con el ID otorgado');
        else res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addVenta,
    getAllVentas,
    getVenta
}
