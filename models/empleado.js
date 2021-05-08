const Persona = require("./persona");

class Empleado extends Persona {
    constructor(id, nombre, celular, email, fechaNacimiento, direccion, fechaIngreso) {
        super(id, nombre, celular, email, fechaNacimiento);
        this.direccion = direccion;
        this.fechaIngreso = fechaIngreso;
    }
}

module.exports = Empleado;
