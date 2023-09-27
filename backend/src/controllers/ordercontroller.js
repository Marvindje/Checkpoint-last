const { OrderModel } = require("../models/Order.model");

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderModel.findAll();
      return res.status(200).send(orders);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async getOrderById(req, res) {
    try {
      const order = await OrderModel.findByPk(req.params.id);
      if (!order) {
        return res.status(404).send({ error: "Order not found" });
      }
      return res.status(200).send(order);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async createOrder(req, res) {
    try {
      const { userId, totalAmount, status, orderDate, estimatedDeliveryDate } =
        req.body;
      const newOrder = await OrderModel.create({
        userId,
        totalAmount,
        status,
        orderDate,
        estimatedDeliveryDate,
      });
      return res.status(201).send(newOrder);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async updateOrder(req, res) {
    try {
      const { userId, totalAmount, status, orderDate, estimatedDeliveryDate } =
        req.body;
      const order = await OrderModel.findByPk(req.params.id);
      if (!order) {
        return res.status(404).send({ error: "Order not found" });
      }
      order.userId = userId;
      order.totalAmount = totalAmount;
      order.status = status;
      order.orderDate = orderDate;
      order.estimatedDeliveryDate = estimatedDeliveryDate;
      await order.save();
      return res.status(200).send(order);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async deleteOrder(req, res) {
    try {
      const order = await OrderModel.findByPk(req.params.id);
      if (!order) {
        return res.status(404).send({ error: "Order not found" });
      }
      await order.destroy();
      return res.status(200).send({ message: "Order deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = OrderController;
