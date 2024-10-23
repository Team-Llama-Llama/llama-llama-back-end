const categoriesModel = require("../models/categories.model")

const viewCategories = async (req, res) => {
    try {
        const userId = req.params.usersId;
        const categoryData = await categoriesModel.viewCategories(userId);
        res.send(categoryData);
    } catch(err) {
        console.error("Unable to view categories.");
    }
}

const addCategory = async (req, res) => {
    try {
        const userId = req.params.usersId;
        const categoryData = await categoriesModel.addCategory(userId);
        res.send(categoryData);
    } catch (err) {
        console.error("Unable to add category.")
    }
}

const deleteCategory = async (req, res) => {
    try {
        const userId = req.params.userId;
        const categoryId = req.params.categoriesId;
        const categoryData = await categoriesModel.Model.deleteCategory(userId, categoryId);
        res.send(categoryData)
    } catch (err) {
        console.error("Unable to delete category.")
    }
}

const editCategory = async (req, res) => {
    try {
        const userId = req.params.userId;
        const categoryId = req.params.categoriesId;
        const categoryData = await categoriesModel.Model.editCategory(userId, categoryId);
        res.send(categoryData)
    } catch (err) {
        console.error("Unable to edit category.")
    }
}

module.exports = { viewCategories, addCategory, deleteCategory, editCategory }