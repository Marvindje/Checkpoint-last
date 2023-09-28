const { ArticleModel } = require("../models/article.model");

class ArticleController {
  static async findAll(req, res) {
    try {
      const articles = await ArticleModel.findAll();
      return res.status(200).send(articles);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async findOneById(req, res) {
    try {
      const { articleId } = req.params;
      const article = await ArticleModel.findByPk(articleId);

      if (!article?.id) {
        return res.status(404).send(`Article (${articleId}) not found!`);
      }

      return res.status(200).send(article);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const { title, description, price, categoryId } = req.body;
      const { userId } = req.user;

      const article = await ArticleModel.create({
        title,
        description,
        price,
        userId,
        categoryId,
      });
      return res.status(200).send(article);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async updateById(req, res) {
    try {
      const { articleId } = req.params;
      const { title, description, price, categoryId } = req.body;

      const isUpdated = await ArticleModel.update(
        {
          ...(title ? { title } : {}),
          ...(description ? { description } : {}),
          ...(price ? { price } : {}),
          ...(categoryId ? { categoryId } : {}),
        },
        {
          where: {
            id: articleId,
          },
        }
      );

      if (!isUpdated?.[0]) {
        return res.status(404).send(`Article (${articleId}) not found!`);
      }

      return ArticleController.findOneById(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }

  static async deleteById(req, res) {
    try {
      const { articleId } = req.params;

      const isDestroyed = await ArticleModel.destroy({
        where: {
          id: articleId,
        },
      });

      if (!isDestroyed) {
        return res.status(404).send(`Article (${articleId}) not found!`);
      }

      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).send({ error: err.message });
    }
  }
}

module.exports = ArticleController;
