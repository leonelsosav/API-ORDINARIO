class Venta {
    constructor(idCliente, idEmpleado, productos, fecha) {
        this.IdCliente = idCliente;
        this.IdEmpleado = idEmpleado;
        this.Productos = productos;
        this.Fecha = fecha;
    }
}

module.exports = Venta;