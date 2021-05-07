
class Cliente {
    constructor(clientData) {
        this.id = clientData.id;
        this.nombre = clientData.nombre;
        this.celular = clientData.celular;
        this.email = clientData.email;
        this.fechaNacimiento = clientData.fechaNacimiento;
        this.frecuencia = clientData.frecuencia;
        this.horario = clientData.horario;
        this.tiempo = clientData.tiempo;
        this.barbero = clientData.barbero;
    }
}

module.exports = Cliente