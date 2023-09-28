const express = require("express");
const ArticleController = require("../controllers/article.controller");
const IsConnectedMiddleware = require("../middlewares/isConnected.middleware");

const articleRoutes = express.Router();

articleRoutes
  .get("/", IsConnectedMiddleware.execute, ArticleController.findAll)
  .post("/", IsConnectedMiddleware.execute, ArticleController.create)
  .get(
    "/:articleId",
    IsConnectedMiddleware.execute,
    ArticleController.findOneById
  )
  .put(
    "/:articleId",
    IsConnectedMiddleware.execute,
    ArticleController.updateById
  )
  .delete(
    "/:articleId",
    IsConnectedMiddleware.execute,
    ArticleController.deleteById
  );

module.exports = { articleRoutes };
