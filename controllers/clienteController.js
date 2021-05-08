'use strict';

const firebase = require('../db');
const Cliente = require('../models/cliente');
const firestore = firebase.firestore();

const addCliente = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('clientes').doc(data.id).set(data);
        res.send('Record saved successfuly')
    } catch (error) {
        res.status(400).send(error, message)
    }
}

const getAllClientes = async (req, res, next) => {
    try {
        const data = await firestore.collection('clientes').get();
        const clientesArray = [];
        console.log(typeof data);
        if (data.empty) res.status(404).send('No se encontró registro de clientes');
        else {
            data.forEach(doc => {
                const cliente = new Cliente(
                    doc.id,
                    doc.data().nombre,
                    doc.data().celular,
                    doc.data().email,
                    doc.data().fechaNacimiento,
                    doc.data().monedero
                );
                clientesArray.push(cliente);
                
            });
            res.send(clientesArray)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCliente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('clientes').doc(id).get();
        if (!data.exists) res.status(404).send('No se encontró el cliente con el ID otorgado'); 
        else res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateCliente = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const cliente = await firestore.collection('clientes').doc(id);
        await cliente.update(data);
        res.send('Cliente actualizado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteCliente = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('clientes').doc(id).delete();
        res.send('Cliente eliminado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    addCliente,
    getAllClientes,
    getCliente,
    updateCliente,
    deleteCliente
}

