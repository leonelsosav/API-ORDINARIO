class Usuario {
    constructor(id, nombre, edad, direccion, celular, email, fechaIngreso) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.celular = celular;
        this.email = email;
        this.fechaIngreso = fechaIngreso;
    }
}

module.exports = Usuario;
