const Persona = require("./persona");

class Cliente extends Persona {
    constructor(id, nombre, celular, email, fechaNacimiento, monedero) {
        super(id, nombre, celular, email, fechaNacimiento);
        this.monedero = monedero;
    }
}

module.exports = Cliente