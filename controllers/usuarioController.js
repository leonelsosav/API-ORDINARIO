'use strict';

const firebase = require('../db');
const Usuario = require('../models/usuario');
const firestore = firebase.firestore();

const addUsuario = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('usuarios').doc(data.id).set(data);
        res.send('Record saved successfuly')
    } catch (error) {
        res.status(400).send(error, message)
    }
}

const getAllUsuarios = async (req, res, next) => {
    try {
        const data = await firestore.collection('usuarios').get();
        const usuariosArray = [];
        if (data.empty) res.status(404).send('No se encontró registro de usuarios');
        else {
            data.forEach(doc => {
                const usuario = new Usuario(
                    doc.id,
                    doc.data().nombre,
                    doc.data().direccion,
                    doc.data().celular,
                    doc.data().email,
                    doc.data().edad,
                    doc.data().direccion,
                    doc.data().fechaIngreso
                );
                usuariosArray.push(usuario);
            });
            res.send(usuariosArray)
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await firestore.collection('usuarios').doc(id).get();
        if (!data.exists) res.status(404).send('No se encontró el empleado con el ID otorgado');
        else res.send(data.data());
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const usuario = await firestore.collection('usuarios').doc(id);
        await usuario.update(data);
        res.send('Usuario actualizado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('usuarios').doc(id).delete();
        res.send('Usuario eliminado correctamente');
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = {
    addUsuario,
    getAllUsuarios,
    getUsuario,
    updateUsuario,
    deleteUsuario
}