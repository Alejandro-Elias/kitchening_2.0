const express = require('express');
const router = express.Router();
const { index, cart } = require('../controllers/indexController')

/* / */
router
  .get("/", index)
  .get("/cart",cart)
  
module.exports = router;
