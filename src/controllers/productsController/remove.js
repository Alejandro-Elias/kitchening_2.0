const { leerJSON, escribirJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs')

module.exports = (req, res) => {

    const {id} = req.params;

    const productos = leerJSON("products")

    const {mainImage} = productos.find(product => product.id == id);

    existsSync('public/images/' + mainImage) && unlinkSync('public/images/' + mainImage)

    const productoFiltrado = productos.filter(producto => producto.id != id )

    escribirJSON(productoFiltrado, "products")


    return res.redirect('/dashboard')
}