const categoriesModel = require("../models/categories.model");

async function isValidLogin(req, res) {
  try {
    const userId = 1;
    const query = await categoriesModel.viewCategory(userId);

    res.status(200).send({
      userId,
      data: query,
    });
  } catch (err) {
    res.status(501).send({ message: "Server internal error." });
  }
}

module.exports = {
  isValidLogin,
};
