const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const { UserModel } = require("./user.model");

const ArticleModel = sequelize.define(
  "article",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

UserModel.hasMany(ArticleModel, { onDelete: "cascade", hooks: true });

module.exports = { ArticleModel };
