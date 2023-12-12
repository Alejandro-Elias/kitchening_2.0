var express = require('express');
var router = express.Router();
const { detail, agregar, editar, create, remove, update } = require('../controllers/productsController')

/* /produtos */
router
  .get("/detalle/:id", detail)
  .get("/agregar", agregar)
  .get("/editar/:id", editar)

  .post("/crear", create)
  .put("/actualizar/:id", update)
  
  .delete("/eliminar/:id", remove)

module.exports = router;
