var express = require('express');
var router = express.Router();
const { detail, agregar, editar, create, remove, update } = require('../controllers/productsController');
const upload = require('../middlewares/upload.js');


/* /produtos */
router
  .get("/detalle/:id", detail)
  .get("/agregar", agregar)
  .get("/editar/:id", editar)

  .post("/crear", upload.single("mainImage"), create)
  .put("/actualizar/:id", upload.single("mainImage"), update)
  
  .delete("/eliminar/:id", remove)

module.exports = router;
