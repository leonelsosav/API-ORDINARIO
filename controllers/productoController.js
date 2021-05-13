'use strict';

const firebase = require('../db');
const Producto = require('../models/producto');
const firestore = firebase.firestore();

const addProducto = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('productos').doc(data.Id).set(data);
        res.send('Record saved successfuly')
    } catch (error) {
        res.status(400).send(error, message)
    }
}

const getAllProductos = async (req, res, next) => {
    try {
        const data = await firestore.collection('productos').get();
        const productosArray = [];
        if (data.empty) res.status(404).send('No se encontró registro de productos');
        else {
            data.forEach(doc => {
                const producto = new Producto(
                    doc.id,
                    doc.data().Nombre,
                    doc.data().Descripcion,
                    doc.data().Precio,
                    doc.data().Existencia,
                    doc.data().Mostrador
                );
                productosArray.push(producto);
            });
            res.send(productosArray)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProducto = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('productos').doc(id).get();
        if (!data.exists) res.status(404).send('No se encontró el producto con el ID otorgado');
        else res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateProducto = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const producto = await firestore.collection('productos').doc(id);
        await producto.update(data);
        res.send('Producto actualizado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteProducto = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('productos').doc(id).delete();
        res.send('Producto eliminado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    addProducto,
    getAllProductos,
    getProducto,
    updateProducto,
    deleteProducto
}
