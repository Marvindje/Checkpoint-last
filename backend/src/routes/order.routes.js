const express = require("express");
const OrderController = require("../controllers/ordercontroller");
const IsConnectedMiddleware = require("../middlewares/IsConnectedMiddleware");

const router = express.Router();

// Obtenir toutes les commandes
router.get("/", IsConnectedMiddleware.execute, OrderController.getAllOrders);

// Obtenir une commande par son ID
router.get("/:id", IsConnectedMiddleware.execute, OrderController.getOrderById);

// Créer une nouvelle commande
router.post("/", IsConnectedMiddleware.execute, OrderController.createOrder);

// Mettre à jour une commande existante
router.put("/:id", IsConnectedMiddleware.execute, OrderController.updateOrder);

// Supprimer une commande
router.delete(
  "/:id",
  IsConnectedMiddleware.execute,
  OrderController.deleteOrder
);

module.exports = { orderRoutes };
