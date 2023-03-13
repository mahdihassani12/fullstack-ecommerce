const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const auth = require("../middlewares/authorization");
const { storeProductValidation } = require("../middlewares/validations");

router.get("/", productsController.getProducts);
router.post("/", auth, storeProductValidation, productsController.postStoreProducts);
router.get("/:id", productsController.getProduct);

module.exports = router;