class Venta {
    constructor(idCliente, idEmpleado, productos, fecha, propina) {
        this.idCliente = idCliente;
        this.idEmpleado = idEmpleado;
        this.productos = productos;
        this.fecha = fecha;
        this.propina = propina;
    }
}

module.exports = Venta;