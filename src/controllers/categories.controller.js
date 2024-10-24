const categoriesModel = require("../models/categories.model");

const addCategory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name } = req.body;

    // Validation
    if (userId === undefined || name.length === 0) {
      return res.status(400).send({ message: "Id and name must be provided." });
    }

    const query = await categoriesModel.addCategory(userId, name);

    if (query.rowCount === 1) {
      res.status(201).send({ message: "Succesfully added" });
    } else {
      res.status(400).send({ message: "Resource cannot be created." });
    }
  } catch (err) {
    res.status(501).send({ message: "Resource cannot be created." });
  }
};

const editCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryEditted = req.body.categoryEditted;
    const categoryData = await categoriesModel.editCategory(
      categoryId,
      categoryEditted
    );
    res.send(categoryData);
  } catch (err) {
    console.error("Unable to edit category.");
  }
};

const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryData = await categoriesModel.Model.deleteCategory(categoryId);
    res.send(categoryData);
  } catch (err) {
    console.error("Unable to delete category.");
  }
};

module.exports = { addCategory, editCategory, deleteCategory };
