class Producto {
    constructor(id, nombre, descripcion, precio, existencia, mostrador) {
        this.Id = id;
        this.Nombre = nombre;
        this.Descripcion = descripcion;
        this.Precio = precio;
        this.Existencia = existencia;
        this.Mostrador = mostrador;
    }
}

module.exports = Producto;