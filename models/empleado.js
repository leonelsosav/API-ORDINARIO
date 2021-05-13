const Persona = require("./persona");

class Empleado extends Persona {
    constructor(id, nombre, celular, email, fechaNacimiento, direccion, fechaIngreso) {
        super(id, nombre, celular, email, fechaNacimiento);
        this.Direccion = direccion;
        this.FechaIngreso = fechaIngreso;
    }
}

module.exports = Empleado;
