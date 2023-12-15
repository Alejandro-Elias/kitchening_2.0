const { leerJSON, escribirJSON } = require("../../data");
const {existsSync, unlinkSync} = require('fs')

module.exports = (req, res) => {

    const { name, address, url_map, description, category } = req.body;

    const {id} = req.params

    const productos = leerJSON("products")
    
    const productosUpdate = productos.map((product) => {
        if (product.id == id) {
            existsSync('public/images/' + product.mainImage) && unlinkSync('public/images/' + product.mainImage)
            product.name = name.trim();
            product.description = description.trim();
            product.address = address.trim();
            product.url_map = url_map.trim();
            product.mainImage = req.file ? req.file.filename : product.mainImage;
            product.images = [];
            product.category = category;
        }
        return product
    })

    escribirJSON(productosUpdate, "products")

    /* return res.send(req.body) */

    return res.redirect('/dashboard')
}