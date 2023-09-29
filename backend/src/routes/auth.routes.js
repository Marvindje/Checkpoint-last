const express = require("express");
const AuthController = require("../controllers/auth.controller");

const authRoutes = express.Router();

authRoutes
  .post("/register", AuthController.register)
  .post("/login", AuthController.login)
 // .get("/logout", (req, res) => {
    // Supprimer le token JWT du cookie
   // res.clearCookie('token');
    //res.status(200).json({ message: 'Déconnecté avec succès' });
  //});

module.exports = {
  authRoutes,
};
