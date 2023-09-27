const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const ProductModel = sequelize.define(
  "product",
  {
    // Nom du produit
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Prix du produit
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Description du produit
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // URL de l'image du produit
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Catégorie du produit
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { ProductModel };
