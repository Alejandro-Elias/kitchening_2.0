const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req, res) => {

    const {id} = req.params;

    const productos = leerJSON("products")

    const productoFiltrado = productos.filter(producto => producto.id != id )

    escribirJSON(productoFiltrado, "products")


    return res.redirect('/dashboard')
}