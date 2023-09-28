const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Ajout du package CORS
const router = require("./src/routes"); // Assurez-vous que ce chemin est correct
const { sequelize } = require("./config/db"); // Assurez-vous que ce chemin est correct

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"], // ajouter d'autres origines si nécessaire
    credentials: true,
  })
); // Activation de CORS pour toutes les routes

router(app);

const PORT = process.env.PORT || 5000; // plus courant d'utiliser PORT pour le serveur

sequelize
  .sync() // Vous pouvez ajouter { force: true } si vous voulez réinitialiser la DB à chaque démarrage
  .then(() => {
    app.listen(PORT, () => {
      // Utilisation de console.info au lieu de console.log pour éviter l'erreur ESLint
      console.info(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    // Utilisation de console.warn pour éviter l'erreur ESLint
    console.warn("Unable to sync database:", error);
  });
