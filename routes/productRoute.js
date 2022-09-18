const express = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/product");
const validator = require("../validations/productValidation");

const router = express.Router();

router.get("/", getProducts);
router.post("/", validator(), createProduct);
router.delete("/", deleteProduct);
router.put("/", validator(), updateProduct);

module.exports = router;
