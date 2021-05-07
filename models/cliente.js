const Persona = require("./persona");

class Cliente extends Persona {
    constructor(id, nombre, celular, email, fechaNacimiento, frecuencia, horario, tiempo, barbero) {
        super(id, nombre, celular, email);
        this.id;
        this.nombre;
        this.celular;
        this.email;
        this.fechaNacimiento = fechaNacimiento;
        this.frecuencia = frecuencia;
        this.horario = horario;
        this.tiempo = tiempo;
        this.barbero = barbero;
    }
}

module.exports = Cliente