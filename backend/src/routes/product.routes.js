const express = require("express");
const ProductController = require("../controllers/productcontroller");
const IsConnectedMiddleware = require("../middlewares/IsConnectedMiddleware");

const router = express.Router();

router.get(
  "/",
  IsConnectedMiddleware.execute,
  ProductController.getAllProducts
);
router.get(
  "/:id",
  IsConnectedMiddleware.execute,
  ProductController.getProductById
);
router.post(
  "/",
  IsConnectedMiddleware.execute,
  ProductController.createProduct
);
router.put(
  "/:id",
  IsConnectedMiddleware.execute,
  ProductController.updateProduct
);
router.delete(
  "/:id",
  IsConnectedMiddleware.execute,
  ProductController.deleteProduct
);

module.exports = { productRoutes };
