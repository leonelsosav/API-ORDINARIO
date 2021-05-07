const Persona = require("./persona");

class Usuario extends Persona {
    constructor(id, nombre, celular, email, edad, direccion, fechaIngreso) {
        super(id, nombre, celular, email);
        this.id;
        this.nombre;
        this.celular;
        this.email;
        this.edad = edad;
        this.direccion = direccion;
        this.fechaIngreso = fechaIngreso;
    }
}

module.exports = Usuario;
