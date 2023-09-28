const express = require("express");
const { articleRoutes } = require("./article.routes");

const router = express.Router();

router.use("/articles", articleRoutes);

module.exports = router;
