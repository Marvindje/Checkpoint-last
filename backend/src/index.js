// modèles
require("./src/models/Product.model");
require("./src/models/Order.model"); // Corrigé ici
require("./src/models/User.model"); // Corrigé ici

const { sequelize } = require("./config/db");

// Synchronisez vos modèles avec la base de données
sequelize
  .sync({ force: true })
  .then(() => {
    // Log
    console.info("Tables created successfully!");
  })
  .catch((error) => {
    console.warn("Unable to create tables:", error);
  });
