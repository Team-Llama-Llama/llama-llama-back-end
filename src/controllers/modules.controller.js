const modulesModel = require("../models/modules.model");
const { validateModule } = require("../utils/validateModule"); // Import the validation function

// View Modules
const viewModules = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Manual validation: check if moduleId is provided and is a number
    if (!categoryId || isNaN(categoryId)) {
      return res.status(400).json({ message: "Invalid or missing module ID." });
    }

    // Call model to view modules
    const query = await modulesModel.viewModules(categoryId);

    if (query.length > 0) {
      return res.status(200).json(query);
    } else {
      return res.status(404).json({ message: "Module not found." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Add Module
const addModule = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { title, referenceUrl } = req.body;

    // Manual validation
    if (!categoryId || isNaN(categoryId)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing category ID." });
    }

    // Validation properties
    if (!title || typeof title !== "string") {
      res
        .status(400)
        .send({ message: "Title must be given, and must be an string." });
    }
    if (!referenceUrl || typeof referenceUrl !== "string") {
      res.status(400).send({
        message: "ReferenceUrl must be given, and must be an string.",
      });
    }

    // Call model to add module
    const query = await modulesModel.addModule(categoryId, title, referenceUrl);

    if (query.rowCount === 1) {
      return res.status(201).json({ message: "Module successfully added." });
    } else {
      return res.status(400).json({ message: "Unable to add module." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Edit Module
const editModule = async (req, res) => {
  try {
    const { id } = req.params;
    const moduleData = req.body;

    // Manual validation
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "Invalid or missing module ID." });
    }

    // Validate full module object
    const validationErrors = validateModule(moduleData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        message: "Object don't have the proper structure",
        errors: validationErrors,
      });
    }

    // Call model to edit module
    const query = await modulesModel.editModule(id, moduleData);

    if (query === 1) {
      return res.status(200).json({ message: "Module successfully edited." });
    } else {
      return res
        .status(404)
        .json({ message: "Module not found or unable to update." });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Delete Module
const deleteModule = async (req, res) => {
  try {
    const { id } = req.params;

    // Manual validation
    if (!id || isNaN(id)) {
      return res.status(400).json({ message: "Invalid or missing module ID." });
    }

    // Call model to delete module
    const query = await modulesModel.deleteModule(id);

    if (query === 1) {
      return res.status(200).json({ message: "Module successfully deleted." });
    } else {
      return res
        .status(404)
        .json({ message: "Module not found or unable to delete." });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { viewModules, addModule, editModule, deleteModule };
