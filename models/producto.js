class Producto {
    constructor(id, nombre, descripcion, precio, existencia, mostrador) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
        this.mostrador = mostrador;
    }
}

module.exports = Producto;