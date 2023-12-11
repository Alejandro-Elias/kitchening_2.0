var express = require('express');
var router = express.Router();
const { detail, agregar, editar } = require('../controllers/productsController')

/* /produtos */
router
  .get("/detalle/:id", detail)
  .get("/agregar", agregar)
  .get("/editar/:id?", editar)

module.exports = router;
