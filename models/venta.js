class Venta {
    constructor(idCliente, idEmpleado, productos, fecha, propina) {
        this.IdCliente = idCliente;
        this.IdEmpleado = idEmpleado;
        this.Productos = productos;
        this.Fecha = fecha;
        this.Propina = propina;
    }
}

module.exports = Venta;