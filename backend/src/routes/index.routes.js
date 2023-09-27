const express = require("express");
const IsConnectedMiddleware = require("./middlewares/IsConnectedMiddleware");
const AuthController = require("./controllers/AuthController");
const ProductController = require("./controllers/ProductController");
const OrderController = require("./controllers/OrderController");

const router = express.Router();

// Routes d'authentification
router.post("/auth/login", AuthController.login);
router.post("/auth/register", AuthController.register);

// Routes pour les produits
router.get(
  "/products",
  IsConnectedMiddleware.execute,
  ProductController.getAllProducts
);
router.get(
  "/products/:id",
  IsConnectedMiddleware.execute,
  ProductController.getProductById
);
router.post(
  "/products",
  IsConnectedMiddleware.execute,
  ProductController.createProduct
);
router.put(
  "/products/:id",
  IsConnectedMiddleware.execute,
  ProductController.updateProduct
);
router.delete(
  "/products/:id",
  IsConnectedMiddleware.execute,
  ProductController.deleteProduct
);

// Routes pour les commandes
router.get(
  "/orders",
  IsConnectedMiddleware.execute,
  OrderController.getAllOrders
);
router.get(
  "/orders/:id",
  IsConnectedMiddleware.execute,
  OrderController.getOrderById
);
// ... (autres routes pour créer, mettre à jour, supprimer des commandes)

module.exports = router;
