require("./article.model");

const { sequelize } = require("../../config/db");

sequelize
  .sync({ force: true })
  .then(() => {
    console.info("Tables created successfully!");
  })
  .catch((error) => {
    console.warn("Unable to create tables:", error);
  });
