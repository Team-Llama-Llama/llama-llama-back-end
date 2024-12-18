const categoriesModel = require("../models/categories.model");

// Get Categories per user
const getCategories = async (req, res) => {
  try {
    const { userId } = req.params;

    // Manual validation
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ message: "Invalid or missing user ID." });
    }

    const query = await categoriesModel.viewCategory(userId);

    res.status(200).send(query);
  } catch (err) {
    res.status(500).send({
      message: "Internal error while getting all categories from user",
    });
  }
};
// Add Category
const addCategory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name } = req.body;

    // Manual validation
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ message: "Invalid or missing user ID." });
    }
    if (!name || name.trim().length === 0 || name.length > 255) {
      return res.status(400).json({
        message:
          "Category name is required and must be less than 255 characters.",
      });
    }

    // Call the model to add category
    const query = await categoriesModel.addCategory(userId, name);

    if (query.length > 0) {
      return res
        .status(201)
        .json({ message: "Successfully added", data: query[0] });
    } else {
      return res.status(400).json({ message: "Resource cannot be created." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Edit Category
const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Manual validation
    if (!id || isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing category ID." });
    }
    if (!name || name.trim().length === 0 || name.length > 255) {
      return res.status(400).json({
        message:
          "Category name is required and must be less than 255 characters.",
      });
    }

    // Call the model to edit category
    // Query in this case are rows updated
    const query = await categoriesModel.editCategory(id, name);

    if (query === 1) {
      return res.status(200).json({ message: "Successfully edited" });
    } else {
      return res.status(400).json({ message: "Resource cannot be updated." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Manual validation
    if (!id || isNaN(id)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing category ID." });
    }

    // Call the model to delete category
    // Query is the number of variables delete it
    const query = await categoriesModel.deleteCategory(id);
    if (query === 1) {
      return res.status(200).json({ message: "Successfully deleted" });
    } else {
      return res.status(400).json({ message: "Resource cannot be deleted." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { getCategories, addCategory, editCategory, deleteCategory };
