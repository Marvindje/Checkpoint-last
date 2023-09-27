const { ProductModel } = require("../models/Product.model");

class ProductController {
  // Obtenir tous les produits
  static async getAllProducts(req, res) {
    try {
      const products = await ProductModel.findAll();
      return res.status(200).send(products);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  // Obtenir un produit par son ID
  static async getProductById(req, res) {
    try {
      const product = await ProductModel.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send({ error: "Product not found" });
      }
      return res.status(200).send(product);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  // Créer un nouveau produit
  static async createProduct(req, res) {
    try {
      const { name, price } = req.body;
      const newProduct = await ProductModel.create({ name, price });
      return res.status(201).send(newProduct);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  // Mettre à jour un produit existant
  static async updateProduct(req, res) {
    try {
      const { name, price } = req.body;
      const product = await ProductModel.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send({ error: "Product not found" });
      }
      product.name = name;
      product.price = price;
      await product.save();
      return res.status(200).send(product);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  // Supprimer un produit
  static async deleteProduct(req, res) {
    try {
      const product = await ProductModel.findByPk(req.params.id);
      if (!product) {
        return res.status(404).send({ error: "Product not found" });
      }
      await product.destroy();
      return res.status(200).send({ message: "Product deleted successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = ProductController;
