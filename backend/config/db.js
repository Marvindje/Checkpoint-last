const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  sequelize,
};
