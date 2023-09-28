const express = require("express");
const { articleRoutes } = require("./article.routes");
const { authRoutes } = require("./auth.routes");

const router = (app) => {
  app.use("/articles", articleRoutes);
  app.use("/auth", authRoutes);
};

module.exports = router;
