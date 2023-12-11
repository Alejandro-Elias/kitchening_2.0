const express = require('express');
const router = express.Router();
const { index, cart, admin, searchAdmin } = require('../controllers/indexController')

/* / */
router
  .get("/", index)
  .get("/carrito",cart)
  .get("/dashboard", admin)
  .get("/admin/productos/buscar", searchAdmin)

  
module.exports = router;
